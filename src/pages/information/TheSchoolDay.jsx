// src/pages/TheSchoolDay.jsx
import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp5 from "../../assets/pp5.jpg";
import pp19 from "../../assets/pp19.jpg";

export default function TheSchoolDay() {
  const timetable = [
    { time: "8:30 AM", activity: "Morning Registration" },
    { time: "8:45 AM - 10:15 AM", activity: "Lesson 1" },
    { time: "10:15 AM - 10:30 AM", activity: "Morning Break" },
    { time: "10:30 AM - 12:00 PM", activity: "Lesson 2" },
    { time: "12:00 PM - 12:45 PM", activity: "Lunch" },
    { time: "12:45 PM - 2:15 PM", activity: "Lesson 3" },
    { time: "2:15 PM - 3:00 PM", activity: "Lesson 4 / Enrichment" },
    { time: "3:00 PM", activity: "End of Day / After School Clubs" },
  ];

  return (
    <div className="w-full bg-yellow-400">
      {/* ===== SECTION 1: HERO IMAGE ===== */}
      <section
        className="relative h-[95vh] bg-cover bg-center flex items-center justify-center text-yellow-400"
        style={{ backgroundImage: `url(${pp19})` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            The School Day
          </h1>
        </motion.div>
      </section>

      {/* ===== SECTION 2: DAILY TIMETABLE ===== */}
      <section className="max-w-5xl mx-auto py-10 px-6 bg-yellow-400">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-10"
        >
          Typical Day Schedule
        </motion.h2>

        <div className="space-y-4">
          {timetable.map((slot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-between bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2 sm:mb-0">
                <Clock className="w-5 h-5 text-blue-600" />
                <p className="font-semibold text-gray-800">{slot.time}</p>
              </div>
              <p className="text-blue-600 text-center sm:text-right font-semibold">{slot.activity}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 3: FULL WEEK TIMETABLE ===== */}
      <section className="bg-yellow-400 py-4 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Weekly Timetable Overview
        </motion.h2>

        {/* TABLE WRAPPER */}
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
            Mon / Tues / Thurs / Fri
          </h3>
          <table className="w-full border-collapse border border-gray-700 text-sm md:text-base mb-10">
            <thead className="bg-blue-100">
              <tr>
                <th className="border p-2">Session</th>
                <th className="border p-2">Years 7/8/9</th>
                <th className="border p-2">Years 10/11</th>
                <th className="border p-2">Years 12/13</th>
              </tr>
            </thead>
            <tbody className="text-blue-900 text-center font-semibold">
              <tr><td className="border p-2">Tutor</td><td>8.40-9.00</td><td>8.40-9.00</td><td>8.40-9.00</td></tr>
              <tr><td className="border p-2">P1</td><td>9.00-9.50</td><td>9.00-9.50</td><td>9.00-9.50</td></tr>
              <tr><td className="border p-2">P2</td><td>9.50-10.40</td><td>9.50-10.40</td><td>9.50-10.40</td></tr>
              <tr><td className="border p-2">Break</td><td>10.40-11.00</td><td>10.40-11.20</td><td>10.40-11.00</td></tr>
              <tr><td className="border p-2">P4</td><td>11.00-11.50</td><td>11.20-11.40</td><td>11.00-11.50</td></tr>
              <tr><td className="border p-2">P5</td><td>11.50-12.40</td><td>11.40-12.40</td><td>11.50-12.40</td></tr>
              <tr><td className="border p-2">Lunch</td><td>12.40-13.30</td><td>12.40-13.30</td><td>12.40-13.30</td></tr>
              <tr><td className="border p-2">P6</td><td>13.30-14.20</td><td>12.40-13.30</td><td>13.30-14.20</td></tr>
              <tr><td className="border p-2">P7</td><td>14.20-15.10</td><td>14.20-15.15</td><td>14.20-15.10</td></tr>
              <tr><td className="border p-2">Twilight</td><td colSpan={3}>15.10-16.00 (Thursday Only)</td></tr>
            </tbody>
          </table>

          <h3 className="text-xl font-bold text-center text-gray-700 mb-4">
            Wednesday
          </h3>
          <table className="w-full border-collapse border border-gray-600 text-sm md:text-base">
            <thead className="bg-blue-100">
              <tr>
                <th className="border p-2">Session</th>
                <th className="border p-2">Years 7/8/9</th>
                <th className="border p-2">Years 10/11</th>
                <th className="border p-2">Years 12/13</th>
              </tr>
            </thead>
            <tbody className="text-blue-900 text-center font-semibold">
              <tr><td className="border p-2">Tutor</td><td>8.40-9.00</td><td>8.40-9.00</td><td>8.40-9.00</td></tr>
              <tr><td className="border p-2">P1</td><td>9.00-9.45</td><td>9.00-9.45</td><td>9.00-9.45</td></tr>
              <tr><td className="border p-2">P2</td><td>9.45-10.30</td><td>9.45-10.30</td><td>9.45-10.30</td></tr>
              <tr><td className="border p-2">Break</td><td>10.30-10.50</td><td>10.30-11.20</td><td>10.30-11.20</td></tr>
              <tr><td className="border p-2">P3</td><td>10.50-11.35</td><td>11.20-11.40</td><td>11.20-11.40</td></tr>
              <tr><td className="border p-2">P4</td><td>11.35-12.20</td><td>11.40-12.25</td><td>11.40-12.25</td></tr>
              <tr><td className="border p-2">Lunch</td><td>12.20-13.05</td><td>12.25-13.05</td><td>12.25-13.05</td></tr>
              <tr><td className="border p-2">P5</td><td>13.05-13.50</td><td>13.05-13.50</td><td>13.05-13.50</td></tr>
              <tr><td className="border p-2">P6</td><td>13.50-14.30</td><td>13.50-14.35</td><td>13.50-14.35</td></tr>
              <tr><td className="border p-2">P7</td><td>14.30-15.10</td><td>14.35-15.15</td><td>14.35-15.15</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* The School Day Statement Section */}
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
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
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
