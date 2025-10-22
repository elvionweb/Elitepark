// src/pages/AboutUs.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pp20 from "../../assets/pp20.jpg";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function AboutUs() {
  return (
    <div className=" bg-gray-50">
      {/* === Section 1: Image Section === */}
      <section className="relative w-full h-[60vh] md:h-[95vh] overflow-hidden">
        <img
          src={pp20}
          alt="Headteacher"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-300 text-center px-4"
          >
            ElitePark High School
          </motion.h1>
        </div>
      </section>

      {/* === Section 2: Text Section === */}
      <section className="max-w-5xl mx-auto py-16 px-6 md:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center"
        >
          Message from the Headteacher
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
        >
          At <span className="font-bold text-blue-600">ElitePark High School</span> we are proud of our fine record of
          academic achievement within our safe, caring, stimulating environment
          where pupils learn happily and well. We encourage each student to develop a
          wide range of skills and interests, to achieve thier personal best and to
          work co-operatively with consideration for all members of our learning
          community at all times.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
        >
          <span className="font-bold text-blue-600">ElitePark High School</span> aims to establish a co-operative and stimulating
          environment in which pupils can learn happily and well. We value all
          members of the school community equally, seek to develop their skills and
          abilities, and encourage them to contribute to all areas of school life.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
        >
          We aim to provide a broad and balanced curriculum for each pupil which
          will help her achieve her best, develop her confidence and encourage her
          to be a thoughtful and active member of society. We consider that our aims
          for our pupils are best achieved through a close partnership between
          school and home, and we work together with parents to ensure their child success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 text-right"
        >
          <p className="text-gray-800 font-semibold text-lg">Ibhafidon Elvis</p>
          <p className="text-gray-600 italic">Headteacher</p>
        </motion.div>
      </section>

      {/* About-Us Statement Section */}
      <section className="bg-gray-200 py-5 md:py-10">
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
