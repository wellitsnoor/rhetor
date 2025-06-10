"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Lander from "@/components/Lander";
import Services from "@/components/Services";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import About1 from "@/components/About1";
import Navbar from "@/components/Navbar";

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

  useEffect(() => {
    const sections = sectionsRef.current;
    const container = containerRef.current;
    let currentIndex = 0;
    let isScrolling = false;

    const goToSection = (index: number) => {
      if (isScrolling || index < 0 || index >= sections.length) return;

      isScrolling = true;
      currentIndex = index;

      gsap.to(window, {
        scrollTo: sections[index],
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          isScrolling = false;
        },
      });
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;

      const delta = e.deltaY;

      if (delta > 0) {
        goToSection(currentIndex + 1);
      } else if (delta < 0) {
        goToSection(currentIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    // Optional: Prevent touch scrolling for mobile
    const handleTouch = (e: TouchEvent) => e.preventDefault();
    window.addEventListener("touchmove", handleTouch, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <Navbar sectionsRef={sectionsRef} />
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
        className="h-screen"
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
        className="h-screen"
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
    </div>
  );
}
