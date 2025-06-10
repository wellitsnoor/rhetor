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

  useEffect(() => {
    const sections = sectionsRef.current;

    // Create a single ScrollTrigger for the entire page
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      markers: false,
      snap: {
        snapTo: 1 / (sections.length - 1),
        duration: 0.5,
        ease: "power2.inOut",
        inertia: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
        <Lander />
      </section>
      <section
        ref={(el) => {
          if (el) {
            sectionsRef.current[1] = el;
          }
        }}
        id="about1"
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
