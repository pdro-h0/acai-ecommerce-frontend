import Image from "next/image";

interface TextAndImageProps {
  isReversed?: boolean;
  title: string;
  content: string;
  imageURL: string;
}

const TextAndImage = ({
  isReversed = false,
  content,
  title,
  imageURL,
}: TextAndImageProps) => {
  return (
    <>
      <div
        className={`flex flex-col md:flex-row gap-20 justify-center ${
          isReversed && "md:flex-row-reverse"
        }`}
      >
        <div className="md:w-[29.54rem]">
          <h4 className="text-xl md:text-4xl mt-6 mb-11">{title}</h4>

          <p className="text-left">{content}</p>
        </div>

        <div className="w-full h-56 md:w-[22rem] relative md:min-h-[22.31rem]">
          <Image src={imageURL} fill alt="boca roxa" className="rounded-md" />
        </div>
      </div>
    </>
  );
};

export default TextAndImage;
