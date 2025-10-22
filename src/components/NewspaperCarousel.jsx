import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";
import flipSound from "../assets/papperflip.wav";
import img2 from "../assets/Img12.jpg";
import img4 from "../assets/Img4.jpg";
import img8 from "../assets/Img8.jpg";
import newsletter from "../assets/newsletter.jpg";
import ofsted from "../assets/ofsted.jpg";
import img10 from "../assets/Img10.jpg";
import img11 from "../assets/Img11.jpg";
import img16 from "../assets/Img16.jpg";
import ourvision from "../assets/ourvision.jpg";


const NewspaperCarousel = () => {
  const pages = [
    {
      id: 1,
      title: "School Vision & Mission",
      image: img2,
      content:
        "At ElitePark, we inspire excellence and leadership in every learner.",
    },
    {
      id: 2,
      title: "Our Achievements",
      image: img4,
      content:
        "We are proud of our exceptional results, community projects, and awards in innovation, STEM, and creative arts.",
    },
    {
      id: 3,
      title: "Parents & Community",
      image: img8,
      content:
        "We believe education is a shared journey between the school, parents, and the wider community.",
    },
    {
      id: 4,
      title: "Parents & Community",
      image: newsletter,
      content:
        "At ElitePark, we see education as a shared journey between the school, parents, and the wider community.",
    },
    {
      id: 5,
      title: "Parents & Community",
      image: ofsted,
      content:
        "Education, to us, is a partnership built on trust and shared responsibility.",
    },
    {
      id: 6,
      title: "Parents & Community",
      image: img10,
      content:
        "We believe every child’s success is born from unity between the school, the home, and the community.",
    },
    {
      id: 7,
      title: "Parents & Community",
      image: img11,
      content:
        "At ElitePark, learning goes beyond classrooms.",
    },
    {
      id: 8,
      title: "Parents & Community",
      image: img16,
      content:
        " We believe that when schools, families, and communities work in harmony, we raise not just achievers, but visionary individuals who will shape tomorrow's world.",
    },
    {
      id: 9,
      title: "Parents & Community",
      image: ourvision,
      content:
        "We see education as a journey we take together the school, parents, and the community walking side by side.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const audioRef = useRef(null);

  const handleNext = () => {
    audioRef.current?.play();
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const handlePrev = () => {
    audioRef.current?.play();
    setCurrentPage((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
  };

  return (
    <div className="relative bg-gray-50 p-6 rounded-4xl shadow-md border border-gray-200 overflow-hidden px-8">
      <audio ref={audioRef} src={flipSound} preload="auto" />

      {/* Header + Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrev}
          className="p-2 bg-blue-600 rounded-full hover:bg-orange-600 transition"
        >
          <MoveLeft className="text-white" />
        </button>
        <h3 className="text-2xl font-bold text-blue-600 font-serif text-center">
          Highlights Prospectus
        </h3>
        <button
          onClick={handleNext}
          className="p-2 bg-blue-600 rounded-full hover:bg-orange-600 transition"
        >
          <MoveRight className="text-white" />
        </button>
      </div>

      {/* Carousel */}
      <div className="relative h-[400px] md:h-[380px] overflow-hidden perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={pages[currentPage].id}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 bg-cyan-200 rounded-xl shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-center justify-between text-gray-700 font-serif"
          >
            <div className="w-full md:w-4/11 flex justify-center items-center">
              <img
                src={pages[currentPage].image}
                alt={pages[currentPage].title}
                className="rounded-xl shadow-md w-full h-56 md:h-72 object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <h4 className="text-xl font-bold text-blue-700 mb-2">
                {pages[currentPage].title}
              </h4>
              <p className="text-gray-700 leading-relaxed text-justify">
                {pages[currentPage].content}
              </p>
              <p className="mt-6 text-sm text-right text-gray-700 italic">
                Page {currentPage + 1} of {pages.length}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NewspaperCarousel;
