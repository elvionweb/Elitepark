import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pp44 from "../../assets/pp44.jpg";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function ExamsInformation() {
  const examResources = [
    {
      title: "Provides Tools for Learning Success",
      desc: "Access to modern resources, study aids, and classroom technology to boost learning outcomes.",
      link: "/about/prospectus",
    },
    {
      title: "Inspires Curiosity and Discipline",
      desc: "Programs that spark curiosity while building study habits and self-discipline for long-term success.",
      link: "/about/examination-results",
    },
    {
      title: "Creates a Safe Space to Grow",
      desc: "A secure, inclusive environment where students feel supported to learn and express themselves.",
      link: "/information/term-dates",
    },
    {
      title: "Builds Confidence Through Knowledge",
      desc: "Mentorship and achievement-driven teaching that turn understanding into self-confidence.",
      link: "/about/ofsted-report",
    },
    {
      title: "Nurtures Talents and Ambitions",
      desc: "Special programs and extracurriculars designed to discover and develop each student's unique gifts.",
      link: "/about/hca",
    },
    {
      title: "Guides Minds, Shapes Futures",
      desc: "Our leaders and teachers provide direction to help students discover their strengths and plan for a bright future.",
      link: "/about/the-elitepark-trust",
    },
  ];

  return (
    <div className="w-full bg-blue-600">
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative h-[95vh] md:h-[95vh] flex items-center justify-center text-center overflow-hidden bg-cover">
        {/* Responsive Background Image */}
        <img
          src={pp44}
          alt="Exams Information Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-blue-900/20"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 mb-4">
            Exams Information
          </h1>
          
        </motion.div>
      </section>

      {/* ===== SECTION 2: CONTENT ===== */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-8 text-center"
        >
          Important Exam Resources
        </motion.h2>

        {/* Modern Responsive Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {examResources.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-yellow-300 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col gap-3"
            >

              <div>
                <h3 className="text-lg font-semibold text-blue-600 group-hover:text-gray-700">
                  {item.title}
                </h3>
                <p className="text-gray-800 mt-1">{item.desc}</p>
              </div>
              <div className="mt-auto pt-3">
                <span className="text-blue-600 font-medium group-hover:underline">
                  Learn More →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
        >
        </motion.div>
      </section>

      {/* Exam Information Statement Section */}
      <section className="bg-yellow-400 py-5 md:py-10">
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
