// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const Signup = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     role: "",
//     password: "",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Signup submitted:", form);
//     alert("Account created!");
//     setForm({ name: "", email: "", role: "", password: "" });
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
//       <motion.div
//         className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
//           Create an Account
//         </h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Full name"
//             required
//             aria-label="Full name"
//             className="w-full mb-4 p-3 border rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
//           />
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Email address"
//             required
//             aria-label="Email"
//             className="w-full mb-4 p-3 border rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
//           />
//           <select
//             name="role"
//             value={form.role}
//             onChange={handleChange}
//             required
//             aria-label="Select Role"
//             className="w-full mb-4 p-3 border rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
//           >
//             <option value="">Select Role</option>
//             <option value="student">Student</option>
//             <option value="parent">Parent</option>
//             <option value="admin">Admin</option>
//           </select>
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="Password"
//             required
//             aria-label="Password"
//             className="w-full mb-4 p-3 border rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-sm text-center mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 hover:underline">
//             Login here
//           </Link>
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default Signup;
