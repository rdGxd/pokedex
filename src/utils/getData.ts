import { URL } from "@/config";
import { PokeStatus } from "@/types/PokeStatus";
import { Pokedex } from "@/types/PokeTypes";

export const getData = async () => {
  try {
    const response = await fetch(`${URL}/pokemon`);
    const data: Pokedex = await response.json();
    return data;
  } catch (error) {
    //
  }
};

export const getStatus = async (url: string) => {
  try {
    const response = await fetch(`${url}`);
    const data: PokeStatus = await response.json();
    return data;
  } catch (error) {
    //
  }
};
