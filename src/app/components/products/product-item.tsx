import { Currency, Product } from "@/core";
import Image from "next/image";
import Link from "next/link";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="bg-[#2c0e4b] rounded-xl w-44 p-4 space-y-5 shadow-xl"
    >
      <div className="relative size-40 w-full ">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="rounded-xl"
        />
      </div>
      <h3 className="truncate">{product.name}</h3>
      <span>{new Currency().format(product.promotionalPrice)}</span>
    </Link>
  );
};

export default ProductItem;
