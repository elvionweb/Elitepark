// src/pages/TermDates.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";
import pp3 from "../../assets/pp5.jpg";

export default function TermDates() {
  return (
    <div className="bg-blue-500 min-h-screen">
      {/* ====== School Term Dates ====== */}
      <section
        className="relative w-full h-[60vh] md:h-[93vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('${pp3}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-300 mb-4">
            School Term Dates
          </h1>
          <p className="text-lg md:text-xl text-yellow-100 max-w-2xl mx-auto font-bold">
            Stay informed with our full academic calendar for the school year.
          </p>
        </motion.div>
      </section>

      {/* ====== Academic Year 2025/2026 ====== */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-50 mb-4">
            Academic Year 2025/2026
          </h2>
          <p className="text-yellow-50 max-w-3xl mx-auto">
            Below are the official term dates including staff training days,
            holidays, and half-term breaks for the 2025/2026 academic year.
          </p>
        </motion.div>

        {/* Term Content */}
        <div className="space-y-16">
          {/* Autumn Term */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-yellow-300 rounded-2xl shadow-md p-8"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              AUTUMN TERM 2025
            </h3>
            <ul className="text-gray-800 leading-relaxed space-y-2">
              <li>
                <strong>Monday 1st September – Friday 19th December</strong>
              </li>
              <li>Monday 1st September – Staff training day (no students)</li>
              <li>Tuesday 2nd September – Staff training day (no students)</li>
              <li>Wednesday 3rd September – Year 7 and Year 12 only</li>
              <li>Thursday 4th September – Whole school return</li>
              <li>Thursday 23rd October – Staff training day (no students)</li>
              <li>Friday 24th October – School closed (no students)</li>
              <li className="text-blue-600 font-bold">
                Half term: Monday 27th October – Friday 31st October
              </li>
              <li>Monday 3rd November – Staff training day (no students)</li>
              <li>Tuesday 4th November – Whole school return</li>
            </ul>
          </motion.div>

          {/* Spring Term */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-yellow-300 rounded-2xl shadow-md p-8"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              SPRING TERM 2026
            </h3>
            <ul className="text-gray-800 leading-relaxed space-y-2">
              <li>
                <strong>Monday 5th January – Friday 27th March</strong>
              </li>
              <li>Monday 5th January – Staff training day (no students)</li>
              <li className="text-blue-600 font-medium">
                Half term: Monday 16th February - Friday 20th February
              </li>
            </ul>
          </motion.div>

          {/* Summer Term */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-yellow-300 rounded-2xl shadow-md p-8"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              SUMMER TERM 2026
            </h3>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>Monday 13th April – Friday 17th July</strong>
              </li>
              <li className="text-blue-600 font-medium">
                Half term: Monday 25th May – Friday 29th May
              </li>
              <li>Friday 17th July – Staff training day (no students)</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* TermDates Statement Section */}
      <section className="bg-yellow-300 py-5 md:py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
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
                    style={{ backgroundImage: `url(${item.img})` }} // ✅ Fixed here
                  ></div>
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
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
