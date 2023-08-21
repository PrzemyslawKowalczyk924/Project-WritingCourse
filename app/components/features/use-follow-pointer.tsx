import { useState, RefObject, useEffect } from "react";

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    const askMoreComponent = document.getElementById('ctaId');
    console.log('askMore', askMoreComponent)
    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
}

{/* <motion.div ref={ref} animate={{ x, y }} transition={{ type: "spring", damping: 3, stiffness: 50, restDelta: 0.001 }} className="bg-lavenda-pink overflow-hidden rounded-full shadow-xl m-auto absolute">
    <video src={typeWriter2} autoPlay loop muted className="w-96 h-96 object-cover"></video>
</motion.div> */}