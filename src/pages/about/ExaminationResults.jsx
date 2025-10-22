import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, BarChart, GraduationCap, School } from "lucide-react";
import pp1 from "../../assets/pp1.jpg"
import pp2 from "../../assets/pp2.jpg"
import pp35 from "../../assets/pp35.jpg"
import pp4 from "../../assets/pp4.jpg"
import pp5 from "../../assets/pp5.jpg"

const ExaminationResults = () => {
  return (
    <div className=" bg-gray-300">
      {/* === Section 1: Image Section === */}
      <section className="relative w-full h-[60vh] md:h-[95vh] overflow-hidden">
        <img
          src={pp35}
          alt="Headteacher"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-400 text-center px-4"
          >
            Examination Results
          </motion.h1>
        </div>
      </section>

      {/* === Section 2: Results Overview & Achievements === */}
      <section className="max-w-6xl mx-auto py-10 px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
            Examination Results and School Performance
          </h2>
          <p className="text-gray-700 max-w-1xl mx-auto font-medium">
            Our students consistently achieve exceptional results.
          </p>
        </motion.div>

        {/* === Results Grid === */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Academic Excellence */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-green-400 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl"
          >
            <GraduationCap className="w-7 h-7 text-blue-700 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Academic Results
            </h3>
            <ul className="text-gray-800 space-y-2">
              <li>GCSE Pass Rate: <span className="font-bold text-blue-700">92%</span></li>
              <li> A Level Grades A*C: <span className="font-bold text-blue-700">87%</span></li>
              <li>University Placement: <span className="font-bold text-blue-700">95%</span></li>
            </ul>
          </motion.div>

          {/* Sports & Co-Curricular */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-600 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl"
          >
            <Award className="w-7 h-7 text-yellow-300 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Sports & Co-Curricular
            </h3>
            <p className="text-white">
              Students excel in athletics, debate, and the arts winning
              regional and national recognition in multiple disciplines.
            </p>
          </motion.div>

          {/* STEM & Innovation */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-yellow-300 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl"
          >
            <School className="w-7 h-7 text-purple-700 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              STEM Achievements
            </h3>
            <p className="text-gray-800">
              Our STEM teams earned distinction in science fairs and coding
              competitions, showcasing creativity and problem-solving.
            </p>
          </motion.div>

          {/* Continuous Progress */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-green-400 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl"
          >
            <BarChart className="w-7 h-7 text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Continuous Improvement
            </h3>
            <p className="text-gray-600">
              Each term, our results reflect ongoing growth supported by
              personalized learning and teacher mentorship.
            </p>
          </motion.div>

          {/* Leadership & Service */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-600 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl"
          >
            <Award className="w-7 h-7 text-yellow-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-100 mb-3">
              Leadership & Service
            </h3>
            <p className="text-gray-100">
              Students lead initiatives that impact the community, building
              empathy and responsibility beyond academics.
            </p>
          </motion.div>

          {/* Global Success */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-yellow-400 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl"
          >
            <GraduationCap className="w-7 h-7 text-purple-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Global Opportunities
            </h3>
            <p className="text-gray-600">
              Alumni from ElitePark gain admissions into top universities
              worldwide a testament to our academic foundation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Examinaton Statement Section */}
      <section className="bg-gray-300 py-5 md:py-10">
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

export default ExaminationResults;
