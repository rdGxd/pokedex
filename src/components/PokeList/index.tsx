"use client";

import { URL } from "@/config";
import { Pokedex } from "@/types/PokeTypes";
import { useEffect, useState } from "react";
import { PokeImage, PokeType } from "..";
import { Button } from "../Button";

export const PokeList = () => {
  const [data, setData] = useState<Pokedex>();

  useEffect(() => {
    async function teste() {
      const response = await fetch(`${URL}`);
      const data: Pokedex = await response.json();

      return setData(data);
    }

    teste();
  }, []);

  return (
    <>
      <div className="bg-white rounded-lg mt-6">
        <ul className="grid grid-cols-3 gap-5 p-2 ">
          {data?.results?.map((poke) => (
            <li
              key={poke.name + 1}
              className="border border-red-500 rounded-2xl shadow-inner shadow-gray-400"
            >
              <div className="flex justify-center  flex-wrap">
                <h3 className="text-black text-1xl mt-2 font-bold">
                  {poke.name}
                </h3>
                <PokeImage url={poke.url} />
                <PokeType url={poke.url} />
              </div>
            </li>
          ))}
        </ul>
        <Button text="Next" />
      </div>
    </>
  );
};
