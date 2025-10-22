import React from "react";
import AA6 from "../../assets/AA6.jpg";

export default function DirectionsToSchool() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* === Section 1: Hero Banner === */}
      <section
        className="relative h-[70vh] md:h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${AA6})` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center text-yellow-300 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Directions to ElitePark High School
          </h1>
        </div>
      </section>

      {/* === Section 2: Directions Text === */}
      <section className="max-w-5xl mx-auto px-6 py-10 leading-relaxed">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">
          Directions to School
        </h2>

        <p className="text-lg text-gray-700 mb-4 text-justify">
          Welcome to ElitePark High School's active travel map! You can use these maps to help
          you walk, cycle, or use public transport to get to school. Please download the Active
          Travel Map for ElitePark High School or view the link to the Transport for Edo State
          journey planner.
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">
          Address
        </h3>
        <p className="text-gray-700 text-lg mb-2">
          ElitePark High School, <br />
          Upper Mission Extension, <br />
          Lucky Way, <br />
          Aduwawa, <br />
          Edo State
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mt-5 mb-4">
          Contact Information
        </h3>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Telephone:</strong> <a href="tel:07068826788" className="text-blue-600 hover:underline">+234 706 882 6788</a>
        </p>
        <p className="text-lg text-gray-700">
          <strong>Email:</strong>{" "}
          <a
            href="elvionweb@gmail.com"
            className="text-blue-600 hover:underline"
          >
            ElvionWeb@gmail.com
          </a>
        </p>
      </section>

      {/* === Section 3: Google Map === */}
      <section className="w-full bg-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Find Us on the Map
          </h3>

          <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="ElitePark High School"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15860.52170897284!2d5.657361534619107!3d6.377159508704631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1supper%20mission%20extension%20local%20government!5e0!3m2!1sen!2sng!4v1760786462388!5m2!1sen!2sng"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
