import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import photoOfAuthor_1 from "../../../public/images/AmPudz1.jpg";
import photoOfAuthor_2 from "../../../public/images/AmPudz2.jpg";
import photoOfAuthor_3 from "../../../public/images/AmPudz14.jpg";
import photoOfAuthor_4 from "../../../public/images/AmPudz4.jpg";
import photoOfAuthor_5 from "../../../public/images/AmPudz5.jpg";
import photoOfAuthor_6 from "../../../public/images/AmPudz6.jpg";
import photoOfAuthor_7 from "../../../public/images/AmPudz7.jpg";
import photoOfAuthor_8 from "../../../public/images/AmPudz8.jpg";
import photoOfAuthor_9 from "../../../public/images/AmPudz9.jpg";
import photoOfAuthor_10 from "../../../public/images/AmPudz10.jpg";
import photoOfAuthor_11 from "../../../public/images/AmPudz11.jpg";
import photoOfAuthor_12 from "../../../public/images/AmPudz12.jpg";
import photoOfAuthor_13 from "../../../public/images/AmPudz15.jpg";
import butterfly from "../../../public/icons/butterfly_24.png";
import doSyreny from "../../../public/movies/Do syreny film.mp4";
import dragon from '../../../public/images/dragon.svg';

const CarouselExample = () => {
  return (
    <div className="bg-lavenda-pink relative z-40">
      {/* <div className="flex flex-col h-48 items-center justify-center">
        <span className="font-black text-3xl text-gray-800">&#9884;</span>
        <span className="font-semibold uppercase text-neutral-500">
          „Cierpię za miliony, a nie mam za to ani grosza“
        </span>
      </div> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
        </span>
      </div> */}
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
    <section ref={targetRef} className="relative h-[300vh] bg-cherry-pink z-40">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
          {/* <video autoPlay muted loop src={doSyreny} /> */}
        </motion.div>
      </div>
      <img src={dragon} className="absolute bottom-0 right-[475px] w-1/3 h-1/3 -z-10 opacity-50" />
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-gray-900"
    >
      <img
        src={card.url}
        className="absolute h-2/3 m-auto w-auto inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></img>
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
    url: photoOfAuthor_1,
    title: "Title 1",
    id: 1,
  },
  {
    url: photoOfAuthor_2,
    title: "Title 2",
    id: 2,
  },
  {
    url: photoOfAuthor_3,
    title: "Title 3",
    id: 3,
  },
  {
    url: photoOfAuthor_4,
    title: "Title 4",
    id: 4,
  },
  {
    url: photoOfAuthor_5,
    title: "Title 5",
    id: 5,
  },
  {
    url: photoOfAuthor_6,
    title: "Title 6",
    id: 6,
  },
  /*  {
     url: photoOfAuthor_7,
     title: "Title 7",
     id: 7,
   },
   {
     url: photoOfAuthor_8,
     title: "Title 8",
     id: 8,
   }, */
  {
    url: photoOfAuthor_9,
    title: "Title 9",
    id: 9,
  },
  {
    url: photoOfAuthor_10,
    title: "Title 10",
    id: 10,
  },
  {
    url: photoOfAuthor_11,
    title: "Title 11",
    id: 11,
  },
  {
    url: photoOfAuthor_12,
    title: "Title 12",
    id: 12,
  },
  {
    url: photoOfAuthor_13,
    title: "Title 13",
    id: 13,
  },
];