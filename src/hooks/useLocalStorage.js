import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}" : `, error);
      return initialValue;
    }
  });

  const setStoredValue = (val) => {
    try {
      const valueToStore = val instanceof Function ? val(value) : val;
      setValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}" : `, error);
    }
  };

  const clearValue = () => {
    try {
      setValue(initialValue);
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}" : `, error);
    }
  };

  return {
    value,
    setStoredValue,
    clearValue,
  };
};
