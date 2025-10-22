import React from "react";
import { motion } from "framer-motion";
import pp41 from "../../assets/pp41.jpg"
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function SubjectsPage() {
  const subjects = [
    "Art",
    "Business Studies",
    "Computer Science",
    "Design & Technology",
    "Drama",
    "Economics",
    "English",
    "Food Preparation & Nutrition",
    "Geography",
    "Government & Politics",
    "Health & Social Care",
    "History",
    "Languages",
    "Mathematics",
    "Music",
    "Philosophy & Religious Studies",
    "Physical Education",
    "PSHE",
    "Social Sciences",
    "Textiles",
    "Science",
    "Classics",
  ];

  return (
    <div className="w-full bg-yellow-50">
      {/* ========== Section 1: Hero Section ========== */}
      <div
        className="relative w-full h-[90vh] md:h-[92vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${pp41})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-yellow-300 px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Subjects We Offer</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-yellow-50">
            At ElitePark, we offer a wide range of subjects that inspire creativity, 
            innovation, and academic excellence across all key stages.
          </p>
        </motion.div>
      </div>

      {/* ========== Section 2: Overview ========== */}
      <section className="max-w-6xl mx-auto px-6 py-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-6"
        >
          Diverse Learning Opportunities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          We believe every student deserves the opportunity to explore their interests and talents.
          Our curriculum is designed to nurture critical thinking, creativity, and confidence 
          preparing students for future success in education and beyond.
        </motion.p>

        {/* Optional Decorative Icons Row */}
      </section>

      {/* ========== Section 3: Subjects Grid ========== */}
      <section className="bg-gradient-to-b from-yellow-50 to-yellow-50 py-2 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Explore Our Subjects
        </motion.h2>

        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {subjects.map((subj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-blue-100 rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-center"
            >
              <h3 className="text-lg font-semibold text-blue-700">{subj}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 text-gray-700"
        >
          <p>
            Empowering students to discover, learn, and thrive through a balanced and 
            broad curriculum that encourages both curiosity and excellence.
          </p>
        </motion.div>
      </section>

      {/* HCA Statement Section */}
      <section className="bg-yellow-50 py-5 md:py-10">
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
