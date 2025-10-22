import React from "react";
import { motion } from "framer-motion";
import Img12 from "../../assets/AA7.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function AntiBullying() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 🌄 Section 1: Hero Image */}
      <section
        className="relative h-[70vh] md:h-[110vh] bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url(${Img12})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50"></div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-4xl md:text-6xl font-bold text-yellow-300 text-center px-4"
        >
          Anti Bullying
        </motion.h1>
      </section>

      {/* ✨ Section 2: Block-Style Content */}
      <section className="max-w-5xl mx-auto px-6 py-7 leading-relaxed text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 mb-4 text-center">
            A Safe and Stimulating Environment
          </h2>

          <p className="mb-4">
            At Bentley Wood High School we want to ensure that all students
            learn in a safe and stimulating environment. The Anti-bullying
            Ambassadors lead our anti-bullying agenda and offer peer-to-peer
            support to students dealing with bullying and friendship issues.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Definition of Bullying
          </h3>
          <p className="mb-4">
            There is no legal definition for bullying; however, it is usually
            defined as behaviour that is a wilful, repeated, conscious attempt
            or desire to hurt someone either physically or emotionally.
            Bullying may be overt by verbal or physical means, or covert by use
            of body language. It also includes cyberbullying – bullying via
            mobile phone or online (for example, email, social networks,
            instant messenger, WhatsApp, Instagram, and so forth). Any needless
            action, repeated over time, which is intended to cause anxiety or
            distress will be considered bullying.
          </p>

          <p className="mb-4">
            Bentley Wood High School works closely with the{" "}
            <a
              href="https://anti-bullyingalliance.org.uk"
              className="text-blue-600 hover:underline"
            >
              Anti-Bullying Alliance
            </a>
            . Click the link to learn more.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
            Anti-Bullying Charter — <span className="text-blue-700">Be The Change</span>
          </h3>
          <p className="mb-4">
            We work together as a school community to put a full stop to
            bullying and have created an environment where bullying is not
            tolerated in any form.
          </p>

          <p className="font-medium mb-3">As a member of Bentley Wood, our students promise:</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Not to hurt anyone verbally, mentally, or physically.</li>
            <li>
              Not to discriminate against people of a different race, religion,
              gender, sexual orientation, or age.
            </li>
            <li>
              Not to cyber-bully through text, internet, anonymous phone calls,
              or other means.
            </li>
            <li>
              Not to be a bystander and let bullying happen silence supports
              the bully.
            </li>
            <li>
              To report any cases of bullying to a student, teacher, parent, or
              friend.
            </li>
          </ul>

          <p className="mb-8">
            This is underpinned by the school’s community commitment to our{" "}
            <strong>CARE values</strong>: to communicate, achieve, respect
            others, have empathy, and stand up for equality.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-3">
            Anti Bullying Websites
          </h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              <a
                href="https://diana-award.org.uk"
                className="text-blue-600 hover:underline"
              >
                The Diana Award
              </a>
            </li>
            <li>
              <a
                href="https://www.antibullying.net"
                className="text-blue-600 hover:underline"
              >
                Anti-Bullying Network
              </a>
            </li>
            <li>
              <a
                href="https://www.bullying.co.uk"
                className="text-blue-600 hover:underline"
              >
                Bullying UK
              </a>
            </li>
            <li>
              <a
                href="https://www.stopbullying.gov"
                className="text-blue-600 hover:underline"
              >
                Stop Bullying
              </a>
            </li>
            <li>
              <a
                href="https://www.childnet.com/parents-and-carers/hot-topics/cyberbullying/"
                className="text-blue-600 hover:underline"
              >
                Cyber-Bullying Advice
              </a>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-3">
            Understanding Cyber-Bullying
          </h3>
          <p className="mb-6">
            Cyber-Bullying occurs when a person or group uses the internet,
            mobile phones, online games, or digital technology to threaten,
            tease, upset, or humiliate someone else. To learn more about
            Cyber-Bullying and how to deal with it,{" "}
            <a href="#" className="text-blue-600 hover:underline">
              click here
            </a>{" "}
            and for information about E-Safety,{" "}
            <a href="#" className="text-blue-600 hover:underline">
              click here
            </a>
            .
          </p>

          <p className="italic text-gray-600">
            Please view the <strong>Anti-Bullying Policy</strong> for further
            information on how Bentley Wood High School promotes kindness,
            respect, and zero tolerance for bullying.
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
