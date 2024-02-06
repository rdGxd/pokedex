import { IBasicStats } from "../BasicStats";

export const BaseStats = ({ status }: IBasicStats) => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <h2 className="text-gray-500 font-bold text-xl">Base Stats</h2>
      </div>
      <div className="grid grid-cols-6 justify-items-center items-center mt-5 ">
        {status?.stats.map((att) => (
          <>
            <p className="text-gray-500 font-bold" key={att.base_stat}>
              {att.stat.name.toUpperCase()}
            </p>
            <span className="h-20 border-r-2"></span>
            <p className="text-black" key={att.base_stat}>
              {att.base_stat}
            </p>
          </>
        ))}
      </div>
    </>
  );
};
