import { IBasicStats } from "../BasicStats";

export const BaseStats = ({ status }: IBasicStats) => {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-gray-500 font-bold text-xl">Base Stats</h2>
      </div>
    </>
  );
};
