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
    const newParams = new URLSearchParams(searchParams);
    if (value) newParams.set('query', value);
    else newParams.delete('query');
    setSearchParams(newParams);
  };

  const updateType = (checkboxValue, checked) => {
    const current = new Set(type);

    if (checked) current.add(checkboxValue);
    else current.delete(checkboxValue);

    const newParams = new URLSearchParams(searchParams);

    if (current.has('movie') && current.has('series')) {
      newParams.set('type', 'all');
    } else if (current.size > 0) {
      newParams.set('type', [...current].join(','));
    } else {
      newParams.delete('type');
    }

    setSearchParams(newParams);
  };

  return { query, type, updateQuery, updateType };
};

export default useQueryParams;
