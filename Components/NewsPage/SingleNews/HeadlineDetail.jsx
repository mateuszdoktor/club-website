"use client";

export function HeadlineDetail({ headline }) {
  return (
    <section className="pt-32 pb-20 px-4 md:px-6 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto">
        <img
          src={headline.img}
          alt={headline.title}
          className="w-full h-[450px] object-cover rounded-3xl shadow-xl mb-12 transition-transform duration-500 hover:scale-[1.02]"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight leading-tight">
          {headline.title}
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          By <span className="font-semibold">{headline.author}</span> ·{" "}
          {new Date(headline.createdAt).toLocaleDateString()}
        </p>
        <p className="text-xl text-gray-700 font-medium mb-8">
          {headline.description}
        </p>
        <div className="text-lg leading-8 text-gray-800 whitespace-pre-wrap">
          {headline.fullText}
        </div>
      </div>
    </section>
  );
}
