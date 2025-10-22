// import React from "react";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   // Simulated logged-in user role
//   const user = {
//     name: "Elvis",
//     role: "student", // can also be "admin"
//   };

//   return (
//     <section className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-xl shadow p-6 mb-6">
//           <h2 className="text-3xl font-bold text-blue-700">Welcome, {user.name} 👋</h2>
//           <p className="text-gray-600 mt-2">You're logged in as a <strong>{user.role}</strong>.</p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
//             <h4 className="text-xl font-semibold text-blue-600 mb-2">Announcements</h4>
//             <p className="text-sm text-gray-600">Stay updated with latest news from ElitePark.</p>
//             <Link to="/announcements" className="text-blue-500 text-sm mt-2 inline-block">View All →</Link>
//           </div>

//           <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
//             <h4 className="text-xl font-semibold text-blue-600 mb-2">My Profile</h4>
//             <p className="text-sm text-gray-600">Update your details and password.</p>
//             <Link to="/profile" className="text-blue-500 text-sm mt-2 inline-block">Go to Profile →</Link>
//           </div>

//           {user.role === "admin" && (
//             <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
//               <h4 className="text-xl font-semibold text-blue-600 mb-2">Admin Panel</h4>
//               <p className="text-sm text-gray-600">Manage students, classes and more.</p>
//               <Link to="/admin" className="text-blue-500 text-sm mt-2 inline-block">Open Admin Panel →</Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;
