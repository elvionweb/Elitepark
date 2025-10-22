import React from "react";
import { motion } from "framer-motion";
import { PiggyBank, GraduationCap, Info } from "lucide-react";

export default function SixthFormBursaries() {
  const bursaries = [
    {
      icon: <PiggyBank className="w-8 h-8 text-green-600" />,
      title: "Financial Support",
      description:
        "Bursaries are available to support students with essential expenses such as transport, meals, and study materials."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-green-600" />,
      title: "Eligibility",
      description:
        "Students from low-income households, or those facing financial hardship, may be eligible for a Sixth Form bursary."
    },
    {
      icon: <Info className="w-8 h-8 text-green-600" />,
      title: "How to Apply",
      description:
        "Complete the bursary application form during enrolment and provide the required evidence to support your claim."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-green-700 mb-8 text-center"
      >
        Sixth Form Bursaries
      </motion.h1>

      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
        We believe financial challenges should not stop any student from achieving their academic potential. 
        Our bursaries provide essential support to ensure fair access to education.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {bursaries.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
