export default function TeamDisplay({ team, align }) {
  const isLeft = align === "left";

  return (
    <div className={`flex items-center ${isLeft ? "flex-row-reverse" : ""}`}>
      <img
        src={team.crest}
        alt={team.name}
        className={`h-26 w-26 object-contain ${
          isLeft ? "ml-6" : "mr-6"
        } opacity-90`}
      />
      <span
        className={`text-3xl font-medium text-white ${
          isLeft ? "text-right" : "text-left"
        } tracking-tight`}
        style={{
          textShadow: "0 2px 8px rgba(0,0,0,0.5)",
        }}
      >
        {team.name}
      </span>
    </div>
  );
}
