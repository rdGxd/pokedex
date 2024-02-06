import { URL } from "@/config";
import { Pokedex } from "@/types/PokeTypes";
import { getData } from "@/utils/getData";
import router from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { Header, PokeImage, PokeType, Search } from "..";
import { Button } from "../Button";

export const PokeList = () => {
  const [posts, setPosts] = useState<Pokedex>();

  const handleNext = async () => {
    const data = await getData(posts?.next as string);
    setPosts(data);
  };

  const handlePrevious = async () => {
    const data = await getData(posts?.previous as string);
    setPosts(data);
  };

  const handleRedirect = (e: MouseEvent<HTMLLIElement>) => {
    const value = e.currentTarget.id;
    router.push(`/about/${value.toLowerCase()}`);
  };

  useEffect(() => {
    async function fetchData() {
      const res: Pokedex = await getData(`${URL}/pokemon`);
      setPosts(res);
    }

    fetchData();
  }, []);

  return (
    <div className="bg-red-500">
      <Header />
      <Search />
      <div className="bg-white rounded-lg mt-6 ">
        <ul className="grid grid-cols-3 gap-5 p-2 ">
          {posts?.results.map((poke) => (
            <li
              onClick={handleRedirect}
              id={poke.name}
              key={poke.name}
              className="border border-red-500 rounded-2xl shadow-inner shadow-gray-400 cursor-pointer items-center"
            >
              <div className="flex justify-center  flex-wrap items-center">
                <h3 className="text-black text-1xl mt-2 font-bold ml-2">
                  {poke.name}
                </h3>
                <PokeImage url={poke.url} />
                <PokeType url={poke.url} />
              </div>
            </li>
          ))}
        </ul>
        <div className="flex w-full text-center">
          {posts?.previous && (
            <Button
              text="Voltar"
              fn={handlePrevious}
              className="bg-black w-full mr-5"
            />
          )}
          {posts?.next && (
            <Button
              text="Próximo"
              fn={handleNext}
              className="bg-black w-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};
