"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ButtonProps {
  text: string;
  link?: string;
}

export default function Button({ text, link }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <motion.a
      initial={{ width: "8.79rem" }}
      whileHover={{ width: "12rem" }}
      transition={{ duration: 0.3 }}
      href={link || "#"}
      className="relative h-[2.9rem] text-xl text-white rounded-full border-1 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="absolute rounded-full px-5 py-2 bg-rhetor">{text}</span>
      {isHovered && (
        <motion.span
          key="arrow"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="absolute right-0 px-5 py-2 ml-auto rounded-r-full flex"
        >
          →
        </motion.span>
      )}
    </motion.a>
    </>
  );
}
