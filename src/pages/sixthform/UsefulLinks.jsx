import React from "react";
import { motion } from "framer-motion";
import BCD1 from "../../assets/BCD2.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function UsefulLinksPage() {
  return (
    <div className="w-full">
      {/* ===== SECTION 1: HERO IMAGE ==== */}
      <section
        className="relative h-[95vh] md:h-[100vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            `url(${BCD1})` 
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-yellow-300 text-4xl sm:text-5xl lg:text-6xl font-bold text-center max-w-3xl px-4"
        >
          Useful Links
        </motion.h1>
      </section>

      {/* ================== SECTION 2: BLOCK CONTENT ================== */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8 text-gray-700 leading-relaxed"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Useful Links
          </h2>

          <p>
            The following links provide valuable resources and trusted platforms
            that will support you during and beyond your Sixth Form journey. 
            Whether you’re exploring university options, looking into financial aid, 
            or considering alternative career pathways, these links offer clear, 
            reliable, and up-to-date information to help guide your next steps.
          </p>

          <p>
            Each of these websites is designed to help you make informed decisions about your future — 
            from applying to universities and managing your finances to discovering apprenticeships 
            and planning your career. We encourage all students to take advantage of these resources 
            as part of their personal development and future planning.
          </p>

          <p>
            Remember, your growth doesn’t stop at the classroom. These platforms can empower you 
            to learn, explore, and achieve beyond your expectations. Use them to expand your horizons 
            and prepare confidently for the next chapter of your academic and professional journey.
          </p>

          {/* External Links List */}
          <div className="mt-6 space-y-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Explore Useful Links
            </h3>

            <ul className="space-y-4 text-gray-800">
              <li>
                <a
                  href="https://www.ucas.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  UCAS
                </a>{" "}
                – The Universities and Colleges Admissions Service - official site
                for applying to UK universities.
              </li>

              <li>
                <a
                  href="https://www.gov.uk/student-finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Student Finance
                </a>{" "}
                – Information on tuition fees, loans, and financial support for students
                in higher education.
              </li>

              <li>
                <a
                  href="https://nationalcareers.service.gov.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  National Careers Service
                </a>{" "}
                – Guidance and resources to help plan your career, training, and education pathways.
              </li>

              <li>
                <a
                  href="https://www.apprenticeships.gov.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Apprenticeships
                </a>{" "}
                – Explore apprenticeship opportunities across different sectors and industries.
              </li>
            </ul>
          </div>
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
