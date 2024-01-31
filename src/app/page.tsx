import { PokeList, Search } from "@/components";

export default async function Home() {
  return (
    <>
      <Search />
      <PokeList />
    </>
  );
}
