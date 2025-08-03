import { useCallback, useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((pre) => pre + 1);
  }, []);
  const decrement = useCallback(() => {
    setCount((pre) => pre - 1);
  }, []);
  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);
  const setVal = useCallback((val) => {
    setCount(val);
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
    setVal,
  };
};
