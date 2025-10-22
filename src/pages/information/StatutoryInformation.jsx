import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pp16 from "../../assets/pp16.jpg";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function StatutoryInformation() {
  return (
    <div className="w-full bg-yellow-50 text-gray-800">
      {/* ================= SECTION 1: HERO IMAGE ================= */}
      <section
        className="relative  h-[95vh] md:h-[100vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('${pp16}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-yellow-300 text-4xl md:text-5xl font-extrabold text-center"
        >
          Statutory Information
        </motion.h1>
      </section>

      {/* ================= SECTION 2: INTRO TEXT ================= */}
      <section className="max-w-6xl mx-auto py-2 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Transparency and Key Information
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Below are quick links to a range of key statutory documents relating
            to the school’s performance and other important aspects which
            parents and stakeholders may find useful.
          </p>
          <p className="text-lg leading-relaxed">
            On our{" "}
            <Link
              to="/school-improvement"
              className="text-blue-700 font-semibold hover:underline"
            >
              School Improvement
            </Link>{" "}
            page, we also share full details of our three-year strategic vision,
            current whole school priorities, Attainment 8 score, and
            self-evaluation.
          </p>
        </motion.div>
      </section>

      {/* ================= SECTION 3: MAIN CONTENT ================= */}
      <section className="bg-yellow-50 py-8 px-6">
        <motion.div
          className="max-w-6xl mx-auto space-y-5 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
            Key Statutory Information Overview
          </h2>

          <p>
            <strong>Contact Details:</strong> name of school, postal address,
            telephone number, Headteacher, Chair of Governors, and contact
            person — visit our{" "}
            <Link
              to="/"
              className="text-blue-700 font-semibold hover:underline"
            >
              Contact Us
            </Link>{" "}
            page.
          </p>

          <p>
            <strong>School Ethos and Values:</strong> Learn about our vision and
            core values on the{" "}
            <Link
              to="/about/our-vision"
              className="text-blue-700 font-semibold hover:underline"
            >
              Ethos
            </Link>{" "}
            page.
          </p>

          <p>
            <strong>Exam Results:</strong> View our Progress 8 and Attainment 8
            scores, GCSE performance, and post-16 destinations on the{" "}
            <Link
              to="/about/examination-results"
              className="text-blue-700 font-semibold hover:underline"
            >
              Exam Results
            </Link>{" "}
            page.
          </p>

          <p>
            <strong>Performance Tables:</strong> Check government-published
            school performance data at{" "}
            <Link
              to="/about/prospectus"
              className="text-blue-700 font-semibold hover:underline"
            >
              Performance Tables
            </Link>
            .
          </p>

          <p>
            <strong>Ofsted Report:</strong> Read our latest Ofsted inspection
            report at the{" "}
            <Link
              to="/about/ofsted-report"
              className="text-blue-700 font-semibold hover:underline"
            >
              Ofsted Report
            </Link>{" "}
            page.
          </p>

          <p>
            <strong>Admissions:</strong> For information about applying to the
            school or Sixth Form, visit{" "}
            <Link
              to="/joinus/admissions"
              className="text-blue-700 font-semibold hover:underline"
            >
              School Admissions
            </Link>{" "}
            and{" "}
            <Link
              to="/sixthform/sixth-form-entry-requirements"
              className="text-blue-700 font-semibold hover:underline"
            >
              Sixth Form
            </Link>
            .
          </p>

          <p>
            <strong>Curriculum:</strong> Explore the curriculum for all year
            groups and qualifications on the{" "}
            <Link
              to="/curriculum/careers"
              className="text-blue-700 font-semibold hover:underline"
            >
              Curriculum
            </Link>{" "}
            and{" "}
            <Link
              to="/curriculum/careers"
              className="text-blue-700 font-semibold hover:underline"
            >
              Sixth Form Courses
            </Link>{" "}
            pages.
          </p>

          <p>
            <strong>Pupil Premium:</strong> See how we use our grant to support
            student achievement at the{" "}
            <Link
              to="/safeguarding/staying-safe"
              className="text-blue-700 font-semibold hover:underline"
            >
              Pupil Premium and Covid Recovery
            </Link>{" "}
            page.
          </p>
        </motion.div>
      </section>

      {/* ================= SECTION 4: TABLE ================= */}
      <section className="max-w-6xl mx-auto py-4 px-4 overflow-x-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-blue-700 mb-6 text-center"
        >
          Detailed Statutory Documents and Links
        </motion.h2>

        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="min-w-full border border-gray-300 text-left bg-white rounded-xl shadow-md"
        >
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="py-3 px-4 font-semibold">Statutory Information</th>
              <th className="py-3 px-4 font-semibold">Links to Information</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-gray-800">
            <tr>
              <td className="py-4 px-4">
                SEND Information Report, SEN Policy, and SENCO details.
              </td>
              <td className="py-4 px-4 space-x-2">
                <Link
                  to="/information/information-for-parents"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  SEND Page
                </Link>
                |
                <Link
                  to="/information/policies"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Policies Page
                </Link>
              </td>
            </tr>

            <tr>
              <td className="py-4 px-4">
                School Behaviour Policy, Exclusions Arrangements, Code of
                Conduct, Whistleblowing, Charging, and Anti-Bullying Policies.
              </td>
              <td className="py-4 px-4">
                <Link
                  to="/information/policies"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Policies Page
                </Link>
              </td>
            </tr>

            <tr>
              <td className="py-4 px-4">
                Public Sector Equality Duty, Equality Objectives, and
                Accessibility Plans.
              </td>
              <td className="py-4 px-4">
                <Link
                  to="/information/equality-report"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Equality Objectives
                </Link>{" "}
                |{" "}
                <Link
                  to="/information/policies"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Policies Page
                </Link>
              </td>
            </tr>

            <tr>
              <td className="py-4 px-4">
                Governance Information, Trustees, Annual Accounts, Financial and
                Legal Reports.
              </td>
              <td className="py-4 px-4">
                <Link
                  to="/about/the-elitepark-trust"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  The EltiePark Trust
                </Link>
              </td>
            </tr>

            <tr>
              <td className="py-4 px-4">
                Sixth Form Bursary Policy, Careers Provision, and Uniform
                Details.
              </td>
              <td className="py-4 px-4 space-x-2">
                <Link
                  to="/sixthform/sixth-form-bursaries"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Sixth Form
                </Link>{" "}
                |{" "}
                <Link
                  to="/information/young-carers"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Careers Page
                </Link>{" "}
                |{" "}
                <Link
                  to="/curriculum/arts-and-humanities-strategy"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Uniform Page
                </Link>
              </td>
            </tr>

            <tr>
              <td className="py-4 px-4">
                Request a paper copy of any website information.
              </td>
              <td className="py-4 px-4">
                <Link
                  to="/"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Contact Us
                </Link>
              </td>
            </tr>
          </tbody>
        </motion.table>
      </section>

      {/* Statutory Information Statement Section */}
      <section className="bg-yellow-50 py-5 md:py-10">
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
