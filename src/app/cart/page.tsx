"use client";

import { Currency } from "@/core";
import { useCart } from "@/data/hooks/useCart";
import Header from "../components/template/header";
import { usePyament } from "@/data/hooks/usePayment";
import Button from "../components/template/button";
import Image from "next/image";
import Footer from "../components/template/footer";

const Cart = () => {
  const { items, total, addItem, removeItem } = useCart();
  const { finalizePurchase } = usePyament();

  return (
    <>
      <Header />
      <div className="text-[#2e003e] container font-semibold py-4 rounded-xl ">
        <ul className="flex flex-col gap-4">
          {items.map((item) => (
            <li
              key={item.product.productId}
              className="border border-[#dd94ff] p-2 rounded-md"
            >
              <div className="flex flex-col md:flex-row justify-around">
                <div className="flex flex-col md:flex-row gap-9 items-center">
                  <h1 className="text-xl">{item.product.name}</h1>

                  <Image
                    width={0}
                    height={0}
                    alt="imagem do produto"
                    className="size-36 rounded-md object-cover"
                    src={item.product.image}
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-9 items-center">
                  <span>
                    <span className="line-through">
                      De {new Currency().format(item.product.basePrice)}
                    </span>{" "}
                    <br />
                    <span className="text-lg">
                      por {new Currency().format(item.product.promotionalPrice)}
                    </span>
                  </span>
                  <div className="gap-6 flex items-center px-6 border border-[#2e003d] p-1 rounded-md">
                    <button type="button" onClick={() => addItem(item.product)}>
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => removeItem(item.product)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="h-px bg-black my-2" />

        <h2 className="flex justify-between">
          <span>Total:</span>
          <span>{new Currency().format(total)}</span>
        </h2>
        <Button onClick={() => finalizePurchase()} className="mt-6 w-full">
          Continuar
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
