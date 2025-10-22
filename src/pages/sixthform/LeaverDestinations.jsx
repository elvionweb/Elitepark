import React from "react";
import { motion } from "framer-motion";
import { University, Briefcase, Plane } from "lucide-react";
import BB8 from "../../assets/BB8.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function LeaverDestinations() {
  const destinations = [
    "University of Ibadan",
    "University of Lagos",
    "University of Ilorin",
    "Federal University of Technology Akure",
    "Obafemi Awolowo University",
    "Covenant University",
    "Ahmadu Bello University",
    "Ladoke Akintola University of Technology",
    "University of Benin",
    "Lagos State University",
    "Federal University of Agriculture Abeokuta",
    "Federal University of Technology, Minna",
    "University of Port Harcourt",
    "Landmark University",
    "University of Nigeria",
    "Nnamdi Azikiwe University",
    "Afe Babalola University",
    "Federal University of Technology - Owerri",
    "Federal University Oye-Ekiti",
    "Ekiti State University",
    "University of Calabar",
    "University of Uyo",
    "Bayero University",
    "University of Nigeria Nsukka"
  ];

  return (
    <div className="w-full flex flex-col">
      {/* ---------- FIRST SECTION: IMAGE HERO ---------- */}
      <section
        className="relative w-full h-[80vh] md:h-[96vh] bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url(${BB8})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-center text-yellow-300 px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Leaver Destinations
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            At ElitePark, our students achieve excellence beyond Sixth Form
            progressing to top universities, building careers, and impacting the
            world through their chosen paths.
          </p>
        </motion.div>
      </section>

      {/* ---------- SECOND SECTION: TABLE OF UNIVERSITIES ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-4 text-center"
        >
          Universities Our Students Progressed To
        </motion.h2>

        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-6">
          Our graduates have continued their academic journey at some of the
          most prestigious universities across Nigeria and beyond.
        </p>

        {/* Table-styled content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full text-gray-800"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <tbody>
                {destinations.map((university, index) => (
                  <tr
                    key={index}
                    className={`transition duration-300 hover:bg-green-100 ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-4 text-sm md:text-base font-medium text-gray-700">
                      {index + 1}.
                    </td>
                    <td className="py-3 px-4 text-sm md:text-base text-gray-900">
                      {university}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Careers Statement Section */}
      <section className="bg-gray-50 py-5 md:py-10">
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
