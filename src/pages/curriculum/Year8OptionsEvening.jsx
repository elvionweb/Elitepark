import React from "react";
import { motion } from "framer-motion";
import pp18 from "../../assets/pp18.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";


export default function Year8OptionsEvening() {
  return (
    <div className="flex flex-col w-full bg-blue-600">

      {/* ===== SECTION 1: HERO IMAGE ===== */}
      <section
        className="relative h-[70vh] md:h-[100vh] bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${pp18})` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Hero title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-yellow-300 text-3xl md:text-5xl font-extrabold text-center px-4"
        >
          Year 8 Options Evening
        </motion.h1>
      </section>

      {/* ===== SECTION 2: MAIN CONTENT ===== */}
      <section className="max-w-6xl mx-auto py-8 px-6 md:px-10 lg:px-8 text-gray-800 leading-relaxed">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-gray-200">
            Choosing GCSE subjects is an important milestone in every student’s journey. 
            The Year 8 Options Evening provides a valuable opportunity for students and 
            their families to explore available subject choices and understand how they 
            align with future goals and interests.
          </p>

          <p className="mb-6 text-gray-200">
            During the event, teachers and advisors will be on hand to discuss subject 
            content, progression routes, and potential career pathways. This evening aims 
            to empower students to make confident, informed choices for their GCSE studies.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
            Event Overview
          </h2>
          <p className="mb-6 text-gray-200">
            The Year 8 Options Evening helps students and families explore subject 
            choices for GCSE. Teachers and advisors are available throughout the 
            event to guide decision-making and answer questions.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
            Subject Presentations
          </h2>
          <p className="mb-6 text-gray-200">
            Each department presents engaging information about their subjects, 
            including key curriculum details, enrichment opportunities, and how 
            each course can support academic growth and future studies.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
            One-to-One Guidance
          </h2>
          <p className="mb-6 text-gray-200">
            Students and parents can meet with form tutors and subject teachers 
            for personalized conversations about subject combinations, interests, 
            and long-term goals. This one-to-one support ensures every student's 
            strengths and ambitions are carefully considered.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
            Next Steps
          </h2>
          <p className="text-gray-200">
            After the event, families can access digital subject guides, 
            option forms, and online resources. Our careers team remains available 
            for follow-up discussions, ensuring students feel supported every step 
            of the way toward selecting their GCSE options.
          </p>
        </motion.div>
      </section>

      {/* Careers Statement Section */}
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
