import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pp23 from "../../assets/pp23.jpg";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function YoungCarers() {
  return (
    <div className="w-full bg-blue-600">
      {/* ===== SECTION 1: HERO SECTION ===== */}
      <section
        className="relative h-[95vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${pp23})` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-yellow-400 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Support for Young Carers
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We understand that some students carry extra responsibilities at
            home. We are here to offer support, guidance, and care so every
            child can learn and grow with confidence.
          </p>
        </motion.div>
      </section>

      {/* ===== SECTION 2: MAIN INFORMATION ===== */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 text-center"
        >
          Understanding the Challenges of Young Carers
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-100 text-lg leading-relaxed space-y-5 max-w-4xl mx-auto"
        >
          <p>
            The person they care for may suffer from mental health problems,
            disability, chronic ill-health, or issues related to drug and
            alcohol misuse.
          </p>

          <p>
            Caring responsibilities can affect a young person in various ways:
          </p>

          <ul className="list-none list-inside space-y-2 text-gray-100">
            <li>
              <span className="font-semibold text-yellow-300">
                Emotionally –
              </span>{" "}
              Putting others first, feeling anxious or stressed, with emotions
              such as guilt, anger, or isolation.
            </li>
            <li>
              <span className="font-semibold text-yellow-400">
                Physically –
              </span>{" "}
              Suffering from pain or strain caused by lifting or assisting
              someone to wash or dress.
            </li>
            <li>
              <span className="font-semibold text-yellow-400">Socially –</span>{" "}
              Missing time with friends, feeling isolated or bullied, and
              lacking confidence.
            </li>
            <li>
              <span className="font-semibold text-yellow-400">
                Educationally –
              </span>{" "}
              Finding it difficult to concentrate in class, feeling tired, or
              struggling with homework.
            </li>
            <li>
              <span className="font-semibold text-yellow-400">
                Financially –
              </span>{" "}
              Facing low family income or difficulty meeting basic needs.
            </li>
          </ul>

          <p>
            Many young carers go unnoticed until a crisis occurs. Families may
            hide illness or fear separation, so it’s important we provide
            understanding, confidentiality, and early support.
          </p>
        </motion.div>
      </section>

      {/* Support for Young Carers Statement Section */}
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
