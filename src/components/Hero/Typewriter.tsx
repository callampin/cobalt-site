"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "no duerme.",
  "no descansa.",
  "no scrollea en TikTok.",
  "no deja en visto.",
  "no falla.",
  "no se ofende.",
  "no tira licencia.",
  "no falta.",
  "no entra a sindicatos."
];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const phrase = phrases[index];
    const timeout = isDeleting
      ? 30
      : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < phrase.length) {
          setDisplayText(phrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);

  return (
    <span className="text-blue-600 inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1.1em] bg-blue-600 ml-0.5 align-middle"
      />
    </span>
  );
}
