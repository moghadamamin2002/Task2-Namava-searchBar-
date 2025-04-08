import { useRef } from 'react';

const useClearableInput = () => {
  const ref = useRef(null);

  const clearInput = () => {
    if (ref.current) {
      ref.current.value = '';
    }
  };

  return { ref, clearInput };
};
export default useClearableInput;
