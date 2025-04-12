import React, { useEffect, useRef, useState, useCallback } from 'react';
import useStyles from './styles';
import Card from '../Card';
import useMovies from '../../hooks/useMovie';
import useQueryParams from '../../hooks/useQueryParams';
import Loading from '../loading/Loading';
import EmptySearchPrompt from './../emptySearchPrompt/EmptySearchPrompt';
import NoResultsFound from './../noResultsFound/NoResultsFound';

const Grid = () => {
  const classStyle = useStyles();
  const { query, type } = useQueryParams();
  // change
  const joinedType = type.length > 0 ? type.join(',') : 'all';

  const [page, setPage] = useState(1);

  const { movies, total, loading, hasMore } = useMovies(
    query,
    joinedType,
    page
  );

  useEffect(() => {
    setPage(1);
  }, [query, type]);

  const observerRef = useRef();

  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;

      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((page) => page + 1);
          }
        },
        { threshold: 0.5 }
      );

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore]
  );

  if (!query) {
    return <EmptySearchPrompt />;
  }

  if (query && total === 0) {
    return <NoResultsFound />;
  }

  return (
    <div className={classStyle.grid}>
      {movies.map((movie) => (
        <Card key={movie.id} name={movie.name} image={movie.image_url} />
      ))}

      <div className="loading" ref={lastItemRef}>
        {loading && <Loading />}
      </div>
    </div>
  );
};

export default Grid;
