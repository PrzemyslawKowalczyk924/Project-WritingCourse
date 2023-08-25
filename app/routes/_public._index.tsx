import type { V2_MetaFunction } from "@remix-run/node";
import Intro from "~/components/views/intro";
import Intro_PartTwo from "~/components/views/intro_PartTwo";
import InNumbers from "~/components/views/inNumbers";
import Feature from "~/components/views/feature";
import Enhance from "~/components/views/enhance";
import Ticker from "~/components/views/ticker";
import CallToAction from "~/components/views/cta";
import NewsLetter from "~/components/views/newsLetter";
import Publication from "~/components/views/publication";
import AskMore from "~/components/views/askMore";
import Hero from "~/components/views/hero";
import FindMe from "~/components/views/findMe";
import Cta2 from "~/components/views/cta2";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Kurs Pisania" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  
  return (
    <div className="grid grid-flow-row grid-cols-1 overflow-hidden">
      <Hero />
      <Intro />
      <Intro_PartTwo />
      <Ticker />
      <Feature />
      <Publication />
      <Enhance />
      <InNumbers />
      <CallToAction />
      <AskMore />
      <FindMe />
      <NewsLetter />
    </div>
  );
}

//bg-position: 90% center, bacground-size: 298%, bacground-repeat: no-repeat
// <div className="grid grid-flow-row grid-cols-1 overflow-hidden">   <--- overflow-hidden