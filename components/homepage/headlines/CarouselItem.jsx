import Link from "next/link";
import { motion } from "framer-motion";

const CarouselItem = ({ item, ref: innerRef }) => (
  <Link href={`/news/${item.id}`} className="block">
    <motion.div
      ref={innerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative flex-shrink-0 w-[80vw] sm:w-[40vw] md:w-[28vw] lg:w-[22vw] xl:w-[20vw] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl group transform-gpu transition-transform duration-300 hover:scale-[1.02]"
    >
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full z-20 p-4">
        <h3 className="text-white text-3xl sm:text-xl lg:text-3xl font-semibold drop-shadow-lg leading-snug">
          {item.title}
        </h3>
      </div>
    </motion.div>
  </Link>
);

export default CarouselItem;
