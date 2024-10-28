"use client";

import { useProduct } from "@/data/hooks/useProduct";

const ProductFilter = () => {
  const { search, setSearch } = useProduct();
  return (
    <div className="w-full my-4">
      <input
      className="w-full p-2 rounded-md text-black"
        value={search ?? ""}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="o que você procura?"
      />
    </div>
  );
};

export default ProductFilter;
