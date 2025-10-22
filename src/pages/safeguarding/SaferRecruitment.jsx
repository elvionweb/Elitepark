import React from "react";
import { motion } from "framer-motion";
import BB2 from "../../assets/BB2.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";


export default function SaferRecruitment() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 🌄 Section 1: Hero Image */}
      <section
        className="relative h-[70vh] md:h-[120vh] bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url(${BB2})`,
        }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-4xl md:text-6xl font-bold text-yellow-300 text-center px-4"
        >
          Safer Recruitment
        </motion.h1>
      </section>

      {/* ✨ Section 2: Written Content */}
      <section className="max-w-5xl mx-auto px-6 py-6 leading-relaxed text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 mb-6 text-center">
            Safer Recruitment
          </h2>

          <p className="mb-4">
            The safe recruitment of staff in schools is the first step to
            safeguarding and promoting the welfare of children in education.
            Bentley Wood High School is committed to safeguarding and promoting
            the welfare of all pupils in its care. As an employer, the School
            expects all staff and volunteers to share this commitment.
          </p>

          <p className="mb-4">
            The recruitment and selection of staff will be conducted in a
            professional, timely and responsive manner and in compliance with
            current employment legislation, and relevant safeguarding legislation
            and statutory guidance (including <strong>KCSIE 2025</strong> and{" "}
            <strong>Prevent Duty Guidance</strong>).
          </p>

          <p className="italic text-gray-600">
            At Bentley Wood, safeguarding begins with recruitment. By maintaining
            high standards in hiring, training, and verification, we ensure that
            everyone working with our students upholds the values of safety,
            trust, and integrity.
          </p>

          <div className="mt-10 text-center">
            <a
              href="/sixthform/applications-and-enrolment"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
            >
              View Safer Recruitment Policy (PDF)
            </a>
          </div>
        </motion.div>
      </section>

      {/* SaferRecruitment Statement Section */}
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
