// src/pages/HCA.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pp7 from "../../assets/pp7.jpg";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";


const HCA = () => {
  return (
    <div className=" bg-yellow-100">
      {/* === Section 1: Image Section === */}
      <section className="relative w-full h-[60vh] md:h-[95vh] overflow-hidden">
        <img
          src={pp7}
          alt="Headteacher"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-yellow-300 text-center px-4"
          >
            ElitePark
          </motion.h1>
        </div>
      </section>

      {/* === Section 2: Text Section === */}
      <section className="max-w-5xl mx-auto py-12 px-6 md:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl font-bold text-blue-700 mb-4 text-center"
        >
          Harrow Collegiate Alliance
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
        >
          <span className="font-bold text-blue-600">ElitePark High School</span> believes that strong and bespoke professional development is key to great teaching, personal satisfaction in your profession, and fantastic outcomes for our students.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
        >
          <span className="font-bold text-blue-600">ElitePark High School</span> We are part of the Harrow Collegiate Alliance, which provides high-quality training and development to new and experienced school staff, drawing on the expertise of colleagues in our family of schools.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
        >
          We have a large number of courses available to help you develop and grow in your profession, in whichever direction you aspire teaching and learning, leadership, mental health, AI tools & Edtech, mindfulness, subject knowledge, and many more.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
        >
          Explore a world of learning opportunities at <span className="font-bold text-blue-600">ElitePark</span> Our diverse range of courses includes teaching and learning, leadership development, mental health awareness and knowledge enhancement. Whatever your goals, ElitePark provides the tools and guidance to help you reach them.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-700 text-base md:text-lg leading-relaxed"
        >
          With <span className="font-bold text-blue-600">ElitePark </span> forward thinking courses in education, leadership, technology, and personal growth you're not just learning; you're preparing to shape the future.
        </motion.p>
      </section>

      {/* HCA Statement Section */}
      <section className="bg-yellow-100 py-5 md:py-10">
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
};

export default HCA;