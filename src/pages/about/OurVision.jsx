import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Added missing import
import img19 from "../../assets/img19.jpg";
import contactus from "../../assets/contactus.jpg";
import admissions from "../../assets/admissions.jpg";
import prospectus from "../../assets/prospectus.jpg";
import newsletter from "../../assets/newsletter.jpg";

const OurVision = () => {
  return (
    <div className="overflow-hidden">
      {/* === OUR VISION HERO === */}
      <section
        className="relative w-full h-auto min-h-[95vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${img19})`, // ✅ Fixed background image syntax
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/15 to-black/15"></div>

        <div className="relative z-10 max-w-5xl px-6 sm:px-10 md:px-16 py-16 text-center text-yellow-200">
          <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Our Vision
          </h2>
        </div>
      </section>

      {/* === LEARNING TODAY: LEADING TOMORROW === */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-cyan-600 via-cyan-700 to-blue-900 text-white flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-20 flex flex-col md:flex-row gap-10">
          {/* LEFT SIDE */}
          <div className="flex-1 flex flex-col justify-center space-y-5 md:space-y-7">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-300 leading-tight"
            >
              Learning Today, <br /> Leading Tomorrow
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed max-w-prose"
            >
              At <span className="font-semibold text-yellow-300">ElitePark School</span>, we aim to
              cultivate confident, creative, and compassionate learners who lead with excellence,
              wisdom, and integrity.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-prose"
            >
              We believe education goes beyond knowledge it shapes the character, values, and
              courage that empower young minds to transform their world.
            </motion.p>
          </div>

          {/* RIGHT SIDE - Vision List in Card Pattern */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              "An inspiring, inclusive learning community that nurtures excellence in every learner.",
              "A partnership-driven school that builds resilience for local and global challenges.",
              "A safe, joyful environment that embraces diversity and holistic growth.",
              "A leadership focused culture that empowers students and staff alike.",
              "A reflective community that values creativity, collaboration, and continuous growth.",
              "Pupils are supported to take responsibility from an early age, empowering them to take charge of their own.",
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white/10 hover:bg-white/20 transition-all rounded-2xl p-4 sm:p-5 text-left backdrop-blur-md"
              >
                <p className="text-sm sm:text-base md:text-base text-gray-100 leading-snug">
                  • {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OurVision Statement Section */}
      <section className="bg-gray-200 py-5 md:py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">

          {/* Four Clickable Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                img: contactus,
                title: "Contactus",
                subtitle: "Get in Touch",
                link: "/contact/reporting-an-absence",
              },
              {
                img: admissions,
                title: "Admission",
                subtitle: "Apply",
                link: "/joinus/admissions",
              },
              {
                img: prospectus,
                title: "Prospectus",
                subtitle: "Request",
                link: "/about/our-vision",
              },
              {
                img: newsletter,
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
};

export default OurVision;
