"use client";

import { CartItem, Ordered, OrderedItem } from "@/core";
import { createContext, ReactNode } from "react";
import { useCart } from "../hooks/useCart";
import { useAPI } from "../hooks/useAPI";
import { useRouter } from "next/navigation";

interface PaymentContextProps {
  finalizePurchase: () => void;
}

export const PaymentContext = createContext<PaymentContextProps>({
  finalizePurchase: function (): void {},
});

const PaymentProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const { httpPost } = useAPI();

  const finalizePurchase = async () => {
    const ordered: Partial<Ordered> = {
      date: new Date(),
      totalValor: total,
      items: items.map(
        (item: CartItem) =>
          ({
            product: {
              productId: item.product.id, //fix id name in schema
            },
            quantity: item.quantity,
            unitPrice: item.product.promotionalPrice,
          } as OrderedItem)
      ),
    };

    await httpPost("/ordereds", ordered);
    clearCart();
    router.push("/success");
  };

  return (
    <PaymentContext.Provider value={{ finalizePurchase }}>
      {children}
    </PaymentContext.Provider>
  );
};
export default PaymentProvider;
