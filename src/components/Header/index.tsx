import { IconPokeball } from "@/assets";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex p-4">
      <Image alt="Icon Pokeball" src={IconPokeball} className="mr-4" />
      <h1 className="text-2xl font-bold">Pokédex</h1>
    </header>
  );
};
