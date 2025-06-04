import About from "@/components/About";
import Contact from "@/components/Contact";
import Lander from "@/components/Lander";
import Services from "@/components/Services";
import React from "react";

export default function page() {
  return (
    <>
      <Lander />
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>  
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
