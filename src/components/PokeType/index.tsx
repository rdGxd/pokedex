import { PokeStatus } from "@/types/PokeStatus";
import { getData } from "@/utils/getData";
import { useState } from "react";
import { PokeImage } from "..";

export const PokeType = ({ url }: PokeImage) => {
  const [type, setType] = useState<PokeStatus>();

  const handleGetType = async () => {
    const getType: PokeStatus = await getData(url);
    setType(getType);
  };

  handleGetType();

  return (
    <div className="flex justify-center  bg-gray-500 rounded-2xl w-full h-full p-5">
      {type?.types.map((r) => (
        <>
          <p key={r.type.name} className=" mr-1">
            {r.type.name}
          </p>

          {/* {r.type.name === "fire" && (
            <p className="bg-red-500">{r.type.name}</p>
          )} */}
        </>
      ))}
    </div>
  );
};
