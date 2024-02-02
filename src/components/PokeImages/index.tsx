import { PokeStatus } from "@/types/PokeStatus";
import { getData } from "@/utils/getData";
import { useState } from "react";

export interface PokeImage {
  url: string;
}

export const PokeImage = ({ url }: PokeImage) => {
  const [image, setImage] = useState<PokeStatus>();

  const handleGetImage = async () => {
    const res: PokeStatus = await getData(url);
    setImage(res);
  };

  handleGetImage();

  return (
    <img
      src={image?.sprites?.front_default as string}
      alt={image?.sprites?.front_default as string}
      width={100}
      height={100}
    />
  );
};
