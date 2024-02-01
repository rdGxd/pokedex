import { IconSearch } from "@/assets";
import Image from "next/image";

export const Search = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex">
        <Image
          alt="Icon Search"
          src={IconSearch}
          className="pointer-events-none w-5 h-5 absolute top-[82px] transform -translate-y-1/2 left-24"
        />
        <input
          type="text"
          className="rounded-full ml-4 pl-12 p-2 text-gray-500 shadow-inner shadow-gray-500 w-full mr-2"
          placeholder="Search"
        />
      </div>
    </div>
  );
};
