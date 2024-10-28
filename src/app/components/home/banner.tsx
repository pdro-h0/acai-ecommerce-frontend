import Image from "next/image";

const Banner = () => {
  return (
    <>
      <Image
        src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="teste"
        fill
        className="object-cover"
      />
      <div className="h-60 bg-black/50 absolute w-full md:h-[37.125rem]" />
      <span className="text-xl md:text-5xl text-[#f0f0f0] absolute top-1/3 uppercase font-bold left-10">
        Bateu vontade? <br />
        Sabor e energia <br />
        <span className="text-[#b88ef7]">em cada colherada!</span>{" "}
      </span>
    </>
  );
};

export default Banner;
