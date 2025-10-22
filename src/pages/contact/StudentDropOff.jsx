import React from "react";
import { Car, Clock, Shield } from "lucide-react";
import BB9 from "../../assets/BB9.jpg";

export default function StudentDropOff() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* === Section 1: Hero Banner === */}
      <section
        className="relative h-[75vh] md:h-[95vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${BB9})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Student Drop off
          </h1>
        </div>
      </section>

      {/* === Section 2: Drop-off Info === */}
      <section className="max-w-5xl mx-auto px-6 py-8 leading-relaxed">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">
          Bentley Wood Drop-off
        </h2>
        <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
          Student drop-off road
        </h3>

        <p className="text-lg text-gray-700 mb-6 text-justify">
          Only use the <strong>Clamp Hill entrance</strong> to drop off and pick up your daughter
          from school. The road allows traffic to flow freely whilst providing a safe point for
          students to disembark away from the busy traffic on the main road.
        </p>

        <p className="text-lg text-gray-700 mb-6 text-justify">
          The drive operates on a <strong>one-way basis</strong>, with designated pull-over areas.
          It has street lighting and safe entry directions for traffic back onto the main Clamp Hill road.
        </p>
      </section>

      {/* === Section 3: Map + Info Boxes === */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            Find the Drop-off Location
          </h3>

          {/* Google Maps Embed */}
          <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-lg mb-12">
            <iframe
              title="Bentley Wood High School Drop-off Map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15860.52170897284!2d5.657361534619107!3d6.377159508704631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1supper%20mission%20extension%20local%20government!5e0!3m2!1sen!2sng!4v1760786462388!5m2!1sen!2sng"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info Boxes Grid */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Drop-off Zone */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <Car className="w-10 h-10 text-blue-600 mb-3" />
              <h2 className="text-xl font-semibold mb-2">Drop-off Zone</h2>
              <p className="text-gray-700">
                Use the designated drop-off lane at the main entrance. Do not park or leave vehicles unattended.
              </p>
            </div>

            {/* Timings */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <Clock className="w-10 h-10 text-green-600 mb-3" />
              <h2 className="text-xl font-semibold mb-2">Timings</h2>
              <p className="text-gray-700">
                Morning drop-off is between <strong>7:45 AM – 8:30 AM</strong>.
                Afternoon pick-up begins at <strong>3:15 PM</strong>.
              </p>
            </div>

            {/* Safety First */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <Shield className="w-10 h-10 text-purple-600 mb-3" />
              <h2 className="text-xl font-semibold mb-2">Safety First</h2>
              <p className="text-gray-700">
                Always follow staff instructions and ensure children exit cars safely on the pavement side.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
