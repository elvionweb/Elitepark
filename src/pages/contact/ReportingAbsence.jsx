import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import BB6 from "../../assets/BB10.jpg";

export default function ReportingAnAbsence() {
  return (
    <div className="flex flex-col w-full">
      {/* ------------------- SECTION 1: HERO IMAGE ------------------- */}
      <section
        className="relative w-full h-[70vh] md:h-[100vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${BB6})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-center text-yellow-300 px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Reporting an Absence
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            It's important to keep us informed if your child will be absent
            or late.
          </p>
        </motion.div>
      </section>

      {/* ------------------- SECTION 2: MAIN CONTENT ------------------- */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-8 text-center"
        >
          Reporting your daughter’s absence
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-800 leading-relaxed space-y-6 text-justify"
        >
          <p>
            When reporting your daughter’s absence, please either:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Report it via the attendance voicemail – dial the school main number –{" "}
              <strong>+234 706 882 6788</strong>, select option 1 for 6th Form or option 2
              for Years 7 to 11.
            </li>
            <li>
              Email the attendance email –{" "}
              <a
                href="mailto:attendance@bentleywood.harrow.sch.uk"
                className="text-blue-700 font-semibold hover:underline"
              >
                attendance@elitepark.com
              </a>
            </li>
          </ul>

          <p>When communicating with us please state clearly:</p>
          <ul className="list-disc pl-4 space-y-2">
            <li>Your daughter’s name and tutor group</li>
            <li>The reason for absence or lateness</li>
          </ul>

          <p>Please use this system if your daughter has:</p>
          <ul className="list-disc pl-4 space-y-2">
            <li>An absence which you know of in advance</li>
            <li>An unexpected absence on the day of absence</li>
            <li>Any notification of your daughter running late</li>
          </ul>

          <p>
            Students in 6th Form may attend lessons at more than one school;
            please make sure <strong>both schools are contacted</strong>.
          </p>

          <p className="pt-4">
            <strong>Students arriving to school after 8.50am:</strong>
          </p>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              Students in Years 7 to 11 should sign in at{" "}
              <strong>Student Reception</strong>.
            </li>
            <li>
              Students in Years 12 and 13 should sign in electronically using the{" "}
              <strong>InVentry screen</strong> in the 6th Form Common Room.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* ------------------- SECTION 3: MAP LOCATION ------------------- */}
      <section className="w-full bg-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-blue-700 mb-6 flex items-center justify-center gap-2"
          >
            <MapPin className="w-7 h-7 text-blue-700" />
            Find Us & Report in Person
          </motion.h3>

          <p className="text-gray-700 max-w-3xl mx-auto mb-4">
            You can locate our school or report an absence directly by visiting
            us in person. Below is our location on the map.
          </p>

          {/* Google Map Embed */}
          <div className="w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15860.52170897284!2d5.657361534619107!3d6.377159508704631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1supper%20mission%20extension%20local%20government!5e0!3m2!1sen!2sng!4v1760786462388!5m2!1sen!2sng"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
