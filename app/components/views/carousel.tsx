import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const CarouselExample = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default CarouselExample;

const cards = [
  {
    url: "https://images.pexels.com/photos/19862554/pexels-photo-19862554/free-photo-of-ulica-okna-okno-telefon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://images.pexels.com/photos/19295636/pexels-photo-19295636/free-photo-of-wedkarstwo-morze-zachod-slonca-mezczyzna.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://images.pexels.com/photos/19415783/pexels-photo-19415783/free-photo-of-mezczyzna-garnitur-siedzenie-staroswiecki.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://images.pexels.com/photos/19165528/pexels-photo-19165528/free-photo-of-kobieta-kubek-drink-szklanka.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://images.pexels.com/photos/19884483/pexels-photo-19884483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://images.pexels.com/photos/14020153/pexels-photo-14020153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://images.pexels.com/photos/16390239/pexels-photo-16390239/free-photo-of-czarno-bialy-miasto-ulice-ludzie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Title 7",
    id: 7,
  },
];