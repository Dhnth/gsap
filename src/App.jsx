import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef(null);
  const dhanisRef = useRef(null);
  const fathanRef = useRef(null);
  const gunawanRef = useRef(null);

  useEffect(() => {
    // Set initial state - posisi awal semua di tengah
    gsap.set([dhanisRef.current, fathanRef.current, gunawanRef.current], {
      x: 0,
    });

    // Buat timeline untuk ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom -100vh",
        scrub: 1, // Smooth scroll following (nilai 1 = smooth)
        pin: true, // Membuat section tetap terlihat saat scroll
        anticipatePin: 1,
      }
    });

    // Dhanis bergerak ke kiri (-300px)
    tl.to(dhanisRef.current, {
      x: -1300,
      duration: 1,
      ease: "power2.out"
    }, 0);

    // Fathan bergerak ke kanan (300px)
    tl.to(fathanRef.current, {
      x: 1300,
      duration: 1,
      ease: "power2.out"
    }, 0);

    // Gunawan bergerak ke kiri (-300px)
    tl.to(gunawanRef.current, {
      x: -1300,
      duration: 1,
      ease: "power2.out"
    }, 0);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative h-[200vh]">
      {/* Section untuk efek scroll */}
      <div 
        ref={containerRef}
        className="flex flex-col items-center justify-center h-screen sticky top-0 overflow-hidden"
      >
        <div className="text-center">
          <h1 
            ref={dhanisRef}
            className="text-7xl md:text-[200px] font-bold"
          >
            Dhanis
          </h1>
          <h1 
            ref={fathanRef}
            className="text-7xl md:text-[200px] text-indigo-500 font-bold my-4"
          >
            Fathan
          </h1>
          <h1 
            ref={gunawanRef}
            className="text-7xl md:text-[200px] font-bold"
          >
            Gunawan
          </h1>
        </div>
      </div>

    </div>
  )
}

export default App