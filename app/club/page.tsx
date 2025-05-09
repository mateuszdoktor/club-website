import Section from "@/components/club/Section";
import TrophyCounter from "@/components/club/TrophyCounter";
import HorizontalTimelineItem from "@/components/club/HorizontalTimelineItem";
import { timelineData } from "@/lib/data/timelineData";

export default function ClubPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900 font-sans">
      <div className="relative py-24 pt-36 text-center bg-gradient-to-br from-white via-[#f9f9f9] to-white">
        <h1 className="text-6xl font-extrabold mb-4">
          Real Madrid Club de Fútbol
        </h1>
        <p className="text-xl text-gray-600">
          The story of greatness. The legacy of legends.
        </p>
        <div className="mt-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
            alt="Real Madrid Logo"
            className="mx-auto w-28"
          />
        </div>
      </div>

      <Section
        title="Club History"
        description="Founded in 1902, Real Madrid has become a symbol..."
        image="https://www.telemadrid.es/2022/04/27/deportes/_2445365526_33907490_1300x731.jpg"
      />

      <section className="my-24 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Key Moments</h2>
        <div className="overflow-x-auto snap-x snap-mandatory flex gap-6 px-4 scrollbar-hide">
          {timelineData.map((item, idx) => (
            <HorizontalTimelineItem key={idx} {...item} />
          ))}
        </div>
      </section>

      <Section
        title="Trophies & Records"
        description="With 15 UEFA Champions League titles..."
        image="https://vacatis.com/wp-content/uploads/2023/10/Real-Madrid-Trophy-Room.webp"
        reverse
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 px-6 max-w-5xl mx-auto text-center">
        <TrophyCounter label="Champions Leagues" end={15} />
        <TrophyCounter label="La Liga Titles" end={35} />
        <TrophyCounter label="Copa del Rey" end={20} />
        <TrophyCounter label="FIFA Club World Cups" end={5} />
      </section>

      <Section
        title="Santiago Bernabéu Stadium"
        description="Recently renovated, the Bernabéu is a futuristic marvel..."
        image="https://static01.nyt.com/athletic/uploads/wp/2023/07/04120738/GettyImages-466092953-scaled.jpg"
      />

      <Section
        title="Club Anthem: Hala Madrid"
        description="The anthem 'Hala Madrid y nada más' echoes..."
        image="https://www.realtotal.de/wp-content/uploads/2017/09/2017-09-13-grada-fans-bernabeu-unten-nah-2.jpg"
        reverse
      />

      <section className="text-center py-24 px-6 bg-gradient-to-b from-white to-gray-100">
        <h3 className="text-3xl font-semibold mb-4">Hala Madrid y nada más</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real Madrid is not just a club. It's a legacy, a family, and a
          dream...
        </p>
      </section>
    </main>
  );
}
