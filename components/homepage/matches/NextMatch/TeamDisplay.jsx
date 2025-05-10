export default function TeamDisplay({ team, align }) {
  const isLeft = align === "left";

  return (
    <div className={`flex items-center ${isLeft ? "flex-row-reverse" : ""}`}>
      <img
        src={team.crest}
        alt={team.name}
        className={`h-12 xs:h-16 sm:h-20 md:h-24 w-12 xs:w-16 sm:w-20 md:w-24 object-contain ${
          isLeft
            ? "ml-2 xs:ml-3 sm:ml-4 md:ml-6"
            : "mr-2 xs:mr-3 sm:mr-4 md:mr-6"
        } opacity-90`}
      />
      <span
        className={`text-base xs:text-lg sm:text-2xl md:text-3xl font-medium text-white ${
          isLeft ? "text-right" : "text-left"
        } tracking-tight truncate max-w-[100px] xs:max-w-[120px] sm:max-w-[160px] md:max-w-none`}
        style={{
          textShadow: "0 2px 8px rgba(0,0,0,0.5)",
        }}
      >
        {team.name}
      </span>
    </div>
  );
}
