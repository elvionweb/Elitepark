import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import GGA1 from "../../assets/GGA1.jpg";

const Admissions = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    grade: "",
    message: "",
  });

  const [admissionsList, setAdmissionsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admissions")
      .then((res) => setAdmissionsList(res.data))
      .catch((err) => console.error("Error connecting to backend", err));
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        message: formData.message || "No message provided",
      };

      const res = await axios.post(
        "http://localhost:5000/api/admissions",
        payload
      );
      alert("Application submitted successfully!");
      setAdmissionsList([...admissionsList, res.data]);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        grade: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting application:", err);
      alert("Failed to submit application.");
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-white text-gray-800">
      {/* Left Section - Image */}
      <div
        className="md:w-1/2 h-[95vh] md:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${GGA1})` }}
      >
        <div className="h-full w-full bg-blue-900/10 flex flex-col items-center justify-center text-yellow-300 text-center p-8">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Admissions at ElitePark
          </motion.h2>
          <motion.p
            className="max-w-md text-lg text-white font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Begin your journey with us where learning meets excellence.
          </motion.p>
        </div>
      </div>

      {/* 📝 Right Section - Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-gray-50">
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
            Application Form
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="p-3 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="p-3 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="p-3 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
              className="p-3 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Select Grade And Apply</option>
              <option value="Creche">Creche</option>
              <option value="Nursery">Nursery</option>
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
            </select>
          </div>

          {/* Message textarea */}
          <textarea
            name="message"
            value={formData.message}
            onChange={(e) => {
              const input = e.target.value;
              if (input.length <= 250) {
                setFormData({ ...formData, message: input });
              }
            }}
            placeholder="Optional message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="5"
          >
            {" "}
          </textarea>
          {/* Live character count */}
          <p
            className={`text-sm mt-1 ${
              formData.message.length >= 250 ? "text-red-500" : "text-gray-500"
            }`}
          >
            {formData.message.length} / 250 characters 250 max
          </p>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Admissions;
