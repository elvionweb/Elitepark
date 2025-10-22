// src/pages/Home.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Video2 from "../assets/Video2.mp4";


import image2 from "../assets/Img2.jpg";
import image5 from "../assets/Img5.jpg";
import image12 from "../assets/Img12.jpg";
import ofsted from "../assets/ofsted.jpg";
import joinus from "../assets/joinus.jpg";
import onlinesafety from "../assets/onlinesafety.jpg";
import ourvision from "../assets/ourvision.jpg";
import Vlk4 from "../assets/Vlk4.jpg";
import Water from "../assets/Water.jpg";
import Wind from "../assets/Wind.jpg";
import Fire from "../assets/Fire.jpg";
import Earth from "../assets/Earth.jpg";


const Home = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
  };

  // Dates To Remember Events
  const events = [
    {
      holiday: "New Year’s Day",
      date: "1 January",
      significance: "Start of the calendar year",
    },
    {
      holiday: "Workers' Day (Labour Day)",
      date: "1 May",
      significance: "Celebrates workers and labour movement",
    },
    {
      holiday: "Democracy Day",
      date: "12 June",
      significance: "Marks return to democratic rule (1999)",
    },
    {
      holiday: "Independence Day",
      date: "1 October",
      significance: "Nigeria's independence from UK in 1960",
    },
    {
      holiday: "Christmas Day",
      date: "25 December",
      significance: "Christian holiday commemorating birth of Jesus Christ",
    },
    {
      holiday: "Boxing Day",
      date: "26 December",
      significance: "Day after Christmas",
    },
    {
      holiday: "Easter Monday",
      date: "The Monday after Easter Sunday",
      significance: "Christian holiday following Easter",
    },
    {
      holiday: "Eid al-Fitr",
      date: "End of Ramadan (1 Shawwal)",
      significance: "Islamic holiday marking breaking of the fast",
    },
    {
      holiday: "Eid al-Adha",
      date: "10 Dhu al-Hijjah",
      significance: "Islamic festival of sacrifice",
    },
    {
      holiday: "Mawlid (Prophet Muhammad's Birthday)",
      date: "12 Rabi' al-Awwal",
      significance: "Islamic observance of the Prophet’s birth",
    },
  ];

  const [index, setIndex] = useState(0);
  const handleNext = () => setIndex((prev) => (prev + 1) % events.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + events.length) % events.length);

  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* 🎥 Video Carousel */}
      <section className="relative w-full overflow-hidden h-[95vh] sm:h-[70vh] md:h-[74vh] lg:h-[92vh]">
        <Slider {...settings} className="h-full">
          <div className="relative h-full">
            <video
              className="w-full h-[95vh] sm:h-[70vh] md:h-[74vh] lg:h-[92vh] object-cover"
              src={Video2}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 flex-col bg-black/40 flex space-y-3 sm:space-y-5 items-center justify-center px-3 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-yellow-300">
                Inspiring Bright Futures
              </h2>
              <h3 className="text-white font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Communication · Achievement · Respect · Empathy
              </h3>
            </div>
          </div>
        </Slider>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-200 to-gray-200 text-white py-10 md:py-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex flex-col md:flex-row items-center gap-10 py-6 md:py-10">
          {/* Text */}
          <motion.div className="flex-2 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            >
              <span className="text-blue-600">
                Welcome to <br />
              </span>
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-yellow-400"
              >
                ElitePark High School
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-4 text-base sm:text-lg md:text-1xl text-gray-700 max-w-2xl mx-auto md:mx-0"
            >
              At ElitePark High School we are proud of our fine record of
              academic achievement within our safe, caring, stimulating
              environment where pupils learn happily and well. We encourage each
              student to develop a wide range of skills and interests, to
              achieve their personal best and to work co-operatively with
              consideration for all members of our learning community at all
              times. At ElitePark we inspire excellence, build character and
              nurture every student to reach their full potential.
            </motion.p>
            <div className="mt-6 flex justify-center md:justify-start gap-4 flex-wrap">
              <Link
                to="/information/equality-report"
                className="bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-red-500 transition text-sm sm:text-base"
              >
                View <span className="text-blue-700">here</span>
              </Link>
              <Link
                to="/joinus/admissions"
                className="bg-yellow-500 text-blue-700 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-red-500 transition text-sm sm:text-base"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <img
              src={image2}
              alt="Students learning"
              className="rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-gray-200 py-5 md:py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 mb-2"
          >
            Our Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl text-yellow-500 max-w-2xl mx-auto mb-12 font-extrabold"
          >
            Explore ElitePark
          </motion.p>

          {/* Four Clickable Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                img: joinus,
                title: "Join Us",
                subtitle: "Find out how to apply",
                link: "/joinus/admissions",
              },
              {
                img: ofsted,
                title: "Ofsted",
                subtitle: "Graded as outstanding",
                link: "/about/ofsted-report",
              },
              {
                img: ourvision,
                title: "Our Vision",
                subtitle: "Learning Today, Leading Tomorrow",
                link: "/about/our-vision",
              },
              {
                img: onlinesafety,
                title: "Online Safety",
                subtitle: "Guidance and potential dangers.",
                link: "/safeguarding/online-safety",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative h-[250px] sm:h-[300px] lg:h-[350px] rounded-2xl shadow-lg overflow-hidden group"
              >
                <Link to={item.link}>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="flex flex-col items-center text-center">
                      <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white text-2xl sm:text-5xl lg:text-4xl font-bold"
                      >
                        {item.title}
                      </motion.h3>
                      {item.subtitle && (
                        <motion.p
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                          className="text-yellow-400 mt-2 text-xl sm:text-base font-medium"
                        >
                          {item.subtitle}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-[#243d32] text-yellow-300 py-10 sm:py-14 md:py-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8"
        >
          ElitePark latest news <br /> Our stories
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 w-full max-w-6xl mx-auto justify-center items-center px-4">
          {/* Left Image */}
          <motion.div className="relative w-full md:w-1/2 flex flex-col items-center group">
            <Link to="/" className="block w-full">
              <img
                src={image5}
                alt="A Level Result 2025"
                className="rounded-2xl shadow-lg w-full h-auto aspect-[16/9] object-cover"
              />
            </Link>
            <Link to="/sixthform/a-level-results">
              <div className="flex items-center mt-3 gap-2 text-yellow-400 font-semibold cursor-pointer">
                <span className="text-xl">
                  <MoveLeft size={24} />
                </span>
                <span>A Level Results</span>
              </div>
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div className="relative w-full md:w-1/2 flex flex-col items-center group">
            <Link to="/" className="block w-full">
              <img
                src={image12}
                alt="A Level Result 2025"
                className="rounded-2xl shadow-lg w-full h-auto aspect-[16/9] object-cover"
              />
            </Link>
            <Link to="/curriculum/careers">
              <div className="flex items-center mt-3 gap-2 text-yellow-400 font-semibold cursor-pointer">
                <span>Careers at ElitePark</span>
                <span className="text-xl">
                  <MoveRight size={24} />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Dates To Remember – Upcoming Events */}
      <section
        className="w-full h-[50vh] sm:h-[50vh] md:h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${Vlk4})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 w-full max-w-4xl px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl text-yellow-300 text-center mb-8 font-bold"
          >
            Dates To Remember <br />{" "}
            <span className="text-white text-3xl md:text-4xl font-semibold">
              Upcoming Events
            </span>
          </motion.h2>

          <div className="relative bg-blue-700/80 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-12 flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-2">
                  {events[index].holiday}
                </h3>
                <p className="text-lg md:text-xl font-semibold text-gray-200 mb-1">
                  <span className="font-bold text-orange-500">Date:</span>{" "}
                  {events[index].date}
                </p>
                <p className="text-base md:text-lg text-yellow-300 font-semibold">
                  {events[index].significance}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <div className="flex justify-between w-full mt-6">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-blue-400 text-yellow-300 hover:bg-gray-600 transition"
              >
                <MoveLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-blue-400 text-yellow-300 hover:bg-gray-600 transition"
              >
                <MoveRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 🏫 ElitePark School – House Colours */}
      <section
        className="w-full py-16 px-6 bg-cover bg-center relative overflow-hidden md:py-30"
        style={{
          backgroundImage: `url(${Vlk4})`, // Section background
        }}
      >
        {/* Overlay for section readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto text-center px-6 lg:px-8">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow-md mb-10"
          >
            ElitePark <br />
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className=" text-red-600"
            >
              H
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className=" text-yellow-300"
            >
              o
            </motion.span>
            <motion.span className=" text-blue-600">u</motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className=" text-white"
            >
              s
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=" text-purple-500"
            >
              e
            </motion.span>{" "}
            <motion.span className=" text-cyan-400">C</motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className=" text-pink-500"
            >
              o
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=" text-blue-600"
            >
              l
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className=" text-white"
            >
              o
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=" text-purple-500"
            >
              u
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className=" text-red-600"
            >
              r
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=" text-green-400"
            >
              s
            </motion.span>
          </motion.h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Air Box */}
            <div
              className="relative flex flex-col items-center justify-center rounded-2xl shadow-lg h-54 sm:h-64 md:h-64 lg:h-70 text-white font-semibold text-xl transition-transform duration-300 hover:scale-105 bg-cover bg-center"
              style={{ backgroundImage: `url(${Wind})` }}
            >
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-4xl sm:text-5xl"
              >
                Air
              </motion.p>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                id="air-count"
                className="relative z-10 text-2xl sm:text-3xl mt-2"
              >
                7214
              </motion.span>
            </div>

            {/* Water Box */}
            <div
              className="relative flex flex-col items-center justify-center rounded-2xl shadow-lg h-54 sm:h-64 md:h-64 lg:h-70 text-white font-semibold text-xl transition-transform duration-300 hover:scale-105 bg-cover bg-center"
              style={{ backgroundImage: `url(${Water})` }}
            >
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative z-10 text-4xl sm:text-5xl"
              >
                Water
              </motion.p>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                id="water-count"
                className="relative z-10 text-2xl sm:text-3xl mt-2"
              >
                6329
              </motion.span>
            </div>

            {/* Earth Box */}
            <div
              className="relative flex flex-col items-center justify-center rounded-2xl shadow-lg h-54 sm:h-64 md:h-64 lg:h-70 text-white font-semibold text-xl transition-transform duration-300 hover:scale-105 bg-cover bg-center"
              style={{ backgroundImage: `url(${Earth})` }}
            >
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-4xl sm:text-5xl"
              >
                Earth
              </motion.p>
              <motion.span
                id="earth-count"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10 text-2xl sm:text-3xl mt-2"
              >
                5386
              </motion.span>
            </div>

            {/* Fire Box */}
            <div
              className="relative flex flex-col items-center justify-center rounded-2xl shadow-lg h-54 sm:h-64 md:h-64 lg:h-70 text-white font-semibold text-xl transition-transform duration-300 hover:scale-105 bg-cover bg-center"
              style={{ backgroundImage: `url(${Fire})` }}
            >
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="relative z-10 text-4xl sm:text-5xl text-white"
              >
                Fire
              </motion.p>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                id="fire-count"
                className="relative z-10 text-2xl sm:text-3xl mt-2"
              >
                5897
              </motion.span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
