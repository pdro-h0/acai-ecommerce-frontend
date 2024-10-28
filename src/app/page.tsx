import Image from "next/image";
import Header from "./components/template/header";
import bocaImage from "./public/boca2.webp";
import Banner from "./components/home/banner";
import TextAndImage from "./components/home/text-and-image";
import acaiImage from "./public/acai1.webp";
import OurProduct from "./components/home/our-product";
import Footer from "./components/template/footer";
import { IconBrandInstagram } from "@tabler/icons-react";
import Button from "./components/template/button";

const homePage = () => {
  return (
    <div>
      <Header />
      <section className="h-60 relative w-full md:h-[37.125rem]">
        <Banner />
      </section>

      <section className="text-[#101016] mt-10 container">
        <Image
          src={acaiImage}
          alt="açai"
          width={0}
          height={0}
          className="size-14 md:size-20 rounded-full"
        />
        <TextAndImage
          title="Somos a maior rede de self-service de açaí do MUNDO!"
          content=" Nossa proposta é proporcionar uma experiência única. Nossas receitas exclusivas foram desenvolvidas com foco em inovação, o que nos inspira a trazer sabores, cores e texturas incríveis, aliados a processos que garantem a qualidade dos nossos produtos."
          imageURL="https://images.unsplash.com/photo-1477691251658-ee086a3adcac?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </section>

      <section className="text-[#101016] mt-20 container">
        <TextAndImage
          title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, ut! Eius"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat deleniti at pariatur quibusdam debitis numquam tempora, fugit et quisquam voluptatem excepturi? Deleniti laborum quis maxime ipsum, aliquam laboriosam rerum eos?"
          imageURL="https://images.unsplash.com/photo-1476887334197-56adbf254e1a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          isReversed
        />
      </section>

      <section className="text-black mt-20 container">
        <h4 className="flex gap-4 items-center justify-center">
          <Image
            src={bocaImage}
            alt="açai"
            width={0}
            height={0}
            className="size-14 md:size-20 rounded-full"
          />
          <span className="text-xl md:text-5xl font-semibold">
            Nossos Produtos
          </span>
        </h4>

        <div className="flex flex-wrap gap-6 mt-10 justify-center">
          <OurProduct imageURL="https://images.unsplash.com/photo-1709139068234-f83a548f3bec?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <OurProduct imageURL="https://images.unsplash.com/photo-1610441009633-b6ca9c6d4be2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <OurProduct imageURL="https://images.unsplash.com/photo-1530816878870-4f4fe65f5946?q=80&w=1406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <OurProduct imageURL="https://images.unsplash.com/photo-1476887334197-56adbf254e1a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <OurProduct imageURL="https://images.unsplash.com/photo-1565848920056-906a21da8c70?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <OurProduct imageURL="https://images.unsplash.com/photo-1477691251658-ee086a3adcac?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="w-full flex justify-center">
          <Button
            type="button"
            className="px-6 py-2 bg-yellow-500 text-white font-extrabold mt-6 rounded-md flex gap-2 hover:bg-yellow-700 transition-colors"
          >
            Ver Instagram
            <IconBrandInstagram />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default homePage;
