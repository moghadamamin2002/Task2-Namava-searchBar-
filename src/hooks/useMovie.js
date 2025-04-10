import { useEffect, useState } from 'react';
import axios from 'axios';

const useMovies = (query, type, page) => {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    if (query) {
      setLoading(true);

      axios
        .get('https://www.namava.ir/api/v5.0/search/advance', {
          params: { query, type, page, count: '20' },
          signal: controller.signal,
        })
        .then((response) => {
          const results =
            response?.data?.result?.result_items[0]?.groups?.Media?.items;

          const totalItems =
            response?.data?.result?.result_items[0]?.groups?.Media?.total || 0;

          if (results && results.length > 0) {
            setMovies((prev) => (page === 1 ? results : [...prev, ...results]));
            setTotal(totalItems);
            setHasMore((page - 1) * 20 + results.length < totalItems);
          } else if (page === 1) {
            setMovies([]);
            setTotal(0);
            setHasMore(false);
          }
        })
        .catch((err) => {
          if (err.name !== 'CanceledError') {
            console.error('Error fetching movies:', err);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (page === 1) {
      setMovies([]);
      setTotal(0);
      setHasMore(false);
      setLoading(false);
    }

    return () => controller.abort();
  }, [query, type, page]);

  return { movies, total, loading, hasMore };
};

export default useMovies;
