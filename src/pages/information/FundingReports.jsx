// src/pages/FundingReports.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import pp11 from "../../assets/pp15.jpg"
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";


export default function FundingReports() {
  const [openIndex, setOpenIndex] = useState(null);

  const reports = [
    {
      year: "2025",
      title: "Pupil Premium Funding Report",
      description:
        "Details of how we used the pupil premium grant to support disadvantaged students and close the attainment gap.",
      link: "#",
    },
    {
      year: "2025",
      title: "Sports Premium Report",
      description:
        "Overview of how we spent the PE and sport premium to enhance physical education and after-school activities.",
      link: "#",
    },
    {
      year: "2024",
      title: "Annual Financial Report",
      description:
        "Comprehensive financial breakdown of school funding, expenditure, and resource allocation.",
      link: "#",
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="bg-blue-600 min-h-screen">
      {/* ===== Hero Section ===== */}
      <section
        className="relative w-full h-[60vh] md:h-[92vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('${pp11}')`,
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
            Funding Reports
          </h1>
        </motion.div>
      </section>

      {/* ===== Reports Section ===== */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-3">
            Annual and Premium Reports
          </h2>
          <p className="text-yellow-100 max-w-2xl mx-auto">
            Browse our detailed reports outlining how school funds are distributed
            and utilized to improve educational outcomes and student wellbeing.
          </p>
        </motion.div>

        <div className="space-y-5">
          {reports.map((report, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-800 text-lg hover:bg-blue-50 transition"
              >
                <span>
                  <span className="text-blue-700 font-bold">{report.year}</span> – {report.title}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === i ? "rotate-180 text-blue-600" : "text-gray-500"
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 bg-gray-50 text-gray-700"
                  >
                    <p className="mb-4 leading-relaxed">{report.description}</p>
                    <a
                      href={report.link}
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                      View Full Report
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Funding Statement Section */}
      <section className="bg-blue-600 py-5 md:py-10">
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
