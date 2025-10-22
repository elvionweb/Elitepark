import React from "react";
import { motion } from "framer-motion";
import pp33 from "../../assets/pp33.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function StayingSafe() {
  return (
    <div className="flex flex-col w-full">
      {/* ====== HERO SECTION ====== */}
      <section
        className="relative h-[95vh] md:h-[120vh] bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${pp33})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-yellow-300 text-3xl md:text-5xl font-extrabold text-center px-4"
        >
          Staying Safe
        </motion.h1>
      </section>

      {/* ====== CONTENT SECTION ====== */}
      <section className="max-w-6xl mx-auto py-8 px-6 md:px-10 lg:px-16 text-gray-800 leading-relaxed">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-5">
            Useful Contacts
          </h2>

          <p className="mb-2"><strong>Police :</strong> 112</p>
          <p className="mb-2"><strong>Ambulance / Medical Help :</strong> 112</p>
          <p className="mb-2"><strong>Fire Service :</strong> 112</p>
          <p className="mb-2"><strong>Road / Accident (FRSC) :</strong> 112</p>
          <p className="mb-6"><strong>Disaster / NEMA :</strong> 101</p>

          <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-3">
            Other Useful Contacts
          </h3>
          <p className="mb-4">
            <a href="https://harrowlscb.co.uk" className="text-blue-600 hover:underline">Harrow Children’s Services and Harrow Local Safeguarding Board</a><br />
            In an emergency you must always call <strong>999</strong>.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-3">
            Additional Support
          </h3>
          <ul className="space-y-2 mb-6 list-disc list-inside">
            <li>
              Online Safety: <a href="https://nspcc.org.uk" className="text-blue-600 hover:underline">nspcc.org.uk</a>
            </li>
            <li>
              Advice for parents and carers: <a href="https://saferinternet.org.uk" className="text-blue-600 hover:underline">saferinternet.org.uk</a>
            </li>
            <li>
              Signs of bullying and exploitation: <a href="https://harrowlscb.co.uk" className="text-blue-600 hover:underline">harrowlscb.co.uk</a>
            </li>
            <li>
              Mental Health: <a href="https://youngminds.org" className="text-blue-600 hover:underline">youngminds.org</a> and local Mental Health Support Services in Harrow
            </li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-3">
            Supportive Websites
          </h3>
          <ul className="space-y-2 mb-6 list-disc list-inside">
            <li>Childline: 0800 1111</li>
            <li>NSPCC</li>
            <li>Samaritans: Call 116 123 (24/7)</li>
            <li>CALM: Call 0800 58 58 58 (5pm–midnight daily)</li>
            <li>Papyrus: Call 0800 068 41 41 (9am–midnight), Text 07860 039967</li>
            <li>The Mix: Call 0808 808 4994 (3pm–12am)</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-3">
            Safety Advice for Students and Parents
          </h3>
          <p className="mb-4">
            Talk to a trusted adult if anyone says or does anything that worries or frightens you. 
            Always tell a trusted adult where you are going and when you’ll return. 
            Never lend your mobile phone unless it’s an emergency, and don’t let anyone trick 
            you into sending pictures or sharing passwords.
          </p>
          <ul className="space-y-2 mb-6 list-disc list-inside">
            <li>Keep personal information private and use strong passwords.</li>
            <li>Speak to an adult about who you connect with online.</li>
            <li>Never meet someone you’ve only met online.</li>
            <li>Get consent before taking or sharing any images or videos.</li>
            <li>Report abusive messages or photos immediately.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-3">
            Safety and Social Media
          </h3>
          <p className="mb-4">
            Social media lets you share messages and images globally but not everyone 
            online is who they say they are. Always use apps safely and check age requirements:
          </p>

          <ul className="space-y-2 list-disc list-inside">
            <li>Snapchat – 13 years old</li>
            <li>Instagram – 13 years old</li>
            <li>TikTok – 13 years old</li>
            <li>YouTube – 13 years old</li>
            <li>Facebook – 13 years old</li>
            <li>WhatsApp – 16 years old</li>
          </ul>
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
