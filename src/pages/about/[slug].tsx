import {
  AboutInitial,
  AboutPoke,
  BaseStats,
  BasicStats,
  Header,
  PokeType,
  Search,
} from "@/components";
import { URL } from "@/config";
import { PokeStatus } from "@/types/PokeStatus";
import { getData } from "@/utils/getData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function About() {
  const [status, setStatus] = useState<PokeStatus>();
  const router = useRouter();

  const value = router.query.slug as string;
  const url = `${URL}/pokemon/${value}`;

  useEffect(() => {
    const getPokemon = async () => {
      const data = await getData(url);
      setStatus(data);
    };

    getPokemon();
  }, [value, url]);

  return (
    <div className="bg-gray-500 p-1  ">
      <Header />
      <Search />
      <AboutInitial status={status} />
      <div className="bg-white rounded p-5">
        <PokeType url={url} />
        <AboutPoke />
        <BasicStats status={status} />
        <BaseStats status={status} />
      </div>
    </div>
  );
}
