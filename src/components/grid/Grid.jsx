import React, { useEffect, useRef, useState } from 'react';
import useStyles from './GridStyle';
import Card from '../card/Card';
import useMovies from '../../hooks/useMovie';
import useQueryParams from '../../hooks/useQueryParams';

const Grid = () => {
  const classStyle = useStyles();
  const { query, type } = useQueryParams();
  const joinedType = type.length > 0 ? type.join(',') : 'all';

  const [page, setPage] = useState(1);

  const { movies, total } = useMovies(query, joinedType, page);
  const loaderRef = useRef(null);

  useEffect(() => {
    setPage(1);
  }, [query, type]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && movies.length < total) {
          setPage(page + 1);
        }
      },
      {
        threshold: 0.6,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [movies, total]);

  return (
    <div className={classStyle.grid}>
      {movies.map((movie) => (
        <Card key={movie.id} NAME={movie.name} IMAGE={movie.image_url} />
      ))}

      <div ref={loaderRef} style={{ height: '1px' }} />
    </div>
  );
};

export default Grid;
