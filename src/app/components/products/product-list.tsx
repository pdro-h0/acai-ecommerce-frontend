"use client"

import { useProduct } from "@/data/hooks/useProduct";
import ProductItem from "./product-item";

const ProductList = () => {
  const { products } = useProduct();

  return (
    <div className="flex gap-4 flex-wrap py-4 justify-center">
      {products.map((product) => (
        <ProductItem product={product} key={product.productId} />
      ))}
    </div>
  );
};

export default ProductList;
