"use client";

import Header from "../components/template/header";
import Image from "next/image";
import Footer from "../components/template/footer";
import Button from "../components/template/button";
import { useRouter } from "next/navigation";
import imagemSucesso from "../public/sucesso2.webp";

const SuccessPage = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <div className="container flex flex-col items-center">
        <Image
          src={imagemSucesso}
          alt="imagem de sucesso"
          className="h-96 mt-8 mb-1 object-contain"
        />
        <h1 className="text-3xl mb-4 text-[#2c0e4b]">
          Pedido realizado com sucesso!!!
        </h1>
        <Button onClick={() => router.push("/product")} className="w-1/2">
          Voltar
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default SuccessPage;
