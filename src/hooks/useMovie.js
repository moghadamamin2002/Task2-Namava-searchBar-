import { useEffect, useState } from 'react';
import axios from 'axios';

const useMovies = (query, type, page) => {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    if (query) {
      axios
        .get('https://www.namava.ir/api/v5.0/search/advance', {
          params: { query, type, page, count: '20' },
          signal: controller.signal,
        })
        .then((response) => {
          const results =
            response?.data?.result?.result_items[0]?.groups?.Media?.items;

          if (results && results.length > 0) {
            setMovies((prev) => (page === 1 ? results : [...prev, ...results]));
            setTotal(
              response?.data?.result?.result_items[0]?.groups?.Media?.total || 0
            );
          } else if (page === 1) {
            setMovies([]);
            setTotal(0);
          }
        })
        .catch((err) => {
          if (err.name !== 'CanceledError') {
            console.error('Error fetching movies:', err);
          }
          
        });
    } else {
      setMovies([]);
      setTotal(0);
    }

    return () => controller.abort();
  }, [query, type, page]);

  return { movies, total };
};

export default useMovies;
