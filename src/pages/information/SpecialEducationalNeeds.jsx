// src/pages/SpecialEducationalNeeds.jsx
import React from "react";
import { motion } from "framer-motion";
import pp38 from "../../assets/pp38.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function SpecialEducationalNeeds() {
  return (
    <div className="w-full bg-yellow-500">
      {/* ===== SECTION 1: HERO IMAGE ===== */}
      <section
        className="relative h-[70vh] md:h-[120vh] bg-cover bg-center flex items-center justify-center text-yellow-300"
        style={{ backgroundImage: `url(${pp38})` }}
      >
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Special Educational Needs
          </h1>
        </motion.div>
      </section>

      {/* ===== SECTION 2: SEN SUPPORT & TEAMWORK ===== */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
        >
          Our Approach to SEN
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-blue-600 border border-gray-200 rounded-2xl shadow-md p-8 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-gray-100 mb-3">
              Our SEN Support
            </h3>
            <p className="text-gray-100 mb-4">
              Every student is unique our inclusive support ensures that each
              child receives personalized attention.
            </p>
            <ul className="list-disc list-inside text-gray-100 space-y-2">
              <li>Individual Education Plans (IEPs)</li>
              <li>1-to-1 and small group interventions</li>
              <li>Specialist teaching assistants</li>
              <li>Tailored accessibility resources</li>
            </ul>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-600 border border-gray-200 rounded-2xl shadow-md p-8 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-gray-100 mb-3">
              Working Together
            </h3>
            <p className="text-gray-100 mb-4">
              Collaboration is at the heart of what we do. We work closely with
              parents, carers, and external specialists to create the right
              learning environment for every student.
            </p>
            <p className="text-gray-100 mb-4">
              {" "}
              Please contact the Inclusion Team for families who have children
              with Special Educational Needs and Disabilities..
            </p>
            <div className="text-gray-100 font-medium">
              <p>📧 elvionweb@gmail.com</p>
              <p>📞 +2347068826788</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 3: VALUES & INCLUSION PHILOSOPHY ===== */}
      <section className="bg-gradient-to-b from-yellow-500 to-yellow-500 py-2 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-8"
        >
          Inclusion, Care and Growth
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Value 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-blue-600 border border-gray-200 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              Compassionate Support
            </h3>
            <p className="text-gray-100">
              At ElitePark, we see your strength, not your limits. We believe
              emotional well being is the foundation for academic success. Our
              staff provide nurturing, patient, and empathetic guidance.
            </p>
          </motion.div>

          {/* Value 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-600 border border-gray-200 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              Inclusive Community
            </h3>
            <p className="text-gray-100">
              Learning has no boundaries. At ElitePark, every student matters,
              every dream counts. Every student belongs. We celebrate diversity
              and promote a school culture where differences are embraced.
            </p>
          </motion.div>

          {/* Value 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-blue-600 border border-gray-200 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              Empowering Potential
            </h3>
            <p className="text-gray-100">
              We help students discover their strengths and talents, ensuring
              every learner feels confident and valued. Disability is not
              inability. Your mind, heart, and dreams can take you farther than
              you imagine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Special Educational Need Statement Section */}
      <section className="bg-yellow-500 py-5 md:py-10">
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
