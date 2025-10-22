// src/pages/curriculum/BridgingWorkYear10_11.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pp25 from "../../assets/pp25.jpg";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function BridgingWorkYear10_11() {
  const works = [
    "Y10 into 11 Fine Art Bridging work 2025",
    "Y10 into 11 Art Graphics Bridging work 2024",
    "Y10 into 11 Biology Bridging work 2025",
    "Y10 into 11 Business Bridging work 2024",
    "Y10 into 11 Chemistry Bridging work 2025",
    "Y10 into 11 Computer Science Bridging work 2025",
    "Y10 into 11 Drama Bridging work 2025",
    "Y10 into 11 English Bridging work 2025",
    "Y10 into 11 Food Bridging work 2024",
    "Y10 into 11 French Bridging work 2025",
    "Y10 into 11 Geography Bridging work 2025",
    "Y10 into 11 German Bridging work 2024",
    "Y10 into 11 H&SC Bridging work 2024",
    "Y10 into 11 History Bridging work 2025",
    "Y10 into 11 Latin Bridging work 2024",
    "Y10 into 11 Maths Pack A Bridging work 2024",
    "Y10 into 11 Maths Pack B Bridging work 2024",
    "Y10 into 11 Maths Pack C Bridging work 2024",
    "Y10 into 11 PE Bridging work 2024",
    "Y10 into 11 Philosophy Bridging work 2024",
    "Y10 into 11 Physics Bridging work 2025",
    "Y10 into 11 Psychology Bridging work 2024",
    "Y10 into 11 Spanish Bridging work 2025",
    "Y10 into 11 Textiles Bridging work 2025",
  ];

  return (
    <div className="w-full">
      {/* ========== SECTION 1: HERO IMAGE ========== */}
      <div
        className="relative w-full h-[95vh] md:h-[95vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${pp25})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-yellow-300 px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Bridging Work Year 10 - 11
          </h1>
        </motion.div>
      </div>

      {/* ========== SECTION 2: CONTENT ========== */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 text-center"
        >
          Bridging Work Year 10-11 (2024/25)
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-900 max-w-3xl mx-auto mb-8 text-center leading-relaxed"
        >
          Below are the subject-specific bridging works designed to help students prepare
          for Year 11. These resources focus on essential knowledge and skills that ensure
          a smooth academic transition.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-5 border border-gray-100 hover:-translate-y-1 transition-all"
            >
              <h3 className="text-blue-700 font-semibold text-center text-base md:text-lg">
                {work}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center text-gray-900"
        >
          <p>
            Bridging the gap between Year 10 and 11 ensures our students enter their
            final GCSE year with confidence, readiness, and motivation to excel.
          </p>
        </motion.div>
      </section>

      {/* Bridging Work Year10-11 Statement Section */}
      <section className="bg-gray-50 py-5 md:py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          {/* Four Clickable Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                img: pp1,
                title: "Contactus",
                subtitle: "Get in Touch",
                link: "/contact/reporting-an-absence",
              },
              {
                img: pp2,
                title: "Admission",
                subtitle: "Apply",
                link: "/joinus/admissions",
              },
              {
                img: pp4,
                title: "Prospectus",
                subtitle: "Request",
                link: "/about/our-vision",
              },
              {
                img: pp5,
                title: "Newsletter",
                subtitle: "What's Goiong On",
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
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
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
    </div>
  );
}
