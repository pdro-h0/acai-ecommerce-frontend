"use client";
import Button from "@/app/components/template/button";
import { Currency } from "@/core";
import { useCart } from "@/data/hooks/useCart";
import { useProduct } from "@/data/hooks/useProduct";
import Image from "next/image";

interface ProductPageParams {
  params: {
    id: string;
  };
}

const ProductPage = ({ params }: ProductPageParams) => {
  const { id } = params;
  const { products } = useProduct();
  console.log(products);

  const item = products.find((product) => product.id === id);
  const { addItem } = useCart();

  return (
    <div className="container pb-6 text-[#2e003e] font-semibold pt-1 ">
      {item ? (
        <div>
          <div className="flex-col md:flex-row flex justify-center mt-6 mb-2 gap-6">
            <Image
              alt={item.name}
              src={item.image}
              width={320}
              height={320}
              className="rounded-md object-cover"
            />

            <div className="flex flex-col justify-around items-center w-64">
              <h1 className="text-2xl">{item.name}</h1>

              <p className="my-6 text-[#ba3df8] text-justify">
                {item.description}
              </p>

              <div className="flex flex-col items-center gap-2">
                <span className="line-through text-sm">
                  de {new Currency().format(item.basePrice)}
                </span>
                <span className="text-lg">
                  por {new Currency().format(item.promotionalPrice)}
                </span>
              </div>
            </div>
          </div>

          <Button
            className="mt-4 w-full"
            onClick={() => addItem(item)}
            type="button"
          >
            Adicionar ao carrinho
          </Button>
        </div>
      ) : (
        <div className="h-80 flex justify-center items-center">
          <h1>ITEM NÃO ENCONTRADO</h1>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
