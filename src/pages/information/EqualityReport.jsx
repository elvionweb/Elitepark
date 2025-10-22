import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PP27 from "../../assets/pp27.jpg";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

const EqualityReport = () => {
  return (
    <div className="w-full flex flex-col bg-yellow-200">
      {/* ===== Section 1: Hero Image ===== */}
      <section
        className="relative h-[95vh] md:h-[95vh] bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${PP27})`,
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-300">
            Equality Report
          </h1>
        </motion.div>
      </section>

      {/* ===== Section 2: Introduction ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-6 ">
            ElitePark High School <br /> <br /> <span className="font-light text-black text-5xl">Equality Report</span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            <strong className="text-2xl">Equality Report for Year 2024-25 (January 2025)</strong>
            <br />
            Report by: <em>Francis O'Sullivan, AHT</em>
            <br />
            Figures taken from the Inspection Data Summary Report (IDSR) Dec
            2024 unless otherwise noted.
          </p>

          <p className="text-gray-700 leading-relaxed mt-6 text-justify">
            <span className="text-blue-600 font-semibold">ElitePark High</span> School is an above-average-size comprehensive
            school for girls in Harrow with currently 1,375 students between the
            ages of 11 and 19. The school has a very diverse intake from a large
            catchment area. While the location deprivation indicator is “well
            below average,” pupil-base deprivation is “below average.”
          </p>
        </motion.div>
      </section>

      {/* ===== Section 3: Student Equality Data ===== */}
      <section className="bg-yellow-200 py-8 px-8 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
            Equality Information 2024-25: Students
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
            <p>
              <strong>Free School Meals:</strong> Currently 26% of students are known to be eligible for free school meals, which is close to average nationally. The progress and achievement of students on free school meals is typically significantly above the national average. The school has a fund to provide financial support for families for items such as uniform, trips and music lessons.
            </p>
            <p>
              <strong>Pupil Premium:</strong> As of January 2025, 24% of students (346) were known to be eligible for Pupil Premium. The progress and attainment and progress of students on pupil premium is historically significantly above the national average. For example, the attainment 8 and progress 8 of our PP students in 23/24 were 53.4 and 0.82, compared to national averages of 46.2 and 0.03.
            </p>
            <p>
              <strong>EAL:</strong> At 64% we have “well above average” number of EAL students, with 73% in the 6th Form.
            </p>
            <p>
              <strong>Ethnicity:</strong> Bentley Wood welcomes and celebrates having students from all cultures and ethnicities and has a large number of students from minority ethnic groups. Some of our students have refugee status and come from countries such as Kuwait and Afghanistan. In 2025, 64% of our students do not have English as their first language, which is well above the national average. Our students speak a variety of other languages at home. We have 17 out of 18 possible ethnic groups. The current breakdown is as follows (IDSR):
            </p>
            <p>
              <strong>SEND / Disability:</strong> In 2025 there are 6% of students with SEND support and 1.9% with an EHC plan, categorised as 'well below average' and 'below average'. Disabilities range from Physical Disabilities to Speech, Language and Communication Needs. All staff are responsible for meeting the needs of these students. The SENDCo and Inclusion team provide a comprehensive 'Inclusion Booklet' which is shared with every member of staff, and linked in the bulletin each week as well. Heads of Year keep detailed records of these students and closely monitor progress of students with disabilities together with Heads of Department, Senior Leaders, and Teachers..
            </p>
            <p>
              <strong>Religion:</strong> All Year groups show a similar religious profile with all major religions represented. There is a universal Prayer Room made available for students to use during break and lunchtimes, and the school canteen caters for many dietary requirements. Students all study Philosophy & Religious Studies until Year 11 and this covers all major world religions and promotes cohesion between students of different faiths and none. We encourage children to understand that religions are diverse, both within and between them, and we train the students to become better at, and more sophisticated in, their moral reasoning. Assemblies at different times of the year note many religious festivals.
            </p>
            <p>
              <strong>Attendance:</strong> Students' attendance is above the national average and is monitored on a weekly basis and analysed in order to target individuals who need support in improving their attendance. Absence for 2021/2022 was 6.7%. Persistent absence was 19.3%, both figures in the lowest 20% of all schools. In 2022/2023, absence was 7.4%, and PAs 17.9%. In 2024, absence had decreased to 5.6%, in the lowest 20% of all schools..
            </p>
            <p>
              <strong>Exclusions:</strong> There was no permanent exclusion at Bentley Wood in 2023-2024, 2022-23, 2021-22 (nat. average = 2), 2020-21, 1 in 2019/2020, and none in the previous three years. The number of girls who are sanctioned with fixed term exclusions / suspension has been kept low as a result of positive behaviour management strategies, strong support from the leadership team, an emphasis on good relationships, and through use of restorative justice approaches, where appropriate. The percentage of exclusions for different groups of students are in line with national comparisons. <br /> <br /> The school records and acts upon all incidents of discrimination. Where discrimination occurs, we intervene through education, sanctions, parent meetings, and so on as appropriate (see our Equality Information and Objectives statement, and our Anti-Bullying Policy).
            </p>
           
            <p>
              <strong>Attainment:</strong> At Bentley Wood the vast majority of ethnicities perform better than national averages. There were no significantly underachieving ethnic groups in 2023. Students of all ethnicities exceed expectations at KS4. <br /><br />We have high academic expectations of all students, and deliver a curriculum that is broad, balanced and rich, including very high levels of Ebacc entry. According to the IDSR: “The subjects of the EBacc form a strong academic foundation for the key stage 4 curriculum.” The EBacc entry rate at Bentley Wood in 2023 was 96%. This was in the top 2% of schools nationally. The value added in science (0.9), English (1.1) and humanities (1.1) was significantly above the national average and all at the 95th and above percentile in 2023.
            </p>
            <p>
              <strong className="text-2xl md:text-4xl font-semibold text-blue-600 mb-6">Equality objectives 2024-25-Students </strong>
            </p>
             <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>
              Maintain high standards and expectations of language and inclusive behaviour of all adults in the school, including visitors, in line with our promotion of 'ElitePark Values' and our ElitePark "Care".
            </li>
            <li>
              Continue to ensure all members of staff are familiar with the key implications of the 2010 Equality Act for the school context, such as familiarity with the 'protected characteristics' and how to respond confidently to reports of any discriminatory behaviour or bullying using the school reporting We will do this through staff CPD, Teach Talks, Wise Thoughts SMSC curriculum, and Assemblies and Bulletins.
            </li>
            <li>
              Provide support and training so that all staff feel comfortable in teaching about, and tackling all forms of discrimination, including those to do with race, religion and sexuality, whether in the reformed PSHE and RSE curricula, as well as in their subject areas.
            </li>
          </ul>
          </div>
        </motion.div>
      </section>

      {/* ===== Section 4: Staff Equality Data ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-blue-600 mb-6">
            Equality Information 2024-25: Staff
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
            <p>
              <strong className="text-2xl">Ethnicity</strong><br />The distribution of ethnicities at ElitePark is broadly the same for all groups of staff irrespective of pay. There is a diverse range of ethnicities which is consistent for support staff, teaching staff and teaching assistants.
            </p>
            <p>
              <strong className="text-2xl">Disability:</strong> <br />Four members of staff are registered
              as disabled.
            </p>
            <p>
              <strong className="text-2xl">Sex:</strong> <br />At ElitePark there is a male to female ratio of 1 to 5.4 (25 males and 135 females). Staff are paid in relation to job specification, number of days' employment and level of responsibility regardless of sex and ethnicity. Average pay for male employees is higher than average pay for female employees. This is attributed to having a higher support staff male to female ratio (1 to 10.8), compared to the teaching staff male to female ratio (1 to 4).
            </p>
            <p>
              <strong className="text-2xl">Sexual Orientation</strong> <br /> At ElitePark there is a male to female ratio of 1 to 5.4 (25 males and 135 females). Staff are paid in relation to job specification, number of days' employment and level of responsibility regardless of sex and ethnicity. Average pay for male employees is higher than average pay for female employees. This is attributed to having a higher support staff male to female ratio (1 to 10.8), compared to the teaching staff male to female ratio (1 to 4).
            </p>
            <p>
              <strong className="text-2xl">Gender Reassignment</strong> <br /> Our application forms ask for optional information about pronouns which can be connected to 'gender identity'. If successful applicants have completed this, it is recorded on their employee profile on our  personnel/payroll providers portal.
            </p>
            <p>
              <strong className="text-2xl">Religion</strong> <br /> Staff represent a broad range of
              religious beliefs, with flexibility for observance days. <br />
              Data is collected about the marital status of members of staff, including the titles and names given on application forms.
            </p>
            <p>
              <strong className="text-2xl">Pregnancy and paternity</strong><br /> The school operates the council's policies for maternity leave, paternity leave and flexible working (reduced hours). All pregnant staff have a meeting to assess their individual needs and steps are taken to ensure these are met. <br />
              In 2023-24, seven people started maternity leave. No one has yet started maternity leave during this academic year 2024-25 (there were six people on maternity leave that continued into some part of 2024-25 that had started maternity leave during 2023-24). <br />
              In 2023-24, one person took paternity leave. One person has taken paternity leave so far this year.
            </p>
            <p>
              <strong className="text-2xl">Training Opportunities</strong> <br /> ElitePark is a school that is passionate about staff professional development. We believe teachers, as professionals, should continue to learn and improve their practice using evidence and research to support their development. Professional development is offered to all teaching staff equally. Support staff also take part in professional development training, which is occasionally altered and bespoke to their roles and differing needs as necessary. We use state of the art platforms, namely BlueSky and the National College, to support, deliver, and monitor staff professional development.
            </p>
        
          </div>

          <h3 className="text-xl font-semibold pl-6 text-blue-600 mt-4 mb-4">
            Equality Objectives 2024-25 - Workforce
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>
              Maintain high standards and expectations of language and inclusive behaviour of all adults in the school, including visitors, in line with our promotion of 'ElitePark Values' and our ElitePark "Care".
            </li>
            <li>
              Continue to ensure all members of staff are familiar with the key implications of the 2010 Equality Act for the school context, such as familiarity with the 'protected characteristics' and how to respond confidently to reports of any discriminatory behaviour or bullying using the school reporting We will do this through staff CPD, Teach Talks, Wise Thoughts SMSC curriculum, and Assemblies and Bulletins.
            </li>
            <li>
              Provide support and training so that all staff feel comfortable in teaching about, and tackling all forms of discrimination, including those to do with race, religion and sexuality, whether in the reformed PSHE and RSE curricula, as well as in their subject areas.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Equality Report Statement Section */}
      <section className="bg-yellow-200 py-5 md:py-10">
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

      {/* ===== Download Section ===== */}
      <motion.div
        className="py-12 bg-blue-50 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <a
          href="#"
          className="inline-block bg-blue-700 text-white px-8 py-4 rounded-xl text-lg shadow-md hover:bg-blue-800 transition"
        >
          📄 Download Full Equality Report (PDF)
        </a>
      </motion.div>
    </div>
  );
};

export default EqualityReport;
