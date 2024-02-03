import { URL } from "@/config";
import { PokeStatus } from "@/types/PokeStatus";
import { getData } from "@/utils/getData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function About() {
  const [status, setStatus] = useState<PokeStatus>();
  const router = useRouter();

  useEffect(() => {
    const getPokemon = async () => {
      const data = await getData(`${URL}/pokemon/${router.query.slug}`);
      setStatus(data);
    };

    getPokemon();
  }, [router.query.slug]);
  console.log(status)

  return (
    <>
      <h1>{router.query.slug}</h1>
    </>
  );
}
