// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Contact = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Message sent:", form);
//     alert("Message sent successfully!");
//     setForm({ name: "", email: "", subject: "", message: "" });
//   };

//   return (
//     <section className="px-6 py-16 bg-white text-gray-800">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
//         {/* Left - Info Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl font-bold text-blue-700 mb-6">Contact Us</h2>
//           <p className="text-lg mb-4 text-gray-700">
//             We're here to help! If you have any questions about admissions, curriculum,
//             or visiting our school, feel free to reach out.
//           </p>

//           <div className="space-y-4 text-gray-700 text-base">
//             <p><strong>📍 Address:</strong> No 13 Learning Avenue Aduwawa, ElitePark, Benin City</p>
//             <p><strong>📞 Phone:</strong> +234 706 882 6788</p>
//             <p><strong>✉️ Email:</strong> info@eliteparkschool.ng</p>
//             <p><strong>🕒 Hours:</strong> Mon - Fri, 8:00 AM - 4:00 PM</p>
//           </div>

//           {/* Google Map */}
//           <div className="mt-6">
//             <iframe
//               title="School Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2430030870632!2d5.679082499999999!3d6.362588099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d589b9c81ced%3A0x22a9b1163910e81!2sAduwawa%20Market%20Ringroad!5e0!3m2!1sen!2sng!4v1753403169577!5m2!1sen!2sng"
//               width="100%"
//               height="250"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               className="rounded-lg shadow"
//             ></iframe>
//           </div>
//         </motion.div>

//         {/* Right - Contact Form */}
//         <motion.form
//           onSubmit={handleSubmit}
//           className="bg-gray-50 p-8 rounded-xl shadow-lg"
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h3 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
//             Send a Message
//           </h3>

//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             aria-label="Your Name"
//             required
//             className="w-full p-3 mb-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
//           />
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Email Address"
//             aria-label="Email Address"
//             required
//             className="w-full p-3 mb-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
//           />
//           <input
//             type="text"
//             name="subject"
//             value={form.subject}
//             onChange={handleChange}
//             placeholder="Subject"
//             aria-label="Subject"
//             className="w-full p-3 mb-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
//           />
//           <textarea
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             aria-label="Your Message"
//             rows="4"
//             required
//             className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
//           ></textarea>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             Send Message
//           </button>
//         </motion.form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
