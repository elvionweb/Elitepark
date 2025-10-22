import React from "react";
import { motion } from "framer-motion";
import pp22 from "../../assets/pp22.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function ArtsHumanitiesStrategy() {
  return (
    <div className="flex flex-col w-full">

      {/* ===== SECTION 1: HERO IMAGE ===== */}
      <section
        className="relative h-[60vh] md:h-[100vh] bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${pp22})` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-yellow-300 text-3xl md:text-5xl font-extrabold text-center px-4"
        >
          Arts & Humanities Strategy
        </motion.h1>
      </section>

      {/* ===== SECTION 2: MAIN CONTENT ===== */}
      <section className="max-w-6xl mx-auto py-8 px-6 md:px-10 lg:px-16 text-gray-800 leading-relaxed">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4">
            Arts and Humanities Strategy
          </h2>

          <p className="mb-6">
            We believe that engagements with the arts and humanities is essential to support 
            their personal development and expand a student’s understanding of human culture 
            over time, as well as supporting a broad and balanced curriculum experience. 
            We are proud of our Arts and Humanities Strategy which further ensures all students 
            retain a broad and balanced curriculum and engage with a range of experiences 
            in the arts and humanities as they progress through the school.
          </p>

          <p className="mb-6">
            We believe that engagement with the arts and humanities supports students to achieve 
            their best across their other curriculum subjects. Students will also benefit beyond 
            school life as through arts and humanities-based education and exposure, they will gain 
            access to wider opportunities that will help them to become more cultured, empathetic, 
            and creative individuals. All students study all arts and humanities-based subjects 
            at Key Stage 3, and all students continue to study a humanity and creative subject at GCSE.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">
            Aim of the Strategy:
          </h3>

          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Promote a passion for the Arts and a deeper understanding of different human cultures amongst our students</li>
            <li>Ensure every student in Year 9 attends one enrichment trip connected to the arts and humanities</li>
            <li>Increase student ‘cultural capital’</li>
            <li>See an increase in student attendance in arts and humanities-based clubs</li>
            <li>Increase awareness of the arts and humanities in other subject areas</li>
            <li>Develop the ability of students to make links to the arts and humanities across their curriculum</li>
          </ul>

          <p className="mb-6">
            <strong className="text-blue-700">The Power of Music to Change Lives</strong> outlines a refreshed plan for 
            music education in England. Bentley Wood High School’s music development plan lays 
            out a vision for ensuring all students have access to quality music education and 
            the opportunity to progress their musical abilities and talents.
          </p>

          <p>
            ElitePark High School works in partnership with their local music hub to provide performance 
            experiences for their musicians and access to first-quality music CPD. This plan 
            emphasizes the importance of inclusivity, supporting students with special educational 
            needs and disabilities, and creating pathways to progression for all, including those 
            who may face barriers to participation.
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
