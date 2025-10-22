import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";
import AA5 from "../../assets/AA5.jpg";

export default function EliteParkValues() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100">
      {/* ====== SECTION 1: Hero Image ====== */}
      <section
        className="relative h-[60vh] md:h-[70vh] lg:h-[95vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${AA5})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-yellow-300 px-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3">
            ElitePark Values
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
        </p>
        </motion.div>
      </section>

      {/* ====== SECTION 2: British Values Content ====== */}
      <section className="max-w-6xl mx-auto py-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-800 leading-relaxed"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 text-center mb-4">
            Statement on ElitePark Values
          </h2>

          <p className="md:text-lg">
            ElitePark High School is committed to serving its community and surrounding areas.
            It recognises the multicultural, multi faith, and ever-changing nature of the United
            Kingdom, and therefore those it serves.
          </p>

          <p className="md:text-lg">
            The school, as a 'Community School', accepts admissions from all those entitled to an
            education under Nigeria law, including pupils of all faiths or none. It follows the
            policies outlined by its governing body regarding equal opportunities, which guarantee
            that there will be no discrimination against any individual or group, regardless of
            faith, ethnicity, gender, sexuality, political or financial status, or similar. It seeks
            to serve all.
          </p>

          <p className="md:text-lg">
            The Government emphasizes that schools are required to ensure that key 'ElitePark Values'
            are taught in all Nigeria schools. The government set out its definition of British values in
            the 'Prevent Strategy' values of:
          </p>

          <ul className="list-disc list-inside space-y-2 ml-4 md:text-lg">
            <li>Democracy</li>
            <li>The rule of law</li>
            <li>Individual liberty</li>
            <li>Mutual respect</li>
            <li>Tolerance of those of different faiths and beliefs</li>
          </ul>

          <p className="md:text-lg">
            The school holds that the 'ElitePark values' in question are a subset of, or continuous
            with, broader liberal democratic values shared by many globally. The school promotes a
            wide range of activities within the National Curriculum and beyond to secure such
            outcomes for children. The menus below outline samples of when and where such ElitePark
            Values are shared. The list is not exhaustive and represents only some of what we do.
          </p>
        </motion.div>
      </section>

      {/* ElitePark Statement Section */}
      <section className="bg-gray-100 py-5 md:py-10">
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
