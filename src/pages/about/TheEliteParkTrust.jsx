// src/pages/EliteParkTrust.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pp3 from "../../assets/pp31.jpg";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

const EliteParkTrust = () => {
  return (
    <div className=" bg-gray-50">
      {/* SECTION 1: Hero Image */}
      <section className="relative w-full h-[70vh] md:h-[95vh] overflow-hidden">
        <img
          src={pp3}
          alt="Headteacher"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-300 text-center px-4"
          >
            The ElitePark Trust
          </motion.h1>
        </div>
      </section>

      {/* SECTION 2: Board of Directors */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-7xl mx-auto mt-10 px-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Board of Directors
          </h2>
        </div>

        <div className="overflow-x-auto bg-white shadow-lg rounded-2xl">
          <table className="min-w-full border-collapse text-sm md:text-base">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left">Board of Directors</th>
                <th className="p-4 text-left">Appointed by the Board</th>
                <th className="p-4 text-left">Term of Office</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Mrs Diana Igbinedion (Chair)", "26/08/2021", "25/08/2029"],
                ["Mr Ian Noutch (Vice Chair)", "26/08/2021", "25/08/2029"],
                ["Mrs Joy Ayodele", "15/10/2024", "14/10/2028"],
                ["Mr Calvin Asemota", "07/07/2022", "06/07/2026"],
                [
                  "Mr Elvis Ibhafidon (Headteacher ElitePark High School)",
                  "01/09/2022",
                  "Ex Officio",
                ],
                ["Mr Marcello Borgese", "07/07/2022", "06/07/2026"],
                [
                  "Mrs Raakhi Patel (Chair of Audit Committee)",
                  "01/02/2022",
                  "31/01/2026",
                ],
                [
                  "Mrs Louise Imasuen (Headteacher Aylward Primary School)",
                  "22/04/2025",
                  "Ex Officio",
                ],
              ].map(([name, appointed, term], i) => (
                <tr
                  key={i}
                  className={`border-b hover:bg-blue-50 ${
                    i % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="p-4">{name}</td>
                  <td className="p-4">{appointed}</td>
                  <td className="p-4">{term}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* SECTION 3: Members of the Trust */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-7xl mx-auto mt-12 px-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Members of ElitePark Trust
          </h2>
        </div>

        <div className="overflow-x-auto bg-white shadow-lg rounded-2xl">
          <table className="min-w-full border-collapse text-sm md:text-base">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left">Members</th>
                <th className="p-4 text-left">Appointed by the Board</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Mr Andrew Nwachukwu", "01/08/2011"],
                ["Mr Festus Adebayo", "01/04/2014"],
                ["Mr Dinesh Solanki", "01/04/2014"],
                ["Mr Steven Adamu", "21/10/2021"],
                ["Mr Osaretin Omoregbe", "21/10/2021"],
                ["Mr Olufemi Bamisaiye", "24/04/2023"],
                ["Mr Moses Osagie", "12/03/2024"],
                ["Mr Felix Ezechukwu", "14/05/2024"],
              ].map(([name, appointed], i) => (
                <tr
                  key={i}
                  className={`border-b hover:bg-blue-50 ${
                    i % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="p-4">{name}</td>
                  <td className="p-4">{appointed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* SECTION 4: Governors & Observers */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="max-w-7xl mx-auto mt-16 px-6 pb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Governors and Observers
          </h2>
        </div>

        <p className="text-gray-600 mb-6 font-semibold">
          Our governors play a vital role in ensuring the highest standards of
          leadership, transparency, and excellence.
        </p>

        <div className="overflow-x-auto bg-white shadow-lg rounded-2xl">
          <table className="min-w-full border-collapse text-sm md:text-base">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left">Governor Name</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Appointed by</th>
                <th className="p-4 text-left">Committee</th>
                <th className="p-4 text-left">Term of Office</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50 border-b">
                <td className="p-4">Ibhafidon Elvis</td>
                <td className="p-4">Head Teacher</td>
                <td className="p-4">Local Committee</td>
                <td className="p-4">All</td>
                <td className="p-4">Ex Officio</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="p-4">Somtochukwu Onuorah</td>
                <td className="p-4">Parent</td>
                <td className="p-4">Election</td>
                <td className="p-4">Curriculum & Achievement</td>
                <td className="p-4">30/11/2021 – 29/11/2025</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="p-4">Modupe Adeyemi</td>
                <td className="p-4">Community</td>
                <td className="p-4">Local Committee</td>
                <td className="p-4">Finance & Site</td>
                <td className="p-4">05/07/2022 – 04/07/2026</td>
              </tr>
              {/* You can continue adding more governors below following this pattern */}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* The ElitePark Trust Statement Section */}
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
};

export default EliteParkTrust;
