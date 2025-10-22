// src/pages/curriculum/BridgingWorkYear11_12.jsx
import React from "react";
import { motion } from "framer-motion";
import AA1 from "../../assets/AA1.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function BridgingWorkYear11_12() {
  const resources = [
    { subject: "Fine Art", year: "2024–25" },
    { subject: "Biology", year: "2025–26" },
    { subject: "Business Studies", year: "2024–25" },
    { subject: "Chemistry", year: "2024–25" },
    { subject: "Classical Civilisation", year: "2024–25" },
    { subject: "Computer Science", year: "2025–26" },
    { subject: "Economics", year: "2024–25" },
    { subject: "English", year: "2025–26" },
    { subject: "French", year: "2024–25" },
    { subject: "Geography", year: "2024–25" },
    { subject: "Graphic Communication", year: "2024–25" },
    { subject: "Health and Social Care BTEC", year: "2025–26" },
    { subject: "History", year: "2024–25" },
    { subject: "Mathematics", year: "2024–25" },
    { subject: "Further Mathematics", year: "2024–25" },
    { subject: "Philosophy", year: "2025–26" },
    { subject: "Physics", year: "2024–25" },
    { subject: "Politics", year: "2024–25" },
    { subject: "Psychology", year: "2025–26" },
    { subject: "Sociology", year: "2024–25" },
    { subject: "Spanish", year: "2025–26" },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* ====== HERO SECTION ====== */}
      <section
        className="relative h-[80vh] md:h-[110vh] flex items-center justify-center bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${AA1})` }}
      >
        <div className="absolute inset-0 bg-black/20" /> {/* Overlay */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 mb-4">
            Bridging Work: Year 11 → 12
          </h1>
        </motion.div>
      </section>

      {/* ====== CONTENT SECTION ====== */}
      <section className="max-w-7xl mx-auto py-8 px-6 bg-yellow-50">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center"
        >
          Bridging Work Year 11 into Year 12 for 2024/25
        </motion.h2>

        <p className="text-gray-800 text-center max-w-3xl mx-auto mb-12">
          Our bridging work supports students moving from GCSE to A-Level and
          vocational pathways. Each subject provides essential preparation
          materials, reading lists, and activities designed to strengthen
          understanding ahead of the next academic year.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {resources.map((res, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-100 text-center"
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                {res.subject}
              </h3>
              <p className="text-gray-900 text-sm">
                Bridging Work {res.year}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BridginingWorkYear 11-12 Statement Section */}
      <section className="bg-yellow-50 py-5 md:py-10">
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
    </div>
  );
}
