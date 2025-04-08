import { useEffect, useState } from 'react';
import axios from 'axios';

const useMovies = (propQuery, propType, page) => {
  const URL = 'https://www.namava.ir/api/v5.0/search/advance';
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    const controller = new AbortController();
    if (propQuery) {
      axios
        .get(URL, {
          params: { query: propQuery, type: propType, page: page, count: '20' },
          signal: controller.signal,
        })
        .then((response) => {
          const results =
            response?.data?.result?.result_items[0]?.groups?.Media?.items;

          if (results && results.length > 0) {
            setMovies((prevMovies) => [...prevMovies, ...results]);
            setTotal(
              response?.data?.result?.result_items[0]?.groups?.Media?.total
            );
          } else if (page === 1) {
            setMovies([]);
            setTotal(0);
          }
        });
    }
    return () => controller.abort();
  }, [propQuery, propType, page]);

  return { movies, total };
};

export default useMovies;
