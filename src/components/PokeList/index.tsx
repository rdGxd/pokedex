import { getData } from "@/utils/getData";
import { PokeImage, PokeType } from "..";

export const PokeList = async () => {
  const data = await getData();

  return (
    <>
      <div className=" bg-white rounded-lg mt-6">
        <ul className="grid grid-cols-3 gap-5 p-2 ">
          {data?.results.map((poke) => (
            <li
              key={poke.name}
              className="border border-red-500 rounded-2xl shadow-inner shadow-gray-400"
            >
              <div className="flex justify-center  flex-wrap ">
                <p className="text-black text-1xl mt-2 font-bold">{poke.name}</p>
                <PokeImage url={poke.url} />
                <PokeType url={poke.url} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
