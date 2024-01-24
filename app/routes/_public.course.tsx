import CarouselExample from "~/components/views/carousel";
import TrippyScrollEffect from "~/components/views/newHero";
import TrippyScrollEffectTwo from "~/components/views/newHeroTwo";


export default function Example() {
    return (
        <div className="bg-white">
            {/* <TrippyScrollEffect /> */}
            <TrippyScrollEffectTwo />
            <CarouselExample />
        </div>
    )
}