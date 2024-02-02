import { URL } from "@/config";
import { Pokedex } from "@/types/PokeTypes";
import { getData } from "@/utils/getData";
import { useEffect, useState } from "react";
import { PokeImage, PokeType } from "..";
import { Button } from "../Button";

export const PokeList = () => {
  const [posts, setPosts] = useState<Pokedex>();

  useEffect(() => {
    async function fetchData() {
      const res: Pokedex = await getData(`${URL}/pokemon`);
      setPosts(res);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-white rounded-lg mt-6">
        <ul className="grid grid-cols-3 gap-5 p-2 ">
          {posts?.results.map((poke) => (
            <li
              key={poke.name}
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
        <Button text="next" />
      </div>
    </>
  );
};
