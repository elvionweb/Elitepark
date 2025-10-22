import React from "react";
import { motion } from "framer-motion";
import BB9 from "../../assets/BB9.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function OnlineSafety() {
  return (
    <div className="flex flex-col w-full">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative h-[60vh] md:h-[100vh] bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${BB9})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-yellow-300 text-3xl md:text-5xl font-extrabold text-center px-6"
        >
          Online Safety
        </motion.h1>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section className="max-w-6xl mx-auto py-8 px-6 md:px-10 lg:px-16 text-gray-800 leading-relaxed">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4">
            Online Safety at Elite
          </h2>

          <p className="mb-4">
            Bentley Wood High School ensures that online safety is given a high profile with all students and parents. 
            This is achieved through an annual online safety evening attended by parents and led by members of the safeguarding team, 
            local police, and senior leaders. Throughout the year, assemblies address online safety and potential internet dangers, 
            while the PSHE curriculum provides age-appropriate online safety guidance.
          </p>

          <p className="mb-4">
            We are proud of our collaborative work with pupils through a dedicated student-led team of digital leaders. 
            They support various aspects of our online safety strategy producing materials, assisting during parent evenings, 
            and offering peer support in line with our school values of <strong>CARE</strong>.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">
            Support Links & Tips
          </h3>

          <ul className="list-disc list-inside space-y-3 mb-6">
            <li>
              Set up a family agreement to supervise internet use. Helpful resources:
              <a
                href="https://www.getsafeonline.org.uk"
                className="text-blue-600 hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                getsafeonline.org.uk
              </a>{" "}
              and{" "}
              <a
                href="https://www.childnet.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                childnet.com
              </a>
            </li>
            <li>
              Apply parental controls:
              <a
                href="https://www.saferinternet.org.uk"
                className="text-blue-600 hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                saferinternet.org.uk
              </a>{" "}
              and{" "}
              <a
                href="https://www.internetmatters.org"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                internetmatters.org
              </a>
            </li>
            <li>
              Report concerns to the Police or Children’s Social Care. Call{" "}
              <strong>101</strong> or{" "}
              <strong>999</strong> in an emergency, or visit{" "}
              <a
                href="https://www.met.police.uk/ro/report/ocr/af/how-to-report-a-crime/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Met Police Report Page
              </a>
              .
            </li>
            <li>
              For queries, contact <strong>Hary Ilanko</strong> from the Safeguarding Team or email{" "}
              <a
                href="mailto:SchoolOffice@bentleywood.harrow.sch.uk"
                className="text-blue-600 hover:underline"
              >
                SchoolOffice@bentleywood.harrow.sch.uk
              </a>
              .
            </li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-3">
            How to Keep Safe Online – Cyber Flashing
          </h3>

          <p className="mb-4">
            <strong>What is Cyber Flashing?</strong> Cyber-flashing occurs when someone sends an explicit picture, 
            uninvited, to your phone via Wi-Fi or Bluetooth. It’s a form of sexual harassment that often happens 
            on public transport or in crowded areas, typically via AirDrop (for iPhone users) or Bluetooth.
          </p>

          <p className="mb-4">
            <strong>How to prevent Cyber Flashing:</strong> When out in public, turn off Bluetooth (for both Android & Apple users) 
            and set AirDrop (Apple users) to <em>Receiving Off</em>.
          </p>

          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Go to <strong>Settings → General → AirDrop</strong>, then tap <strong>Receiving Off</strong>.</li>
            <li>To disable Bluetooth: <strong>Settings → Bluetooth → Switch Off</strong>.</li>
            <li>
              Report cyber flashing to a trusted adult — such as your Form Tutor, Head of Year, or Safeguarding Team member.
            </li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-3">
            Helpful Websites for Staying Safe Online
          </h3>

          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>
              <a
                href="https://www.childrenscommissioner.gov.uk/digital/5-a-day/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Digital 5 A Day | Children’s Commissioner for England
              </a>
            </li>
            <li>
              <a
                href="https://parentinfo.org/article/digital-resilience-a-parents-guide"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Digital Resilience: A Parent’s Guide | ParentInfo
              </a>
            </li>
            <li>
              <a
                href="https://parentinfo.org/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Parent Info – Wellbeing & Internet Safety for Parents
              </a>
            </li>
          </ul>

          <p className="mt-4">
            <strong>Parent Info</strong> provides trusted advice and information to parents and carers about their children’s wellbeing and resilience. 
            In partnership with CEOP’s Thinkuknow programme, it covers online safety and helps families foster responsible, resilient, and web-literate children.
          </p>
        </motion.div>
      </section>

      {/* Careers Statement Section */}
      <section className="bg-gray-50 py-5 md:py-8">
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
