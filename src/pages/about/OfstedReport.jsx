// src/pages/OfstedReport.jsx
import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import ofsted from "../../assets/ofsted.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

const OfstedReport = () => {
  return (
    <div className="overflow-hidden">
      {/* Ofsted Section */}
        <section
        className="relative w-full h-auto min-h-[95vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${ofsted})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/15 to-black/15"></div>

        <div className="relative z-10 max-w-5xl px-6 sm:px-10 md:px-16 py-16 text-center text-yellow-300">
          <motion.h2 initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Ofsted
          </motion.h2>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center px-6"
      >
        <h1 className="text-4xl md:text-3xl font-extrabold text-purple-700 mt-7">
          Outstanding Ofsted Report
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-3">
          Read the latest{" "}
          <span className="text-purple-600 font-semibold">Ofsted</span> inspection
          report for <span className="font-bold text-blue-600">ElitePark</span>, highlighting our commitment to excellence in
          education.
        </p>
      </motion.section>

      {/* === Outstanding Ofsted Report === */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-6xl mx-auto mt-2 px-6"
      >
        <div className="bg-white shadow-md rounded-2xl p-4">
          <FileText className="w-6 h-6 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            Latest Inspection Summary
          </h2>
          <p className="text-gray-600 mb-6">
           <span className="font-bold text-blue-600">ElitePark </span> was inspected by Ofsted on 14th and 15th November 2023. This was the school's first inspection since we were graded as Outstanding in May 2012. I am delighted to inform you that we have been graded as Outstanding once again.
          </p>
          <p className="text-gray-600 mb-6">
            From verbal feedback given to us and information collected by the inspection team we can celebrate our successes and focus on potential development areas. During these two days inspectors visited many lessons, collected views through surveys from staff, students and parents and talked with panels of teachers, support staff, Governors and Trustees and students.
          </p>
          <p className="text-gray-600 mb-6">
            The opening line of this written report truly encapsulates what is it like to attend <span className="font-bold text-blue-600">ElitePark High School</span>. The Inspectors wrote:
          </p>
          <p className="text-gray-600 mb-6">
           'Pupils develop into confident and caring young people at this school. The school sets high expectations for both behaviour and achievement. Pupils demonstrate exceptional behaviour and focus well in the classroom. They are respectful towards each other and their teachers, and understand the importance of positive attitudes. This is underpinned by the school's values of CARE: communication, achievement, respect and empathy, which are embraced by the school community'

          </p>
          <p className="text-gray-600 mb-6">
            Ofsted School Report November 2023
          </p>
          <p className="text-gray-600 mb-6">
            There has been a lot of hard work to maintain this 'outstanding' judgement, and we are so happy that the dedication of our staff, the support of our parents and the commitment and encouragement of our governors has been recognised. Here is the link to the report published on the Ofsted website.
          </p>
          <p className="text-gray-600 mb-6">
            <span className="font-bold text-blue-600">ElitePark</span> High School Ofsted Report November 2023
          </p>
          <p className="text-gray-600 mb-6">
            It is a report written from observations made and information gathered over two days. However, I believe it reflects a school community that operates at a very high standard day in and day out, fully dedicated to a high-quality education for all our students now and for the foreseeable future.
          </p>
          <p className="text-black mb-6 font-semibold">
            Ibhafidon Elvis <br /> <span className="font-normal text-black"> Headteacher</span>
          </p>

        </div>
      </motion.section>

      {/* Download Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-6xl mx-auto mt-20 px-6 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Download Full Report
        </h2>
        <p className="text-gray-600 mb-6">
          Access the full Ofsted inspection report for detailed feedback and
          insights.
        </p>
        <a
          href="/ofsted-report.pdf"
          download
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow mb-4"
        >
          <FileText className="w-5 h-5" /> Download PDF
        </a>
      </motion.section>

      {/* Ofsted Statement Section */}
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

export default OfstedReport;
