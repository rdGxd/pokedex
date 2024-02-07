import { IconPokeballAbout } from "@/assets";
import Image from "next/image";
import { IBasicStats } from "..";

export const AboutInitial = ({ status }: IBasicStats) => {
  return (
    <div className="flex justify-center mt-5 flex-wrap">
      <h1 className="text-white font-bold text-2xl z-10 absolute mr-56 ml-10 md:ml-60 lg:text-4xl">
        {status?.name}
      </h1>
      <Image
        src={IconPokeballAbout}
        alt=""
        className="mb-10 brightness-75 z-0 md:ml-96 ml-28 lg:ml-[700px]"
      />
      <img
        src={status?.sprites.front_default}
        alt=""
        className="h-1/3 absolute md:ml-14 ml-0 xl:h-1/4"
      />
    </div>
  );
};
