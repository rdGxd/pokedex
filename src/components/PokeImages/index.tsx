import { getStatus } from "@/utils/getData";
import Image from "next/image";

export interface PokeImage {
  url: string;
}

export const PokeImage = async ({ url }: PokeImage) => {
  const getImage = await getStatus(url);
  return (
    <Image
      src={getImage?.sprites.front_default as string}
      alt="aa"
      width={100}
      height={100}
    />
  );
};
