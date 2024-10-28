"use client";

import { Product, ProductsFilter } from "@/core";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useAPI } from "../hooks/useAPI";

interface ProductContextProps {
  products: Product[];
  search: string;
  setSearch: (search: string) => void;
  productsById: (id: string) => Product | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ProductContext = createContext<ProductContextProps>({} as any);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const { httpGet } = useAPI();

  const fetchProducts = useCallback(async () => {
    const products = await httpGet("/products");
    setProducts(products ?? []);
  }, [httpGet]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductContext.Provider
      value={{
        search,
        get products() {
          if (!search) return products;
          return new ProductsFilter().execute(search, products);
        },
        setSearch,
        productsById: (id: string) =>
          products.find((product) => product.productId === id) ?? null,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
