import { IconPokeball } from "@/assets";
import Image from "next/image";
import Router from "next/router";

export const Header = () => {
  const handleA = () => {
    Router.push("/");
  };

  return (
    <header className="flex p-4 justify-center z-10" onClick={handleA}>
      <Image alt="Icon Pokeball" src={IconPokeball} className="mr-4" />
      <h1 className="text-2xl font-bold">Pokédex</h1>
    </header>
  );
};
