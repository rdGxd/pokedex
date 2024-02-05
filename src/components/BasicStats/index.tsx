import { IconHeight, IconWeight } from "@/assets";
import { PokeStatus } from "@/types/PokeStatus";
import { PokeAbility } from "../PokeAbility";
import Image from "next/image";

export interface IBasicStats {
  status?: PokeStatus;
}

export const BasicStats = ({ status }: IBasicStats) => {
  return (
    <>
      <div className=" flex justify-around content-center items-center text-center ">
        <div className="p-2">
          {/* Peso */}
          <div className="flex font-medium">
            <Image src={IconWeight} alt="Weight" />
            <p className="ml-2">{status?.weight}kg</p>
          </div>
          <p className="mt-4">Weight</p>
        </div>
        <span className="h-20  border-r-2 "></span>
        {/* Altura */}
        <div className="p-2 ">
          <div className="flex font-medium">
            <Image src={IconHeight} alt="Height" />
            <p className="ml-2">{status?.height}m</p>
          </div>
          <p className="mt-4">Height</p>
        </div>
        <span className="h-20   border-r-2 "></span>
        {/* HABILIDADES */}
        <div>
          <div className=" font-medium">
            <PokeAbility ability={status} />
          </div>
          <p className="">Moves</p>
        </div>
      </div>
      <p className="mt-5 text-center flex p-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis
        eros vitae tellus condimentum maximus sit amet in eros.
      </p>
    </>
  );
};
