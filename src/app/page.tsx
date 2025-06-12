"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Lander from "@/components/Lander";
import Services from "@/components/Services";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import About1 from "@/components/About1";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Page() {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const sections = sectionsRef.current;

  //   // Create a single ScrollTrigger for the entire page
  //   ScrollTrigger.create({
  //     trigger: containerRef.current,
  //     start: "top top",
  //     end: "bottom bottom",
  //     markers: false,
  //     snap: {
  //       snapTo: 1 / (sections.length - 1),
  //       duration: 0.5,
  //       ease: "power2.inOut",
  //       inertia: false,
  //     },
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  // useEffect(() => {
  //   const sections = sectionsRef.current;
  //   const container = containerRef.current;
  //   let currentIndex = 0;
  //   let isScrolling = false;

  //   const goToSection = (index: number) => {
  //     if (isScrolling || index < 0 || index >= sections.length) return;

  //     isScrolling = true;
  //     currentIndex = index;

  //     gsap.to(window, {
  //       scrollTo: sections[index],
  //       duration: 0.6,
  //       ease: "power2.inOut",
  //       onComplete: () => {
  //         isScrolling = false;
  //       },
  //     });
  //   };

  //   const handleWheel = (e: WheelEvent) => {
  //     e.preventDefault();
  //     if (isScrolling) return;

  //     const delta = e.deltaY;

  //     if (delta > 0) {
  //       goToSection(currentIndex + 1);
  //     } else if (delta < 0) {
  //       goToSection(currentIndex - 1);
  //     }
  //   };

  //   window.addEventListener("wheel", handleWheel, { passive: false });

  //   // Optional: Prevent touch scrolling for mobile
  //   const handleTouch = (e: TouchEvent) => e.preventDefault();
  //   window.addEventListener("touchmove", handleTouch, { passive: false });

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //     window.removeEventListener("touchmove", handleTouch);
  //   };
  // }, []);

  const [index, setIndex] = useState(0);
  const isAnimating = useRef(false);

  const updateIndex = (index: number) => {
    setIndex(index);
  };

  const handleScroll = (direction: "up" | "down") => {
    if (isAnimating.current) return;

    let newIndex = index;

    if (direction === "down" && index < sectionsRef.current.length - 1) {
      newIndex += 1;
    } else if (direction === "up" && index > 0) {
      newIndex -= 1;
    }

    if (newIndex !== index) {
      isAnimating.current = true;
      setIndex(newIndex);

      gsap.to(window, {
        scrollTo: {
          y: sectionsRef.current[newIndex],
          autoKill: false,
        },
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          isAnimating.current = false;
        },
      });
    }
  };

  const scrollThreshold = 1; // minimum scroll delta to trigger scroll
  let scrollTimeout: NodeJS.Timeout;

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (isAnimating.current) return;

    // Prevent spamming large deltaY values by locking until complete
    if (Math.abs(e.deltaY) < scrollThreshold) return;

    // Clear any pending rapid fire events
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (e.deltaY > 0) {
        handleScroll("down");
      } else {
        handleScroll("up");
      }
    }, 0); // only fire once per scroll burst
  };

  const handleTouch = (() => {
    let startY = 0;
    return {
      start: (e: TouchEvent) => {
        startY = e.touches[0].clientY;
      },
      end: (e: TouchEvent) => {
        const endY = e.changedTouches[0].clientY;
        if (startY - endY > 10) handleScroll("down");
        else if (endY - startY > 10) handleScroll("up");
      },
    };
  })();

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouch.start, {
      passive: false,
    });
    window.addEventListener("touchend", handleTouch.end, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouch.start);
      window.removeEventListener("touchend", handleTouch.end);
    };
  }, [index]);

  // Prevent manual scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div ref={containerRef}>
      <Navbar sectionsRef={sectionsRef} updateIndex={updateIndex} />

      <section
        ref={(el) => {
          if (el) {
            sectionsRef.current[0] = el;
          }
        }}
        id="home"
        className="h-screen"
      >
        <Lander sectionsRef={sectionsRef} />
      </section>
      <section
        ref={(el) => {
          if (el) {
            sectionsRef.current[1] = el;
          }
        }}
        id="about"
        className="h-screen overflow-hidden"
      >
        <About1 />
      </section>
      <section
        ref={(el) => {
          if (el) {
            sectionsRef.current[2] = el;
          }
        }}
        id="about2"
        className="h-screen overflow-hidden"
      >
        <About />
      </section>
      <section
        ref={(el) => {
          if (el) {
            sectionsRef.current[3] = el;
          }
        }}
        id="services"
        className="h-screen"
      >
        <Services />
      </section>
      <section
        ref={(el) => {
          if (el) {
            sectionsRef.current[4] = el;
          }
        }}
        id="contact"
        className="h-screen"
      >
        <Contact />
      </section>
      <section
        ref={(el) => {
          if (el) {
            sectionsRef.current[5] = el;
          }
        }}
      >
        <Footer />
      </section>
    </div>
  );
}
