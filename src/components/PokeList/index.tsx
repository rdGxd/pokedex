import { getData } from "@/utils/getData";
import { PokeImage } from "..";

export const PokeList = async () => {
  const data = await getData();

  return (
    <>
      <div className="bg-white grid-cols-3 rounded-lg mt-6">
        <ul className="flex flex-wrap w-fit">
          {data?.results.map((poke) => (
            <li key={poke.name}>
              <div className="w-28 h-28">
                <h1 className="text-black">{poke.name}</h1>
                <PokeImage url={poke.url} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
