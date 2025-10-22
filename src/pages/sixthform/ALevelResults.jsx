import React from "react";
import { motion } from "framer-motion";
import BB6 from "../../assets/BB7.jpg"
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function ALevelResults2025() {
  return (
    <div className="w-full">
      {/* ================== SECTION 1: HERO IMAGE ================== */}
      <section
        className="relative h-[95vh] md:h-[96vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            `url(${BB6})`
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-yellow-300 text-4xl sm:text-5xl lg:text-6xl font-bold text-center max-w-3xl px-4"
        >
          A Level Results 2025
        </motion.h1>
      </section>

      {/* ================== SECTION 2: BLOCK TEXT ================== */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8 text-gray-700 leading-relaxed"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            A Level Results 2025
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900">
            Celebrating A Level Success at Bentley Wood
          </h3>

          <p>
            We are absolutely delighted to celebrate the incredible
            achievements of our students in their A Level results this year.
            Their success is a testament to the consistent effort, determination,
            and positive attitude they have shown throughout their studies.
          </p>

          <p>
            Our students have worked exceptionally hard, overcoming challenges
            and staying focused on their goals. At the heart of this success are
            our <strong>CARE values</strong> - Communication, Achievement,
            Respect, and Empathy. These core principles have guided our students
            not just in their academic work but in how they've supported each
            other, built strong relationships, and grown as individuals. Many
            students left school today excited by the courses, universities and
            careers that lie ahead of them — we wish them all the very best.
          </p>

          <p>
            Every result achieved represents the growth, resilience, and
            dedication of our students and the strong support and guidance of
            our school community with <strong>83% of all grades</strong>{" "}
            achieved grade C or above. Special congratulations to many students
            who achieved <strong>A*/A grades</strong> across three or more A
            Level subjects and to our BTEC students who achieved top grades of
            <strong> Distinction</strong> and <strong>Distinction*</strong>{" "}
            across their qualification.
          </p>

          <p className="text-blue-700 font-semibold text-lg md:text-xl">
            Congratulations to the Year 13 BWHS Class of 2025 - your future is
            full of promise!
          </p>
        </motion.div>
      </section>

      {/* A Level Results Statement Section */}
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
