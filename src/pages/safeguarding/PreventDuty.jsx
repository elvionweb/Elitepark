import React from "react";
import { motion } from "framer-motion";
import BB1 from "../../assets/BB1.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";


export default function PreventDuty() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 🌄 Section 1: Hero Image */}
      <section
        className="relative h-[70vh] md:h-[96vh] bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url(${BB1})`,
        }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-4xl md:text-6xl font-bold text-yellow-300 text-center px-4"
        >
          The Prevent Duty
        </motion.h1>
      </section>

      {/* ✨ Section 2: Block-Style Content */}
      <section className="max-w-5xl mx-auto px-6 py-6 leading-relaxed text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 mb-4 text-center">
            The Prevent Duty
          </h2>

          <p className="mb-4">
            Bentley Wood is committed to delivering the government’s Prevent Duty.
            The Prevent duty requires a wide range of bodies, including all
            schools, early years and later years childcare providers, to have due
            regard to the need to prevent people from being drawn into terrorism
            and extremism. Students are educated about the dangers of
            radicalisation and the techniques used by those who seek to recruit
            young people into extremist groups.
          </p>

          <p className="mb-4">
            Students are encouraged to develop and express their opinions
            throughout their lessons and through a comprehensive PSHE curriculum.
            This creates a culture where extreme views are exposed and can be
            challenged in a safe and secure environment.
          </p>

          <p className="mb-4">
            Please view the Revised Prevent duty guidance: for England and Wales
            at{" "}
            <a
              href="https://www.gov.uk/government/publications/prevent-duty-guidance"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              GOV.UK
            </a>
            .
          </p>

          <p className="mb-4">
            Guidance for specified authorities in England and Wales on the duty
            in the Counter-Terrorism and Security Act 2015 to have due regard to
            the need to prevent people from being drawn into terrorism.
          </p>

          <p className="mb-4">
            The Department for Education published advice for schools on the
            Prevent duty (1 July 2015).
          </p>

          <p className="mb-4">
            The Prevent duty: safeguarding learners vulnerable to radicalisation
            (updated guidance from 31/12/23)
          </p>

          <p className="mb-6">
            Please view the{" "}
            <a
              href="/documents/preventing-extremism-policy.pdf"
              className="text-blue-600 hover:underline"
            >
              Preventing Extremism and Radicalisation Policy
            </a>
            .
          </p>

          <p className="italic text-gray-600">
            At Bentley Wood, we are committed to building a school environment
            that encourages critical thinking, open discussion, and resilience
            against all forms of extremism. Through education and awareness, we
            empower students to make informed, responsible, and positive
            contributions to society.
          </p>
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
