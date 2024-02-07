import { IconPokeball } from "@/assets";
import Image from "next/image";
import Router from "next/router";

export const Header = () => {
  const handleA = () => {
    Router.push("/");
  };

  return (
    <header
      className="flex p-4 justify-center z-10 xl:text-2xl items-center content-center cursor-pointer"
      onClick={handleA}
    >
      <Image alt="Icon Pokeball" src={IconPokeball} className="mr-4 xl:w-10 xl:h-10" />
      <h1 className="text-2xl font-bold lg:text-2xl xl:text-5xl">Pokédex</h1>
    </header>
  );
};
