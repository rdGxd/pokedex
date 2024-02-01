import { getStatus } from "@/utils/getStatus";
import { PokeImage } from "..";

export const PokeType = async ({ url }: PokeImage) => {
  const getType = await getStatus(url);

  return (
    <div className="flex justify-center  bg-gray-500 rounded-2xl w-full h-full p-5">
      {getType?.types.map((r) => (
        <>
          <p key={r.slot} className=" mr-1">
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
