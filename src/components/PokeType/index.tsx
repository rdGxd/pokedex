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
    <div className="flex justify-center">
      <div className="flex justify-around bg-gray-500 rounded-2xl h-fit w-fit p-5 content-center text-center ">
        {type?.types.map((r) => (
          <>
            <p key={r.type.url} className="mr-2">
              {r.type.name}
            </p>

            {/* {r.type.name === "fire" && (
            <p className="bg-red-500">{r.type.name}</p>
          )} */}
          </>
        ))}
      </div>
    </div>
  );
};
