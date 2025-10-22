import React from "react";
import { motion } from "framer-motion";
import Img12 from "../../assets/Img12.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function StudentWellbeing() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 🌄 Section 1: Hero Image */}
      <section
        className="relativeh h-[75vh] md:h-[100vh] bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url(${Img12})`,
        }}
      >
        <div className="absolute inset-0  bg-opacity-50"></div>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-4xl md:text-6xl font-bold text-yellow-300 text-center px-4"
        >
          Student Wellbeing
        </motion.h1>
      </section>

      {/* ✨ Section 2: Content */}
      <section className="max-w-5xl mx-auto px-6 py-8 leading-relaxed text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 mb-6 text-center">
            Student Wellbeing at ElitePart High
          </h2>

          <p className="mb-4">
            At Bentley Wood High School, we are committed to developing and
            maintaining positive emotional and mental health and general
            wellbeing in our school community for both students and staff. We
            firmly believe that happy, secure students learn more effectively and
            are more confident and motivated with their studies.
          </p>

          <p className="mb-4">
            Our School’s Senior Mental Health Lead is{" "}
            <strong>Francis O’Sullivan (Assistant Headteacher)</strong>.
          </p>

          <p className="mb-6">
            See below a range of resources to support you and your daughter in
            terms of well-being:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Kooth: a handy guide for parents/carers</li>
            <li>Harrow Mental Health Partnership</li>
            <li>Anna Freud National Centre for Children and Families</li>
            <li>Support for Parents/Carers</li>
            <li>
              Directory of local voluntary Support Services for Children and
              Young People
            </li>
            <li>PODCAST | How To Get Better Sleep</li>
            <li>Promoting Resilience – 4Ps Framework</li>
            <li>Managing Worries Using Share It, Shelf It, Shout It, Shed It</li>
            <li>GUIDE: How To Talk To Children About Healthy Eating</li>
          </ul>

          <p className="italic text-gray-600">
            Together, we can promote a supportive, safe, and nurturing school
            environment that empowers every student to flourish — both
            emotionally and academically.
          </p>
        </motion.div>
      </section>

      {/* Careers Statement Section */}
      <section className="bg-gray-50 py-5 md:py-6">
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
