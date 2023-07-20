import type { V2_MetaFunction } from "@remix-run/node";
import Navigation from "~/components/navigation";
import Intro from "~/components/intro";
import Footer from "~/components/footer";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Kurs Pisania" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="grid grid-flow-row grid-cols-1 gap-x-8 gap-y-12">
      <Navigation colSpan="" />
      <header className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-8xl mb-2 mt-auto text-magenta tracking-tighter">Amelia Pudzianowska</h1>
          <h1 className="text-4xl mt-2 font-thin text-magenta">Przedstawia:</h1>
          <h2 className="text-1 mt-auto font-extralight text-magenta mb-7">2023 Radom | blog & kurs</h2>
      </header>
      <Intro />
      <section className="grid grid-cols-2 min-h-1/2 bg-lavenda-pink">
        <h4 className="text-2xl">Pisz jak szef!</h4>
        <h4 className="text-2xl">Kurs pisania – Ciesz się sztuką!</h4>
        <h4 className="text-2xl">Powiedz, światu coś ważnego! Kurs kreatywnego pisania</h4>
        <h4 className="text-2xl">Rozpisz się! Kurs kreatywnego pisania dla każdego</h4>
      </section>
      <Footer />
    </div>
  );
}
