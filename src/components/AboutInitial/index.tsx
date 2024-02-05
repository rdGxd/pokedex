import { IconPokeballAbout } from "@/assets";
import { IBasicStats } from "..";
import Image from "next/image";

export const AboutInitial = ({ status }: IBasicStats) => {
  return (
    <div className="flex justify-center mt-5 flex-wrap ">
      <h1 className="text-white font-bold text-2xl z-10 absolute mr-56">
        {status?.name}
      </h1>
      <Image
        src={IconPokeballAbout}
        alt=""
        className="mb-10 brightness-75 z-0 ml-56"
      />
      <img
        src={status?.sprites.front_default}
        alt=""
        className="h-1/3 absolute ml-14"
      />
    </div>
  );
};
