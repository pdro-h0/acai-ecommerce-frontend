import { CartItem } from "@/core";
import { useCallback } from "react";

export const useLocalStorage = () => {
  const saveItem = useCallback((key: string, value: CartItem[]) => {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const getItem = useCallback((key: string) => {
    const valor = localStorage.getItem(key);
    return valor ? JSON.parse(valor) : null;
  }, []);

  const removeItem = useCallback((key: string) => {
    localStorage.removeItem(key);
  }, []);

  return {
    saveItem,
    getItem,
    removeItem,
  };
};
