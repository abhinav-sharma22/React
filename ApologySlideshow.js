import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@shadcn/ui";
import { FaHeart, FaStar } from "react-icons/fa";

const slides = [
  "I'm really sorry for what happened... 💔",
  "You mean the world to me, and I never want to hurt you. 😞",
  "Every moment with you is precious, and I hate seeing you upset. 😢",
  "I promise to make it up to you and be better. 💖",
  "Can we start fresh? I love you so much! ❤️🥺"
];

export default function ApologySlideshow() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < slides.length - 1) setIndex(index + 1);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-pink-100 overflow-hidden">
      {/* Floating Hearts & Stars */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-500"
          initial={{ opacity: 0, y: Math.random() * 200 - 100, x: Math.random() * 200 - 100 }}
          animate={{ opacity: 1, y: Math.random() * 100 - 50, x: Math.random() * 100 - 50 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
        >
          {Math.random() > 0.5 ? <FaHeart size={20} /> : <FaStar size={20} className="text-yellow-400" />}
        </motion.div>
      ))}

      {/* Slideshow Text */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-md text-xl font-semibold"
      >
        {slides[index]}
      </motion.div>

      {/* Next Button */}
      {index < slides.length - 1 && (
        <Button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600" onClick={nextSlide}>
          Next ❤️
        </Button>
      )}
    </div>
  );
}
