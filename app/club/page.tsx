import Section from "@/components/club/Section";
import TrophyCounter from "@/components/club/TrophyCounter";
import HorizontalTimelineItem from "@/components/club/HorizontalTimelineItem";
import { timelineData } from "@/lib/data/timelineData";

export default function ClubPage() {
  return (
    <main className="bg-white min-h-screen text-neutral-900">
      <div className="relative py-24 pt-32 text-center bg-gradient-to-br from-white via-[#f9f9f9] to-white">
        <h1 className="text-5xl font-black mb-4 uppercase tracking-tight">
          REAL MADRID CLUB DE FÚTBOL
        </h1>
        <p className="text-xl text-neutral-600">
          The story of greatness. The legacy of legends.
        </p>
        <div className="mt-10">
          <img
            src="/Real_Madrid_CF.svg.png"
            alt="Real Madrid Logo"
            className="mx-auto w-32"
          />
        </div>
      </div>

      <Section
        title="Club History"
        description="Founded in 1902, Real Madrid has become a symbol of excellence in world football. With a rich tradition and global fanbase, the club represents more than just football - it's a way of life."
        image="https://www.telemadrid.es/2022/04/27/deportes/_2445365526_33907490_1300x731.jpg"
      />

      <section className="my-24 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-tight">
          KEY MOMENTS IN HISTORY
        </h2>
        <div className="overflow-x-auto snap-x snap-mandatory flex gap-6 px-4 scrollbar-hide">
          {timelineData.map((item, idx) => (
            <HorizontalTimelineItem key={idx} {...item} />
          ))}
        </div>
      </section>

      <Section
        title="Trophies & Records"
        description="With 15 UEFA Champions League titles, Real Madrid stands alone as the most successful club in European football history. Our trophy room tells the story of relentless pursuit of excellence."
        image="https://vacatis.com/wp-content/uploads/2023/10/Real-Madrid-Trophy-Room.webp"
        reverse
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 px-6 max-w-5xl mx-auto text-center">
        <TrophyCounter label="Champions Leagues" end={15} />
        <TrophyCounter label="La Liga Titles" end={35} delay={0.3} />
        <TrophyCounter label="Copa del Rey" end={20} delay={0.4} />
        <TrophyCounter label="FIFA Club World Cups" end={5} delay={0.5} />
      </section>

      <Section
        title="Santiago Bernabéu Stadium"
        description="Recently renovated, the Bernabéu is a futuristic marvel that honors our history while embracing innovation. With a capacity of 85,000, it's the cathedral of football where dreams become reality."
        image="https://static01.nyt.com/athletic/uploads/wp/2023/07/04120738/GettyImages-466092953-scaled.jpg"
      />

      <Section
        title="Club Anthem: Hala Madrid"
        description="The anthem 'Hala Madrid y nada más' echoes through the stadium on match days, uniting fans from all corners of the world in a single voice of passion and pride."
        image="https://www.realtotal.de/wp-content/uploads/2017/09/2017-09-13-grada-fans-bernabeu-unten-nah-2.jpg"
        reverse
      />

      <section className="text-center py-24 px-6 bg-gradient-to-b from-white to-neutral-100">
        <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">
          HALA MADRID Y NADA MÁS
        </h3>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Real Madrid is not just a club. It's a legacy, a family, and a dream
          that transcends generations. Once a Madridista, always a Madridista.
        </p>
      </section>
    </main>
  );
}
