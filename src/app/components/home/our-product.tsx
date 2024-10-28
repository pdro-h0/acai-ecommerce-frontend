import Image from "next/image";
import Link from "next/link";

interface OurProductProps{
    imageURL: string
}

const OurProduct = ({ imageURL }: OurProductProps) => {
  return (
    <>
      <Link className="size-24 md:size-60 relative" href="product">
        <Image
          src={imageURL}
          fill
          alt="imagem de açai"
          className="rounded-md object-cover"
        />
      </Link>
    </>
  );
};

export default OurProduct;
