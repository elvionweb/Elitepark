// src/pages/curriculum/Careers.jsx
import React from "react";
import { motion } from "framer-motion";
import AA4 from "../../assets/AA4.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";


export default function Careers() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* ===== SECTION 1: Hero Image ===== */}
      <section
        className="relative h-[80vh] md:h-[70vh] lg:h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${AA4})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-yellow-300 px-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Careers at ElitePark
          </h1>
        </motion.div>
      </section>

      {/* ===== SECTION 2: Introduction Block ===== */}
      <section className="max-w-6xl mx-auto py-6 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-800 leading-relaxed"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-6">
            Careers Education
          </h2>

          <p>
            <strong>Nita J Chotai</strong> (Community Governor - Link to
            Careers) <br />
            <strong>Mrs J Ortega</strong> (Careers Leader - Assistant
            Headteacher) <br />
            <strong>Mr L Tapper</strong> (Careers Guidance Adviser)
          </p>

          <p>
            ElitePark High School - Telephone:{" "}
            <a
              href="tel:+2347068826788"
              className="text-blue-600 underline font-semibold"
            >
              +2347068826788
            </a>{" "}
            <br />
            Email:{" "}
            <a
              href="mailto:SchoolOffice@bentleywood.harrow.sch.uk"
              className="text-blue-600 underline font-semibold"
            >
              elvionweb@gmail.com
            </a>
          </p>

          <p>
            At ElitePark High School, we provide a comprehensive programme of
            careers education in line with the Government's careers strategy,
            published on the 4 December 2017 and the Provider Access
            Legislation, January 2023, which sets out a long-term plan to build
            a world class careers system that will help young people and adults
            choose the career that is right for them. This statutory guidance
            has been updated to expand on the aim set out in the strategy to
            make sure that all young people in secondary school get a programme
            of careers education, information, advice and guidance that is
            stable, structured and delivered by individuals with the right
            skills and experience.
          </p>

          <p>
            To achieve this aim, the careers strategy and LAP guidance sets out
            that every school and academy providing secondary education should
            use the Gatsby Charitable Foundation's Benchmarks to develop and
            improve their careers provision. These benchmarks are: (1) To
            provide a stable careers programme; (2) Learning from career and
            labour market information; (3) Addressing the needs of each student;
            (4) Linking curriculum learning to careers; (5) Encounters with
            employers and employees; (6) Experiences of workplaces; (7)
            Encounters with further and higher education; and (8) Personal
            guidance.
          </p>
          <p>
            ElitePark High School fully supports the statutory requirement for
            students to have direct access to other providers of further
            education training, technical training and apprenticeships. The
            school will comply with the legal requirement to put on at least six
            encounters with providers of approved technical education
            qualifications or apprenticeships. This will be done in a number of
            events, as shown in the programme in appendix 1, including
            assemblies and Active Tutoring activities during National
            Apprenticeship Week and National Careers Week, in addition to
            providers attending careers events at school as a live or virtual
            encounter.
          </p>
          <p>
            The overarching aim for careers guidance at ElitePark focused on
            widening students' horizons, challenging stereotypes and raising
            aspiration. ElitePark will provide students with the knowledge and
            skills to make a successful transition to the next stage of their
            life and support social mobility by improving the opportunities for
            all our students (especially those from disadvantaged backgrounds
            and those with special educational needs and disabilities).
          </p>
          <p>
            High quality careers education and guidance in school is critical to
            young people's futures. It helps to prepare them for the workplace
            by providing a clear understanding of the world of work including
            the routes to jobs and careers that they might find engaging and
            rewarding.
          </p>
          <p>
            As the number of apprenticeships rises every year, it becomes
            increasingly important that all young people have a full
            understanding of all the options available to them post-16 and
            post-18 including wider technical education options such as T-Levels
            and Higher Technical Qualifications.
          </p>
          <p>To read the full Careers (CEIAG) Policy please see below.</p>
          <p className="font-bold">
            Welcome to the latest edition of Choices Magazine!
          </p>
        </motion.div>
      </section>

      {/* ===== SECTION 3: Careers Programme Table ===== */}
      <section className="bg-gray-50 py-6 px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto overflow-x-auto"
        >
          <h2 className="text-3xl font-bold text-purple-700 text-center mb-4">
            Careers Programme
          </h2>

          <table className="min-w-full border border-gray-200 bg-white rounded-lg shadow-md text-sm md:text-base">
            <thead className="bg-purple-700 text-white">
              <tr>
                <th className="p-3 text-left">Year Group</th>
                <th className="p-3 text-left">Autumn</th>
                <th className="p-3 text-left">Spring</th>
                <th className="p-3 text-left">Summer</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-200">
              {[
                {
                  year: "Year 7",
                  autumn: "Careers Fair, PSHE Support, External Talks",
                  spring: "National Apprenticeships Week, Careers Week",
                  summer: "Drop-in sessions with Career Adviser",
                },
                {
                  year: "Year 8",
                  autumn: "Careers Awareness Morning, Options Evening",
                  spring: "Apprenticeships & Careers Week Activities",
                  summer: "External Career Talks & Drop-ins",
                },
                {
                  year: "Year 9",
                  autumn: "Careers Fair, Library, PSHE Support",
                  spring: "National Careers Week & Talks",
                  summer: "Drop-in sessions and Work Prep",
                },
                {
                  year: "Year 10",
                  autumn: "Interview & CV Skills Morning, Work Experience",
                  spring: "Careers Week Activities & Employer Talks",
                  summer: "Post-16 Options Guidance",
                },
                {
                  year: "Year 11",
                  autumn: "6th Form Open Evening, Apprenticeship Talks",
                  spring: "Individual Guidance Meetings",
                  summer: "National Careers Week Events",
                },
                {
                  year: "Year 12",
                  autumn: "Work Experience, Apprenticeship & Uni Talks",
                  spring: "National Careers Week Activities",
                  summer: "PSHE Support & Further Guidance",
                },
                {
                  year: "Year 13",
                  autumn: "Apprenticeship / Uni Application Support",
                  spring: "Careers Fair & Employer Talks",
                  summer: "National Careers Week & Feedback",
                },
              ].map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-3 font-semibold">{item.year}</td>
                  <td className="p-3">{item.autumn}</td>
                  <td className="p-3">{item.spring}</td>
                  <td className="p-3">{item.summer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* ===== SECTION 4: Equality & Review Block ===== */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-800 leading-relaxed"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 text-center mb-8">
            Equality, Diversity And Review
          </h2>

          <p>
            ElitePark High School is committed to ensuring equal access for all
            students to a wide range of education and training providers. We
            encourage every student to make informed, independent decisions
            about their future without bias toward any particular route.
          </p>

          <p>
            Access to providers is open to all, allowing students to explore
            apprenticeships, further education, and university pathways equally.
            We continuously review and update all information on this page at
            the start of each academic year, or whenever necessary, to maintain
            accuracy and relevance.
          </p>

          <p>
            High quality careers education and guidance are essential to empower
            our students with the skills and knowledge needed for lifelong
            success and contribution to society.
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
