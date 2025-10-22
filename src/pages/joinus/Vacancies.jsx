import React from "react";
import BAC1 from "../../assets/BAC1.jpg"

export default function Vacancies() {
  return (
    <div className="bg-yellow-300">
      {/* ===== Section 1: Hero Image ===== */}
      <section
        className="relative w-full h-[95vh] sm:h-[70vh] lg:h-[95vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${BAC1})` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center text-yellow-300 px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-4">
            Vacancies at ElitePark
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto font-semibold text-white">
            Join our team of passionate educators shaping bright futures every
            day.
          </p>
        </div>
      </section>

      {/* ===== Section 2: Vacancies ===== */}
      <section className="max-w-6xl mx-auto py-8 px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3">
            Current Openings
          </h2>
          <p className="text-black text-base sm:text-lg font-semibold">
            We're looking for talented and dedicated professionals to join our
            growing community.
          </p>
        </div>

        {/* Vacancies Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Vacancy 1 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 transition transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-semibold text-gray-800">
                Math Teacher (Full-Time)
              </h3>
            </div>
            <p className="text-gray-800 mb-4">
              Enthusiastic and experienced Math Teacher to join our secondary
              school team.
            </p>
            <button className="mt-auto inline-block px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-pink-700 transition">
              Apply Now
            </button>
          </div>

          {/* Vacancy 2 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 transition transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-semibold text-gray-800">
                Primary School Teacher
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Passionate about teaching young children? Inspire our pupils and
              help them grow.
            </p>
            <button className="mt-auto inline-block px-5 py-2 text-sm font-medium text-white bg-green-600 rounded-full hover:bg-yellow-500 transition">
              Apply Now
            </button>
          </div>

          {/* Vacancy 3 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 transition transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-semibold text-gray-800">
                Teaching Assistant
              </h3>
            </div>
            <p className="text-gray-800 mb-4">
              Support classroom activities and help students achieve academic
              success.
            </p>
            <button className="mt-auto inline-block px-5 py-2 text-sm font-medium text-white bg-orange-600 rounded-full hover:bg-purple-700 transition">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
