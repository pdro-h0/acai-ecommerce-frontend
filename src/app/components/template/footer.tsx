import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#101016] py-10 mt-20">
      <div className="container">
        <div className="flex justify-between">
          <ul className="space-y-4">
            <li>
              <Link href="/product">Cardápio</Link>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Trabalhe Conosco</a>
            </li>
          </ul>

          <ul className="flex gap-4">
            <li>
              <IconBrandInstagram />
            </li>
            <li>
              <IconBrandFacebook />
            </li>
            <li>
              <IconBrandTwitter />
            </li>
          </ul>
        </div>

        <div className="h-px w-full bg-white my-6" />

        <span className="text-center">Feito com ❤ pelo Pedro!</span>
      </div>
    </footer>
  );
};

export default Footer;
