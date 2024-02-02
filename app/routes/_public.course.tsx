import CarouselExample from "~/components/views/carousel";
import TrippyScrollEffect from "~/components/views/newHero";
import TrippyScrollEffectTwo from "~/components/views/newHeroTwo";
import TrippyScrollEffectThree from "~/components/views/newHeroThree";


export default function Example() {
    return (
        <div className="bg-white">
            <TrippyScrollEffectThree />

           {/*  <TrippyScrollEffect />
            <TrippyScrollEffectTwo />
            <CarouselExample /> */}
        </div>
    )
}