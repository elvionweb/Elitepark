import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";
import pp14 from "../../assets/pp14.jpg";
import pp24 from "../../assets/pp24.jpg";
import pp25 from "../../assets/pp25.jpg";
import pp26 from "../../assets/pp26.jpg";
import pp17 from "../../assets/pp17.jpg";
import pp28 from "../../assets/pp28.jpg";
import pp39 from "../../assets/pp12.jpg";
import pp30 from "../../assets/pp30.jpg";
import pp31 from "../../assets/pp31.jpg";

export default function ExamsInformation() {
  const highlights = [
    {
      title: "Parents Terms Date",
      desc: "Stay updated with all school term dates, holidays, and important events. Plan ahead to ensure your child never misses out on key academic activities..",
      image: pp24,
    },
    {
      title: "Attendance & Punctuality",
      desc: "Good attendance builds good learning habits. We encourage parents to help their children arrive on time every day.",
      image: pp25,
    },
    {
      title: "Parents 1 to 1 Device Programme",
      desc: "Each student has access to a personal device that supports digital learning, creativity, and innovation both in class and at home.",
      image: pp26,
    },
    {
      title: "Parents School Uniform",
      desc: "Our uniform reflects pride, unity, and respect. Parents are encouraged to help students maintain the correct dress code that represents ElitePark's values.",
      image: pp17,
    },
    {
      title: "ParentPay",
      desc: "ParentPay provides a secure and convenient way to manage payments for meals, trips, and school items online saving time and ensuring transparency.",
      image: pp28,
    },
    {
      title: "Parents School Meals",
      desc: "We offer healthy, balanced, and freshly prepared meals every day. Our meal program promotes well-being, focus, and energy for successful learning.",
      image: pp39,
    },
    {
      title: "Parents Communication & Updates",
      desc: "We value strong communication between school and home. Parents receive regular updates through newsletters, email, and our online platform.",
      image: pp30,
    },
    {
      title: "Statutory Information",
      desc: "Access essential school policies, performance reports, and compliance documents that demonstrate our dedication to excellence and accountability.",
      image: pp31,
    },
  ];

  return (
    <div className="w-full bg-blue-600">
      {/* === SECTION 1: HERO === */}
      <section className="relative h-[75vh] md:h-[110vh] flex items-center justify-center overflow-hidden bg-center">
        <img
          src={pp14}
          alt="Exams Background"
          className="absolute inset-0 w-full h-full object-cover bg-center object-center"
        />
        <div className="absolute inset-0 bg-blue-900/20"></div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-300 mb-4">
            Information for Parents
          </h1>
        </motion.div>
      </section>

      {/* === SECTION 2: MODERN CONTENT === */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Everything You Need to Know
          </h2>
          <p className="text-white max-w-2xl mx-auto font-semibold">
            Our goal is to make exam preparation and participation as smooth as
            possible. Explore key information and resources to help every
            student succeed.
          </p>
        </motion.div>

        {/* Modern Animated Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              className="bg-yellow-200 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl mb-5 group-hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2 group-hover:text-black">
                {item.title}
              </h3>
              <p className="text-gray-800 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Information For Parents Statement Section */}
      <section className="bg-blue-600 py-5 md:py-10">
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
}
