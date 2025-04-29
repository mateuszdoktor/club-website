"use client";

export function HeadlineDetail({ headline }) {
  return (
    <section className="text-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <img
          src={headline.img}
          alt={headline.title}
          className="w-full h-[500px] object-cover rounded-3xl shadow-2xl mb-10 transition-transform hover:scale-105 duration-500"
        />
        <h1 className="text-5xl font-extrabold leading-tight mb-6 text-gray-900">
          {headline.title}
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          By{" "}
          <span className="font-semibold text-gray-600">{headline.author}</span>{" "}
          · {new Date(headline.createdAt).toLocaleDateString()}
        </p>
        <p className="text-2xl font-bold text-gray-700 mb-6 leading-relaxed">
          {headline.description}
        </p>
        <div className="text-gray-800 text-xl font-normal leading-8 text-left">
          {headline.fullText}
        </div>
      </div>
    </section>
  );
}
