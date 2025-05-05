"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { timelineData } from "@/lib/data/timelineData";

const fadeIn = (delay = 0.2) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  },
});

const Section = ({
  title,
  description,
  image,
  reverse = false,
  delay = 0.2,
}) => (
  <motion.section
    variants={fadeIn(delay)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className={`flex flex-col ${
      reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    } items-center gap-12 my-24 px-6 max-w-7xl mx-auto`}
  >
    <div className="lg:w-1/2 space-y-6">
      <h2 className="text-4xl font-extrabold text-gray-900">{title}</h2>
      <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
    </div>
    <div className="lg:w-1/2">
      <img
        src={image}
        alt={title}
        className="rounded-3xl shadow-xl object-cover border border-gray-200 hover:scale-105 transition-transform duration-500"
      />
    </div>
  </motion.section>
);

const TrophyCounter = ({ label, end, delay }) => (
  <motion.div
    className="text-center"
    variants={fadeIn(delay)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <h3 className="text-5xl font-extrabold text-gold mb-2">
      <CountUp end={end} duration={2} />
    </h3>
    <p className="text-lg text-gray-700">{label}</p>
  </motion.div>
);

const HorizontalTimelineItem = ({ year, event }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl border border-gray-200 p-6 shadow-lg mx-4 scroll-mx-4 snap-center transition-transform duration-300"
  >
    <h4 className="text-2xl font-bold text-gray-800 mb-2">{year}</h4>
    <p className="text-gray-600 text-base">{event}</p>
  </motion.div>
);

export default function ClubPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900 font-sans">
      {/* Hero */}
      <div className="relative py-24 pt-36 text-center bg-gradient-to-br from-white via-[#f9f9f9] to-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold mb-4"
        >
          Real Madrid Club de Fútbol
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl text-gray-600"
        >
          The story of greatness. The legacy of legends.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
            alt="Real Madrid Logo"
            className="mx-auto w-28"
          />
        </motion.div>
      </div>

      <Section
        title="Club History"
        description="Founded in 1902, Real Madrid has become a symbol of footballing excellence. From Di Stéfano to Cristiano Ronaldo, the club's history is packed with unforgettable moments, legendary players, and an unmatched pursuit of greatness."
        image="https://www.telemadrid.es/2022/04/27/deportes/_2445365526_33907490_1300x731.jpg"
        delay={0.2}
      />

      <div className="my-24 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Key Moments</h2>
        <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-6 px-4">
          {timelineData.map((item, idx) => (
            <HorizontalTimelineItem key={idx} {...item} />
          ))}
        </div>
      </div>

      <Section
        title="Trophies & Records"
        description="With 15 UEFA Champions League titles, 35 La Liga championships, and countless other trophies, Real Madrid is the most successful club in football history."
        image="https://vacatis.com/wp-content/uploads/2023/10/Real-Madrid-Trophy-Room.webp"
        reverse
        delay={0.4}
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 px-6 max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0.5)}
      >
        <TrophyCounter label="Champions Leagues" end={15} delay={0.2} />
        <TrophyCounter label="La Liga Titles" end={35} delay={0.3} />
        <TrophyCounter label="Copa del Rey" end={20} delay={0.4} />
        <TrophyCounter label="FIFA Club World Cups" end={5} delay={0.5} />
      </motion.div>

      <Section
        title="Santiago Bernabéu Stadium"
        description="Recently renovated, the Bernabéu is a futuristic marvel of architecture. Featuring a retractable pitch, high-tech screens, and a fully enclosed roof, it's more than a stadium — it's the future of sports entertainment."
        image="https://static01.nyt.com/athletic/uploads/wp/2023/07/04120738/GettyImages-466092953-scaled.jpg"
        delay={0.6}
      />

      <Section
        title="Club Anthem: Hala Madrid"
        description="The anthem 'Hala Madrid y nada más' echoes through the stadium on matchdays, uniting millions of fans around the world. It symbolizes the passion, pride, and identity of the club and its supporters."
        image="https://www.realtotal.de/wp-content/uploads/2017/09/2017-09-13-grada-fans-bernabeu-unten-nah-2.jpg"
        reverse
        delay={0.8}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1 }}
        className="text-center py-24 px-6 bg-gradient-to-b from-white to-gray-100"
      >
        <h3 className="text-3xl font-semibold mb-4">Hala Madrid y nada más</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real Madrid is not just a club. It's a legacy, a family, and a dream.
          This page is a tribute to its glorious past and its unstoppable
          future.
        </p>
      </motion.div>
    </main>
  );
}
