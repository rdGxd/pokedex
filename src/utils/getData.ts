import { Pokedex } from "@/types/PokeTypes";

export const getData = async (URL: string) => {
  try {
    const response = await fetch(`${URL}`, {
      mode: "no-cors",
      method: "get",
    });
    const data: Pokedex = await response.json();
    return data;
  } catch (error) {
    //
  }
};
