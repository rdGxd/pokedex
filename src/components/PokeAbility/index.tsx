import { PokeStatus } from "@/types/PokeStatus";

interface IPokeAbilityProps {
  ability?: PokeStatus;
}

export const PokeAbility = ({ ability }: IPokeAbilityProps) => {
  return (
    <div className="">
      {ability?.abilities.map((r) => (
        <>
          <p key={r.ability.url} className="">
            {r.ability.name}
          </p>
        </>
      ))}
    </div>
  );
};
