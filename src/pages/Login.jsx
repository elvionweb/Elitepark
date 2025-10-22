// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login submitted:", form);
//     alert("Login submitted!");
//     setForm({ email: "", password: "" });
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
//           Login to Portal
//         </h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Email address"
//             aria-label="Email"
//             required
//             className="w-full mb-4 p-3 border rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
//           />
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="Password"
//             aria-label="Password"
//             required
//             className="w-full mb-4 p-3 border rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-sm text-center mt-4">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-blue-600 hover:underline">
//             Sign up here
//           </Link>
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default Login;
