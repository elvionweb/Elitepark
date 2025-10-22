import React from "react";
import { motion } from "framer-motion";
import PP42 from "../../assets/pp42.jpg";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";

export default function EnrichmentTimetable() {
  return (
    <div className="w-full">
      {/* SECTION 1 — HERO IMAGE */}
      <section
        className="relative h-[90vh] sm:h-[60vh] md:h-[75vh] lg:h-[95vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${PP42})`,
          backgroundPosition: "center",
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
            Enrichment
          </h1>
        </motion.div>
      </section>

      {/* ✅ SECTION 2 — ENRICHMENT STATEMENT */}
      <section className="max-w-6xl mx-auto py-4 px-4 mt-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 text-center"
        >
          Enrichment Timetable
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-800 leading-relaxed text-justify space-y-4 text-base sm:text-lg"
        >
          <p>
            At ElitePark, we believe that enrichment opportunities are essential to student
            achievement and conducive to student well-being. We are proud of our broad enrichment
            programme: including clubs, trips, student leadership roles, volunteering opportunities
            and competitions, both internal and external. These experiences provide a positive
            school experience whilst developing cultural capital and promoting further education.
          </p>
          <p>
            Each year we note an increased number of our students taking part in clubs. Last year we
            had 75% club attendance from all students, with Pupil Premium students in-line with this
            figure. We encourage all students to participate in co-curricular activities, embodying
            our CARE values and enriching their lives and learning.
          </p>
          <p>
            Please email{" "}
            <a
              href="elvionweb@gmail.com"
              className="text-blue-600 underline hover:text-blue-800"
            >
              elvionweb@gmail.com
            </a>{" "}
            for any queries.
          </p>
        </motion.div>
      </section>

      {/* ✅ SECTION 3 — ENRICHMENT TIMETABLE TABLE */}
      <section className="max-w-7xl mx-auto py-6 px-4 overflow-x-auto">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center"
        >
          Enrichment Timetable Autumn Term 2025
        </motion.h3>

        <p className="text-gray-700 mb-6 text-center font-medium">
          Before School (7.30am - 8.15am) | Lunchtime (12.40pm - 2.20pm, Wednesday 12.20pm - 1.50pm)
        </p>

        <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3">Monday</th>
                <th className="px-4 py-3">Tuesday</th>
                <th className="px-4 py-3">Wednesday</th>
                <th className="px-4 py-3">Thursday</th>
                <th className="px-4 py-3">Friday</th>
              </tr>
            </thead>
            <tbody className="bg-yellow-50 divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 align-top">
                  Ethics Cup <br />
                  <span className="text-sm text-gray-600">
                    12.40  1.20pm | Mr Osagie & Ms Monica | Room: tbc
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Colouring Club (Yr 7) <br />
                  <span className="text-sm text-gray-600">
                    Week A | 12.40-1.20pm | Miss Rashidat | Room: V9
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Music Club <br />
                  <span className="text-sm text-gray-600">
                    Mrs Ngozi / Mrs Omoye | 12.30-1.00pm | Room: tbc
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Maths Puzzles & Games (Yr 7-9) <br />
                  <span className="text-sm text-gray-600">12.40-1.20pm | Room: W12</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Badminton Club (6th Form) <br />
                  <span className="text-sm text-gray-600">7.45-8.30am | Mrs Johnson | Sports Hall</span>
                </td>
              </tr>
              {/* You can continue to add more rows as needed */}
            </tbody>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 align-top">
                  Sociology and Criminology Club <br />
                  <span className="text-sm text-gray-600">
                    12.50  1.25pm | Mr Nosa & Ms Sarah | Room: U2
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Year group(s): Year 7 - 9 <br />
                  <span className="text-sm text-gray-600">
                    Miss Momoh | 12.50-1.25pm | Mrs Success/Mrs Eki | Room: V9
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Music Club <br />
                  <span className="text-sm text-gray-600">
                    Mrs Bancroft / Mrs Parkes | 12.30–1.00pm | Room: tbc
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Maths Puzzles & Games (Yr 7–9) <br />
                  <span className="text-sm text-gray-600">12.40–1.20pm | Room: W12</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Badminton Club (6th Form) <br />
                  <span className="text-sm text-gray-600">7.45–8.30am | Mrs Johnson | Sports Hall</span>
                </td>
              </tr>
              {/* You can continue to add more rows as needed */}
            </tbody>
            <tbody className="bg-yellow-50 divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 align-top">
                  Ethics Cup <br />
                  <span className="text-sm text-gray-600">
                    12.40  1.20pm | Mr Nussbaum & Ms Crosbie | Room: tbc
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Colouring Club (Yr 7) <br />
                  <span className="text-sm text-gray-600">
                    Week A | 12.40–1.20pm | Miss Ashfaque | Room: V9
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Music Club <br />
                  <span className="text-sm text-gray-600">
                    Mrs Bancroft / Mrs Parkes | 12.30–1.00pm | Room: tbc
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Maths Puzzles & Games (Yr 7–9) <br />
                  <span className="text-sm text-gray-600">12.40–1.20pm | Room: W12</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Badminton Club (6th Form) <br />
                  <span className="text-sm text-gray-600">7.45-8.30am | Mrs Johnson | Sports Hall</span>
                </td>
              </tr>
              {/* You can continue to add more rows as needed */}
            </tbody>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 align-top">
                  Ethics Cup <br />
                  <span className="text-sm text-gray-600">
                    12.40  1.20pm | Mr Nussbaum & Ms Crosbie | Room: tbc
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Colouring Club (Yr 7) <br />
                  <span className="text-sm text-gray-600">
                    Week A | 12.40–1.20pm | Miss Ashfaque | Room: V9
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Music Club <br />
                  <span className="text-sm text-gray-600">
                    Mrs Bancroft / Mrs Parkes | 12.30–1.00pm | Room: tbc
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Maths Puzzles & Games (Yr 7–9) <br />
                  <span className="text-sm text-gray-600">12.40–1.20pm | Room: W12</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Badminton Club (6th Form) <br />
                  <span className="text-sm text-gray-600">7.45–8.30am | Mrs Johnson | Sports Hall</span>
                </td>
              </tr>
              {/* You can continue to add more rows as needed */}
            </tbody>
            <tbody className="bg-yellow-50 divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 align-top">
                  Ethics Cup <br />
                  <span className="text-sm text-gray-600">
                    12.40  1.20pm | Mr Nussbaum & Ms Crosbie | Room: tbc
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Colouring Club (Yr 7) <br />
                  <span className="text-sm text-gray-600">
                    Week A | 12.40–1.20pm | Miss Ashfaque | Room: V9
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Music Club <br />
                  <span className="text-sm text-gray-600">
                    Mrs Bancroft / Mrs Parkes | 12.30–1.00pm | Room: tbc
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Maths Puzzles & Games (Yr 7–9) <br />
                  <span className="text-sm text-gray-600">12.40–1.20pm | Room: W12</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Badminton Club (6th Form) <br />
                  <span className="text-sm text-gray-600">7.45–8.30am | Mrs Johnson | Sports Hall</span>
                </td>
              </tr>
              {/* You can continue to add more rows as needed */}
            </tbody>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 align-top">
                  Ethics Cup <br />
                  <span className="text-sm text-gray-600">
                    12.40  1.20pm | Mr Nussbaum & Ms Crosbie | Room: tbc
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Colouring Club (Yr 7) <br />
                  <span className="text-sm text-gray-600">
                    Week A | 12.40–1.20pm | Miss Ashfaque | Room: V9
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Music Club <br />
                  <span className="text-sm text-gray-600">
                    Mrs Bancroft / Mrs Parkes | 12.30–1.00pm | Room: tbc
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Maths Puzzles & Games (Yr 7-9) <br />
                  <span className="text-sm text-gray-600">12.40-1.20pm | Room: W12</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Badminton Club (6th Form) <br />
                  <span className="text-sm text-gray-600">7.45-8.30am | Mrs Johnson | Sports Hall</span>
                </td>
              </tr>
              {/* You can continue to add more rows as needed */}
            </tbody>
            <tbody className="bg-yellow-50 divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 align-top">
                  Ethics Cup <br />
                  <span className="text-sm text-gray-600">
                    12.40  1.20pm | Mr Nussbaum & Ms Crosbie | Room: tbc
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Colouring Club (Yr 7) <br />
                  <span className="text-sm text-gray-600">
                    Week A | 12.40–1.20pm | Miss Ashfaque | Room: V9
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Music Club <br />
                  <span className="text-sm text-gray-600">
                    Mrs Bancroft / Mrs Parkes | 12.30–1.00pm | Room: tbc
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Maths Puzzles & Games (Yr 7–9) <br />
                  <span className="text-sm text-gray-600">12.40–1.20pm | Room: W12</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Badminton Club (6th Form) <br />
                  <span className="text-sm text-gray-600">7.45–8.30am | Mrs Johnson | Sports Hall</span>
                </td>
              </tr>
              {/* You can continue to add more rows as needed */}
            </tbody>
          </table>
        </div>
      </section>

      {/* ✅ SECTION 4 — AFTER SCHOOL TIMETABLE */}
      <section className="max-w-7xl mx-auto py-4 px-4 overflow-x-auto">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center"
        >
          After School (3.10pm – 5.00pm)
        </motion.h3>

        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3">Monday</th>
                <th className="px-4 py-3">Tuesday</th>
                <th className="px-4 py-3">Wednesday</th>
                <th className="px-4 py-3">Thursday</th>
                <th className="px-4 py-3">Friday</th>
              </tr>
            </thead>
            <tbody className="bg-yellow-50 divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 align-top">
                  GCSE Trampolining <br />
                  <span className="text-sm text-gray-600">Coach Jan | 3.15–4.30pm | Sports Hall</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Future Leaders Club (Yr 7–8) <br />
                  <span className="text-sm text-gray-600">
                    Ms Shatila | 3.15-3.55pm | Room: 211
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Medical Society (Yr 12) <br />
                  <span className="text-sm text-gray-600">Mrs Patel | 3.20–4.15pm | U5</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Medical Society (Yr 13) <br />
                  <span className="text-sm text-gray-600">Mrs Patel | 12.50–1.20pm | U5</span>
                </td>
                <td className="px-4 py-3 align-top">
                  6th Form Netball (Students vs Staff) <br />
                  <span className="text-sm text-gray-600">
                    Miss Mouskis / Miss Crosbie / Miss Bramble | 3.30–4.30pm | Courts
                  </span>
                </td>
              </tr>
              {/* You can continue the rest of the table */}
            </tbody>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 align-top">
                  GCSE Trampolining <br />
                  <span className="text-sm text-gray-600">Coach Jan | 3.15–4.30pm | Sports Hall</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Future Leaders Club (Yr 7–8) <br />
                  <span className="text-sm text-gray-600">
                    Ms Shatila | 3.15-3.55pm | Room: 211
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Medical Society (Yr 12) <br />
                  <span className="text-sm text-gray-600">Mrs Patel | 3.20–4.15pm | U5</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Medical Society (Yr 13) <br />
                  <span className="text-sm text-gray-600">Mrs Patel | 12.50–1.20pm | U5</span>
                </td>
                <td className="px-4 py-3 align-top">
                  6th Form Netball (Students vs Staff) <br />
                  <span className="text-sm text-gray-600">
                    Miss Mouskis / Miss Crosbie / Miss Bramble | 3.30–4.30pm | Courts
                  </span>
                </td>
              </tr>
              {/* You can continue the rest of the table */}
            </tbody>
            <tbody className="bg-yellow-50 divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 align-top">
                  GCSE Trampolining <br />
                  <span className="text-sm text-gray-600">Coach Jan | 3.15–4.30pm | Sports Hall</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Future Leaders Club (Yr 7–8) <br />
                  <span className="text-sm text-gray-600">
                    Ms Shatila | 3.15-3.55pm | Room: 211
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Medical Society (Yr 12) <br />
                  <span className="text-sm text-gray-600">Mrs Patel | 3.20–4.15pm | U5</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Medical Society (Yr 13) <br />
                  <span className="text-sm text-gray-600">Mrs Patel | 12.50–1.20pm | U5</span>
                </td>
                <td className="px-4 py-3 align-top">
                  6th Form Netball (Students vs Staff) <br />
                  <span className="text-sm text-gray-600">
                    Miss Mouskis / Miss Crosbie / Miss Bramble | 3.30–4.30pm | Courts
                  </span>
                </td>
              </tr>
              {/* You can continue the rest of the table */}
            </tbody>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 align-top">
                  GCSE Trampolining <br />
                  <span className="text-sm text-gray-600">Coach Jan | 3.15–4.30pm | Sports Hall</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Future Leaders Club (Yr 7–8) <br />
                  <span className="text-sm text-gray-600">
                    Ms Shatila | 3.15-3.55pm | Room: 211
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Medical Society (Yr 12) <br />
                  <span className="text-sm text-gray-600">Mrs Patel | 3.20–4.15pm | U5</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Medical Society (Yr 13) <br />
                  <span className="text-sm text-gray-600">Mrs Patel | 12.50–1.20pm | U5</span>
                </td>
                <td className="px-4 py-3 align-top">
                  6th Form Netball (Students vs Staff) <br />
                  <span className="text-sm text-gray-600">
                    Miss Mouskis / Miss Crosbie / Miss Bramble | 3.30–4.30pm | Courts
                  </span>
                </td>
              </tr>
              {/* You can continue the rest of the table */}
            </tbody>
            <tbody className="bg-yellow-50 divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 align-top">
                  GCSE Trampolining <br />
                  <span className="text-sm text-gray-600">Coach Jan | 3.15–4.30pm | Sports Hall</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Future Leaders Club (Yr 7–8) <br />
                  <span className="text-sm text-gray-600">
                    Ms Shatila | 3.15-3.55pm | Room: 211
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Medical Society (Yr 12) <br />
                  <span className="text-sm text-gray-600">Mrs Patel | 3.20–4.15pm | U5</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Medical Society (Yr 13) <br />
                  <span className="text-sm text-gray-600">Mrs Patel | 12.50–1.20pm | U5</span>
                </td>
                <td className="px-4 py-3 align-top">
                  6th Form Netball (Students vs Staff) <br />
                  <span className="text-sm text-gray-600">
                    Miss Mouskis / Miss Crosbie / Miss Bramble | 3.30–4.30pm | Courts
                  </span>
                </td>
              </tr>
              {/* You can continue the rest of the table */}
            </tbody>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 align-top">
                  GCSE Trampolining <br />
                  <span className="text-sm text-gray-600">Coach Jan | 3.15–4.30pm | Sports Hall</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Future Leaders Club (Yr 7–8) <br />
                  <span className="text-sm text-gray-600">
                    Ms Shatila | 3.15-3.55pm | Room: 211
                  </span>
                </td>
                <td className="px-4 py-3 align-top">
                  Medical Society (Yr 12) <br />
                  <span className="text-sm text-gray-600">Mrs Patel | 3.20–4.15pm | U5</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Medical Society (Yr 13) <br />
                  <span className="text-sm text-gray-600">Mrs Patel | 12.50–1.20pm | U5</span>
                </td>
                <td className="px-4 py-3 align-top">
                  6th Form Netball (Students vs Staff) <br />
                  <span className="text-sm text-gray-600">
                    Miss Mouskis / Miss Crosbie / Miss Bramble | 3.30–4.30pm | Courts
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Enrichment Statement Section */}
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
