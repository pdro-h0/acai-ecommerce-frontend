"use client";

import { useCart } from "@/data/hooks/useCart";
import Link from "next/link";
import { IconShoppingCart } from "@tabler/icons-react";

const Header = () => {
  const { itemsQuantity } = useCart();

  return (
    <div className="bg-[#101016] py-6">
      <div className="hidden max-w-6xl mx-auto md:flex px-4 items-center justify-around">
        <Link href={"/"}>LOGO</Link>
        <nav>
          <ul className="flex gap-2">
            <li>
              <Link href="/product">Cardápio</Link>
            </li>
            <li>Sobre nós</li>
            <li>Trabalhe Conosco</li>
          </ul>
        </nav>
        <Link
          href={"/cart"}
          className="size-10 bg-[#2c0e4b] relative rounded-full flex justify-center items-center"
        >
          <span className="size-6 absolute left-5 bottom-7 text-center rounded-full bg-[#b08d00]">
            {itemsQuantity}
          </span>
          <IconShoppingCart size={24} />
        </Link>
      </div>

      <div className="container md:hidden flex justify-between">
        <Link href={"/"}>LOGO</Link>

        <Link
          href={"/cart"}
          className="size-10 bg-[#2c0e4b] relative rounded-full flex justify-center items-center"
        >
          <span className="size-6 leading-none absolute left-4 bottom-6 text-center rounded-full bg-[#b08d00]">
            {itemsQuantity}
          </span>
          <IconShoppingCart size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
