export function HeadlineDetail({ headline }) {
  return (
    <div className="mb-20">
      <img
        src={headline.img}
        alt={headline.title}
        className="w-full h-[500px] object-cover rounded-3xl shadow-lg mb-10 transition-transform hover:scale-105 duration-500"
      />
      <h1 className="text-5xl font-extrabold leading-tight mb-6">
        {headline.title}
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        By <span className="font-semibold">{headline.author}</span> ·{" "}
        {new Date(headline.createdAt).toLocaleDateString()}
      </p>
      <p className="text-2xl font-bold text-gray-700 mb-6 leading-relaxed">
        {headline.description}
      </p>
      <div className="text-gray-900 text-xl font-semibold leading-8">
        {headline.fullText}
      </div>
    </div>
  );
}
