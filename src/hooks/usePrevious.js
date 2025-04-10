import React, { useEffect, useRef, useState, useCallback } from 'react';
import useStyles from './GridStyle';
import Card from '../card/Card';
import useMovies from '../../hooks/useMovie';
import useQueryParams from '../../hooks/useQueryParams';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const Grid = () => {
  const classStyle = useStyles();
  const { query, type } = useQueryParams();
  const joinedType = type.length > 0 ? type.join(',') : 'all';

  const [page, setPage] = useState(1);

  const prevQuery = usePrevious(query);
  const prevType = usePrevious(joinedType);

  const { movies, total, loading, hasMore } = useMovies(
    query,
    joinedType,
    page
  );


  useEffect(() => {
    if (query !== prevQuery || joinedType !== prevType) {
      setPage(1);
    }
  }, [query, joinedType, prevQuery, prevType]);

  const observerRef = useRef();

  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;

      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className={classStyle.grid}>
      {movies.map((movie) => (
        <Card key={movie.id} NAME={movie.name} IMAGE={movie.image_url} />
      ))}

      <div ref={lastItemRef} style={{ height: '1px' }} />
    </div>
  );
};

export default Grid;
