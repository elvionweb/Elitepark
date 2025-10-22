import React from "react";
import { motion } from "framer-motion";
import BB5 from "../../assets/BB5.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function SixthFormEntryRequirements() {
  return (
    <div className="w-full">
      {/* ================== SECTION 1: HERO IMAGE ================== */}
      <section
        className="relative h-[95vh] md:h-[120vh] bg-cover bg-center flex items-center justify-center"
        style={{
           backgroundImage: `url(${BB5})`
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-yellow-300 text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-3xl px-4"
        >
          Sixth Form Entry Requirements
        </motion.h1>
      </section>

      {/* ================== SECTION 2: BLOCK TEXT ================== */}
      <section className="max-w-5xl mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-10 text-gray-700 leading-relaxed"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Applications and Enrolment
          </h2>
          <p>
            At <strong>ElitePark</strong>, we are committed to ensuring
            that every student begins their Sixth Form journey on the right path
            to success. Admission into our Sixth Form is based on both academic
            achievement and a strong commitment to personal growth, learning,
            and excellence.
          </p>

          <p>
            To study four AS courses, the general minimum entry requirements are
            six GCSEs at Grade 5 or above, including at least Grade 5 in English
            Language and Mathematics. These requirements are set to ensure that
            all students are well prepared for the academic demands of A-Level
            study.
          </p>

          <p>
            For those interested in pursuing BTEC Level 3 courses, students must
            achieve five GCSEs at Grade 5 or above, including Grade 5 in English
            Language and Mathematics. This ensures that students have the core
            skills needed to excel in both coursework and applied learning.
          </p>

          <p>
            Please note: In the table below, the term ‘subject’ refers to a GCSE
            grade achieved in that specific subject area. For example, to study
            Geography at A-Level, you must have achieved at least a Grade 5 in
            GCSE Geography. When two grades are shown (for example, in English),
            this refers to both English Language and English Literature. Where
            only one grade is shown, this refers specifically to English
            Language.
          </p>

          <p>
            Our entry criteria are designed to help students choose courses that
            best match their strengths, interests, and future aspirations. We
            encourage all applicants to review the subject-specific requirements
            carefully and to seek guidance from our Sixth Form admissions team
            when making their course selections.
          </p>

          <p>
            At <strong>ElitePark</strong>, we believe that every
            student deserves the opportunity to achieve their full potential —
            and our tailored entry requirements are the first step in building
            that success.
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Sixth Form Bursaries
          </h2>
          <p>
            We offer a range of bursaries to support students with financial
            needs or exceptional talent in academics, sports, or the arts.
            Bursaries are intended to ensure that no student is held back from
            achieving excellence due to financial constraints. Details of
            available bursaries and the application process can be obtained from
            the Sixth Form office.
          </p>
        </motion.div>
      </section>

      {/* ================== SECTION 3: TABLE ================== */}
      <section className="max-w-6xl mx-auto px-4 pb-10 overflow-x-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Subject Entry Requirements
        </h2>

        <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2">Subjects</th>
              <th className="border border-gray-300 px-3 py-2">English</th>
              <th className="border border-gray-300 px-3 py-2">Maths</th>
              <th className="border border-gray-300 px-3 py-2">Subject</th>
              <th className="border border-gray-300 px-3 py-2">Science</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 bg-white">
            {[
              ["Art & Design: Fine Art", "5", "5", "5 (1)", ""],
              ["Biology", "5", "6", "", "6 6"],
              ["Business Studies", "5", "5", "", ""],
              ["Chemistry", "5", "6", "", "6 6"],
              ["Computer Science", "5", "6", "", ""],
              ["Economics", "5", "6", "", ""],
              ["English Literature", "6 6", "5", "", ""],
              ["Geography", "5", "5", "5 (3)", ""],
              ["Government & Politics", "5", "5", "5 (2)", ""],
              ["Health & Social Care - BTEC", "5", "5", "", ""],
              ["History", "5", "5", "5 (3)", ""],
              ["Mathematics", "5", "6", "", ""],
              ["Further Mathematics", "5", "8", "", ""],
              ["Philosophy", "5", "5", "5 (3)", ""],
              ["Physics", "5", "6", "", "6 6"],
              ["Psychology", "5", "5", "", "5 5"],
              ["Sociology", "5", "5", "5 (2)", ""],
              ["Spanish", "5", "5", "6", ""],
              ["French", "3", "7", "5", ""],
              ["Chinese", "4", "2", "9", ""],
            ].map((row, i) => (
              <tr key={i} className="odd:bg-gray-50">
                {row.map((cell, j) => (
                  <td key={j} className="border border-gray-300 px-3 py-2 text-center">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-8 text-gray-700 leading-relaxed text-sm md:text-base space-y-3">
          <p>
            <strong>KEY:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>5 (1)  Or Portfolio of Observational Drawings.</li>
            <li>
              5 (2)  Grade 5 or above at GCSE in a humanities subject (History,
              Geography or Philosophy/Religious Studies).
            </li>
            <li>5 (3)  Grade 6 in the subject is desirable.</li>
            <li>5 (4)  Have attended a Sports Club during KS4.</li>
          </ul>

          <p className="mt-6">
            <strong>Selection of Subjects:</strong> Above is a general guide to
            Advanced level subjects needed for certain degree courses at
            universities and colleges of higher education. The list Above is a
            guide and is not comprehensive; nor should the information be
            interpreted too literally – these are merely guidelines.
          </p>
        </div>
      </section>

      {/* ApplicationEnrolment Statement Section */}
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
