import { useRouter } from "next/router";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export const Search = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSearchPokemon = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/about/${value.toLowerCase()}`);
      setValue("");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex">
        <input
          type="text"
          onChange={handleSearchPokemon}
          onKeyDown={handleSubmit}
          value={value}
          className="rounded-full ml-4 pl-12 p-2 text-gray-500 shadow-inner shadow-gray-500 w-full mr-2"
          placeholder="Search"
        />
      </div>
    </div>
  );
};
