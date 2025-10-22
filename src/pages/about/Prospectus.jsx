// src/pages/Prospectus.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";
import NewspaperCarousel from "../../components/NewspaperCarousel";
import pp3 from "../../assets/pp3.jpg";

const Prospectus = () => {
  return (
    <div className="overflow-hidden">
      {/* Prospectus Section */}
      <section
        className="relative w-full h-auto min-h-[95vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${pp3})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/15 to-black/15"></div>

        <div className="relative z-10 max-w-5xl px-6 sm:px-10 md:px-16 py-16 text-center text-yellow-300">
          <motion.h2 initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Prospectus
          </motion.h2>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center px-6"
      >
        <h1 className="text-4xl md:text-3xl font-extrabold text-purple-700 mt-7">
          Learning today: leading tomorrow
        </h1>
      </motion.section>

      {/* === Outstanding Prospectus Report === */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-6xl mx-auto mt-2 px-6"
      >
        <div className="bg-white shadow-md rounded-3xl p-2 px-3">
          <h2 className="text-4xl font-bold text-purple-600 mb-4">
            Prospectus
          </h2>
          <p className="text-gray-600 mb-3">
            I am delighted to welcome you to our school through this prospectus.
            I hope that it will give you a snapshot of our superb learning
            community at{" "}
            <span className="font-bold text-blue-600">
              ElitePark High School
            </span>{" "}
            and will attract you to visit the school and meet our students and
            staff.
          </p>
          <p className="text-gray-600 mb-3">
            We believe education is not just about learning it's about becoming.
            We are more than a school; we are a vibrant community where
            curiosity is encouraged, talents are nurtured, and young minds are
            shaped into tomorrow's leaders.
          </p>
          <p className="text-gray-600 mb-3">
            Our dedicated teachers go beyond the classroom to cultivate
            confidence, creativity, and a lifelong love for learning. Every
            child is guided with care, supported with compassion, and challenged
            to dream boldly. From academics to moral development, from
            technology to teamwork every experience at{" "}
            <span className="font-bold text-blue-600">ElitePark </span> is
            designed to prepare our students not only for success in
            examinations, but also for life.
          </p>
          <p className="text-gray-600 mb-2">
            I warmly invite and urge you to browse and explore our website to
            gain an insight and see the heartbeat of our school, our students,
            their achievements, and the countless moments that make{" "}
            <span className="font-bold text-blue-600">ElitePark</span> the
            school where excellence isn't just taught, it's lived every single
            day.
          </p>

          {/* Corousel Section */}
          <NewspaperCarousel className="max-w-6xl mx-auto mt-6 px-16 text-center" />
        </div>
      </motion.section>

      {/* Prospect-Us Statement Section */}
      <section className="bg-gray-50 py-5 md:py-10">
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
};

export default Prospectus;
