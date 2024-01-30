import { IconList, IconSearch } from "@/assets";
import Image from "next/image";

export const Search = () => {
  return (
    <div className="flex items-center">
      <div className="flex">
        <Image
          alt="Icon Search"
          src={IconSearch}
          className="pointer-events-none w-5 h-5 absolute top-[82px] transform -translate-y-1/2 left-8"
        />
        <input
          type="text"
          className="rounded-full ml-4 pl-12 p-2 text-gray-500 shadow-inner shadow-gray-500 w-full mr-2"
          placeholder="Search"
        />
      </div>

      <button className="border rounded-full w-10 h-10  bg-white flex items-center justify-center mr-2 shadow-inner shadow-gray-300">
        <Image alt="Icon list" src={IconList} className="w-4 h-4" />
      </button>
    </div>
  );
};
