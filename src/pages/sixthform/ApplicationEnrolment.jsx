// src/pages/admissions/ApplicationsEnrolment.jsx
import React from "react";
import { motion } from "framer-motion";
import BB3 from "../../assets/BB3.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function ApplicationsEnrolment() {
  return (
    <div className="w-full">
      {/* 🌄 Hero Section */}
      <section
        className="relative w-full h-[90vh] md:h-[120vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${BB3})` }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-yellow-300 px-6"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Applications and Enrolment
          </h1>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-6 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-800 leading-relaxed text-lg md:text-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 text-center">
            Applications and Enrolment
          </h2>

          <p className="mb-8 text-center text-gray-700">
            <strong>Thursday 13th November 2025 | 6pm - 8pm</strong>
            <br />
            <span className="italic">Sixth Form Open Evening</span>
          </p>

          <p className="mb-6">
            We warmly invite you to visit ElitePark Sixth Form to find out
            more about our wide variety of excellent courses that we have to
            offer.
          </p>

          <h3 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">
            10 Reasons to Choose ElitePark Sixth Form
          </h3>

          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Academic excellence</li>
            <li>Multicultural environment</li>
            <li>Dynamic Sixth Form</li>
            <li>High expectations</li>
            <li>Outstanding pastoral team</li>
            <li>Spacious grounds</li>
            <li>High quality teaching</li>
            <li>Abundant resources</li>
            <li>Friendly student/teacher relationship</li>
            <li>All inclusive</li>
          </ul>

          <p className="mb-6">
            Life in Sixth Form is based around the sense of community which
            exemplifies our CARE values. The Sixth Form is a place of great
            achievements and full of amazing opportunities.
          </p>

          <p className="mb-6">
            From sports clubs to debating competitions, there is something for
            everyone. The school prides itself on how well students are prepared
            for <em>‘Life beyond Sixth Form’</em>. Students are guided and
            supported all throughout their journey.
          </p>

          <p className="italic font-medium text-gray-700 mb-6">
            — Sara and Nanette, Head Students 2025-26
          </p>

          <p>
            For students seeking entry into ElitePark Sixth Form for 2026,
            information about applications will be available after the Sixth
            Form Open Evening on the school website.
          </p>
        </motion.div>
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
