import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import pp37 from "../../assets/pp37.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function Policies() {
  // Scroll animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // List of policies (grouped logically)
  const policies = [
    "Accessibility Plan - Feb 2025",
    "Admissions Arrangements 2025/2026 - 6th Feb 2024",
    "Allegations of Abuse Against Staff Policy - Sep 2024",
    "Anti-Bullying Policy - Nov 2024",
    "Attendance and Punctuality - Nov 2024",
    "Behaviour and Exclusion Policy - Nov 2024",
    "ElitePark Values Statement - March 2024",
    "ElitePark Policy - May 2025",
    "BWT - Freedom of Information Policy - 18th Jul 2022",
    "BWT - Freedom of Information Publication - 18th Jul 2022",
    "Charging and Remissions Policy - Nov 2024",
    "Child Protection & Safeguarding Policy and Procedures - Jan 2025",
    "Early Career Teachers' Policy - Nov 2024",
    "Equality Information and Objectives - 27th Feb 2024",
    "First Aid Policy - Nov 2024",
    "Health and Safety Policy with Risk Assessment - June 2024",
    "Home School Agreement - Nov 2024",
    "Inclusion Policy - Nov 2024",
    "Inclusion Policy Appendix 2024",
    "IT Policy - Feb 2025",
    "Preventing Extremism and Radicalisation Policy - Feb 2025",
    "Relationships and Sex Education Policy - June 2025",
    "Students with Health Care Needs Who Cannot Attend School - May 2025",
    "Supporting Students with Medical Conditions - May 2025",
    "TBWT Complaints Procedure - Jan 2025",
    "TBWT Data Breach Policy - Jul 2025",
    "TBWT Data Protection Policy - Jul 2025",
    "Uniform Policy - May 2025",
    "Whistleblowing (HR Policies) - July 2024",
    "Young Carers Policy - April 2025",
  ];

  const qualityPolicies = [
    "Assessment Policy - June 2025",
    "Curriculum, Teaching & Learning Policy - June 2025",
    "EAL Policy including the New Arrivals Policy - May 2025",
    "Homework Policy - June 2025",
    "Most Able Student Policy - June 2025",
    "Feedback and Marking Policy - June 2025",
  ];

  const careersPolicies = [
    "Provider Access Policy 2025",
    "Careers, Education, Information, Advice and Guidance Policy 2025",
  ];

  return (
    <div className="flex flex-col w-full bg-yellow-400">
      {/* 🔹 SECTION 1: HERO IMAGE */}
      <section
        className="relative h-[95vh] md:h-[95vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${pp37})` }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-yellow-100">
            ElitePark Policies
          </h1>
        </motion.div>
      </section>

      {/* 🔹 SECTION 2: INTRODUCTION */}
      <section className="max-w-6xl mx-auto py-8 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
            School Policies Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our school is committed to transparency and excellence. Below are
            our key policy documents that guide our daily operations, ensure
            safety, and maintain high educational standards. These policies are
            reviewed regularly to reflect best practices and statutory
            requirements.
          </p>
        </motion.div>
      </section>

      {/* 🔹 SECTION 3: POLICY LIST */}
      <section className="bg-yellow-400 py-2 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-blue-700 mb-8 text-center"
          >
            Policy Documents
          </motion.h3>

          {/* 🔸 Main Policies */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {policies.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.03 }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md p-5 flex items-start gap-3"
              >
                
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 🔸 Quality of Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h4 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4">
              Quality of Education Suites of Policies
            </h4>
            <ul className="space-y-3">
              {qualityPolicies.map((policy, i) => (
                <li key={i} className="flex items-start gap-3">
                 
                  <span className="text-gray-700">{policy}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 🔸 Careers Guidance */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4">
              Careers Guidance
            </h4>
            <ul className="space-y-3">
              {careersPolicies.map((policy, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gray-800 mb-4">{policy}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Policies Statement Section */}
      <section className="bg-yellow-400 py-5 md:py-10">
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
