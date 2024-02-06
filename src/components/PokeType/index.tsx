import { PokeStatus } from "@/types/PokeStatus";
import { getData } from "@/utils/getData";
import { useEffect, useState } from "react";
import { PokeImage } from "..";

export const PokeType = ({ url }: PokeImage) => {
  const [type, setType] = useState<PokeStatus>();

  useEffect(() => {
    const handleGetType = async () => {
      const getType: PokeStatus = await getData(url);
      setType(getType);
    };

    handleGetType();
  }, [url]);

  return (
    <div className="grid grid-cols-2 gap-2 p-2 justify-items-center text-white font-bold w-full h-full">
      {type?.types.map((r) => (
        <>
          {r.type.name === "fire" && (
            <p className="bg-red-500  rounded-2xl  p-3 ">{r.type.name}</p>
          )}

          {r.type.name === "normal" && (
            <p className="bg-gray-500  rounded-2xl  p-3">{r.type.name}</p>
          )}

          {r.type.name === "water" && (
            <p className="bg-blue-500  rounded-2xl  p-3  ">{r.type.name}</p>
          )}

          {r.type.name === "electric" && (
            <p className="bg-yellow-500  rounded-2xl  p-3  ">{r.type.name}</p>
          )}

          {r.type.name === "grass" && (
            <p className="bg-green-500  rounded-2xl  p-3  ">{r.type.name}</p>
          )}

          {r.type.name === "ice" && (
            <p className="bg-blue-300  rounded-2xl  p-3  ">{r.type.name}</p>
          )}

          {r.type.name === "fighting" && (
            <p className="bg-orange-800  rounded-2xl p-3  ">{r.type.name}</p>
          )}

          {r.type.name === "poison" && (
            <p className="bg-pink-900  rounded-2xl  p-3  ">{r.type.name}</p>
          )}

          {r.type.name === "ground" && (
            <p className="bg-orange-400  rounded-2xl  p-3  ">{r.type.name}</p>
          )}

          {r.type.name === "flying" && (
            <p className="bg-blue-400  rounded-2xl  p-3  ">{r.type.name}</p>
          )}

          {r.type.name === "psychic" && (
            <p className="bg-purple-500  rounded-2xl  p-3  ">{r.type.name}</p>
          )}

          {r.type.name === "bug" && (
            <p className="bg-green-700  rounded-2xl  p-3  ">{r.type.name}</p>
          )}

          {r.type.name === "rock" && (
            <p className="bg-gray-700  rounded-2xl  p-3  ">{r.type.name}</p>
          )}

          {r.type.name === "ghost" && (
            <p className="bg-orange-900  rounded-2xl  p-3  ">{r.type.name}</p>
          )}

          {r.type.name === "dragon" && (
            <p className="bg-yellow-300  rounded-2xl  p-3  ">{r.type.name}</p>
          )}

          {r.type.name === "dark" && (
            <p className="bg-dark  rounded-2xl  p-3  ">{r.type.name}</p>
          )}

          {r.type.name === "steel" && (
            <p className="bg-zinc-500  rounded-2xl  p-3  ">{r.type.name}</p>
          )}

          {r.type.name === "fairy" && (
            <p className="bg-pink-400  rounded-2xl  p-3  ">{r.type.name}</p>
          )}
        </>
      ))}
    </div>
  );
};
