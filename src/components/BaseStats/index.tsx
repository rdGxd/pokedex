import { IBasicStats } from "../BasicStats";

export const BaseStats = ({ status }: IBasicStats) => {
  return (
    <>
      <div className="flex justify-center mt-10 ">
        <h2 className="text-gray-500 font-bold text-xl lg:text-4xl">
          Base Stats
        </h2>
      </div>
      <div className="grid justify-items-center items-center mt-5 grid-cols-3 text-center lg:text-xl  xl:text-2xl">
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
