import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  const type = useMemo(() => {
    const rawType = searchParams.get('type');
    if (rawType === 'all') return ['movie', 'series'];
    return rawType?.split(',') || [];
  }, [searchParams]);

  const updateQuery = (value) => {
    const params = Object.fromEntries([...searchParams.entries()]);
    if (value) {
      params.query = value;
    } else {
      delete params.query;
    }
    setSearchParams(params);
  };

  const updateType = (checkboxValue, checked) => {
    let current = [...type];
    console.log('current 1:', current);

    if (checked && !current.includes(checkboxValue)) {
      current.push(checkboxValue);
    }

    if (!checked) {
      current = current.filter((item) => item !== checkboxValue);
    }

    const params = Object.fromEntries([...searchParams.entries()]);

    if (current.includes('movie') && current.includes('series')) {
      params.type = 'all';
    } else if (current.length > 0) {
      params.type = current.join(',');
    } else {
      delete params.type;
    }
    console.log('current 2:', current);

    setSearchParams(params);
  };

  return { query, type, updateQuery, updateType };
};

export default useQueryParams;
