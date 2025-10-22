import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Img7 from "../../assets/Img7.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function CoreTextBooks() {
  const resources = [
    { subject: "ART. Students explore drawing, painting, sculpture, and digital design while developing critical thinking and problem-solving skills through the study of artistic styles, techniques, and cultural influences." },
    { subject: "BIOLOGY. Learners investigate topics such as cells, genetics, ecosystems, and the human body, gaining a deeper understanding of how life functions at every level from microscopic organisms to entire ecosystems." },
    { subject: "BUSINESS STUDIES. It explores how businesses operate, make decisions, and adapt to changing markets while developing leadership, financial literacy, and entrepreneurial thinking." },
    { subject: "CHEMISTRY. Students learn how chemical processes shape the world around us, from medicine and energy to food and materials, while performing experiments that inspire scientific curiosity and precision." },
    { subject: "COMPUTER SCIENCE. The subject covers programming, algorithms, data, and artificial intelligence preparing learners to build digital solutions and understand the logic that powers modern computing." },
    { subject: "DRAMA. Students explore acting, directing, and stagecraft, learning how to express emotions, collaborate with others, and analyze scripts in both classic and modern theatre." },
    { subject: "ECONOMICS. It helps students understand real world issues such as inflation, unemployment, trade, and inequality, while building analytical and decision-making skills." },
    { subject: "ENGLISH. Students study a range of texts from classic novels to modern media enhancing their ability to write, analyze, and express ideas clearly and persuasively." },
    { subject: "GEOGRAPHY. Students explore natural environments, human societies, and global challenges such as climate change, sustainability, and urbanization learning to see the world from multiple perspectives." },
    { subject: "POLITICS. It examines political systems, ideologies, and global affairs, encouraging debate, critical analysis, and active citizenship." },
    { subject: "HEALTH AND SOCIAL CAR. Students learn about human development, healthcare systems, and the skills needed to support individuals across different life stages with compassion and professionalism." },
    { subject: "HISTORY. Through studying key events, movements, and figures, students develop critical thinking, evidence analysis, and an appreciation for how societies evolve over time." },
    { subject: "LATIN. Students study classical literature, Roman culture, and language structure, enhancing vocabulary, logic, and cultural understanding across many fields." },
    { subject: "MATHEMATICS. From algebra to statistics, students learn how numbers explain the world around us and form the foundation of science, technology, and everyday decision-making." },
    { subject: "FOREIGN LANGUAGES. Students develop listening, speaking, reading, and writing skills in languages such as French, Spanish, or German broadening their horizons and career opportunities." },
    { subject: "MUSIC. Students explore performance, composition, and musical theory, learning to appreciate diverse styles and the cultural power of music across the world." },
    { subject: "PHYSICS. It explores motion, energy, forces, and the structure of matter, equipping students with problem-solving and analytical skills to understand how the world works." },
    { subject: "PHILOSOPHY. Through exploring topics such as truth, morality, existence, and human knowledge, students learn how to question assumptions, analyze complex ideas, and form reasoned arguments." },
    { subject: "PSYCHOLOGY. Students learn about memory, emotion, personality, and social interaction, gaining insights into what drives people’s thoughts and actions." },
    { subject: "SOCIOLOGY. It investigates topics such as family, education, crime, and culture helping students understand social structures and the factors that shape human behavior." },
    { subject: "TECHNOLOGY. Students design, build, and innovate using digital tools and engineering principles, developing creativity, problem solving, and technical expertise for the future" },
    { subject: "RELIGIOUS STUDIES. Students explore ethical questions and philosophical ideas that shape human values and societies worldwide." },
  ];

  return (
    <div className="w-full">
      {/* ✅ SECTION 1 — HERO IMAGE */}
      <section
        className="relative w-full h-[80vh] sm:h-[60vh] md:h-[75vh] lg:h-[100vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url(${Img7})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-300 drop-shadow-lg">
            Resources
          </h1>
        </motion.div>
      </section>

      {/* ✅ SECTION 2 — RESOURCES CONTENT */}
      <section className="max-w-7xl mx-auto py-6 px-6 bg-blue-700">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-3 text-center"
        >
          Resources
        </motion.h2>

        <p className="text-gray-100 text-center max-w-3xl mx-auto mb-6 leading-relaxed">
          At ElitePark High School, we have a range of Core Text Books, Revision Guides and
          Resources available for students. Please use the dropdowns below to browse
          these per subject.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {resources.map((res, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-3 bg-white rounded-2xl shadow-md hover:shadow-lg p-5 border border-gray-100 transition"
            >
              <span className="font-medium text-gray-800">{res.subject}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core TextBook Statement Section */}
      <section className="bg-blue-700 py-5 md:py-10">
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
