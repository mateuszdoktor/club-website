export default function TeamDisplay({ team, align }) {
  const isLeft = align === "left";
  return (
    <div className="flex items-center gap-4">
      {isLeft && (
        <img
          src={team.logo}
          alt={team.name}
          className="h-20 w-20 md:h-24 md:w-24 object-contain"
        />
      )}
      <span
        className={`text-2xl md:text-3xl font-semibold ${
          isLeft ? "text-left" : "text-right"
        } hidden md:block min-w-[8rem]`}
      >
        {team.name}
      </span>
      {!isLeft && (
        <img
          src={team.logo}
          alt={team.name}
          className="h-20 w-20 md:h-24 md:w-24 object-contain"
        />
      )}
      <span className="text-lg font-semibold text-center md:hidden">
        {team.name}
      </span>
    </div>
  );
}
