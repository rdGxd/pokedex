import { PokeStatus } from "@/types/PokeStatus";

export const getStatus = async (url: string) => {
  try {
    const response = await fetch(`${url}`);
    const data: PokeStatus = await response.json();
    return data;
  } catch (error) {
    //
  }
};
