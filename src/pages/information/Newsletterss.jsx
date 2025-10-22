import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "../../assets/img2.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";
import pp3 from "../../assets/pp3.jpg";
import pp5 from "../../assets/pp5.jpg";
import pp1 from "../../assets/pp1.jpg";
import pp2 from "../../assets/pp2.jpg";
import pp4 from "../../assets/pp4.jpg";
import pp6 from "../../assets/pp6.jpg";
import pp7 from "../../assets/pp7.jpg";
import pp11 from "../../assets/pp11.jpg";
import pp12 from "../../assets/pp12.jpg";
import pp14 from "../../assets/pp14.jpg";
import pp15 from "../../assets/pp15.jpg";
import pp17 from "../../assets/pp17.jpg";
import pp18 from "../../assets/pp18.jpg";
import pp19 from "../../assets/pp19.jpg";
import pp20 from "../../assets/pp20.jpg";
import pp21 from "../../assets/pp21.jpg";
import pp22 from "../../assets/pp22.jpg";
import pp23 from "../../assets/pp23.jpg";
import pp24 from "../../assets/pp24.jpg";
import pp25 from "../../assets/pp25.jpg";
import pp26 from "../../assets/pp26.jpg";
import pp27 from "../../assets/pp27.jpg";
import pp28 from "../../assets/pp28.jpg";
import pp31 from "../../assets/pp31.jpg";
import pp33 from "../../assets/pp33.jpg";
import pp34 from "../../assets/pp34.jpg";
import pp35 from "../../assets/pp35.jpg";
import pp36 from "../../assets/pp36.jpg";
import pp37 from "../../assets/pp37.jpg";
import pp38 from "../../assets/pp38.jpg";
import pp40 from "../../assets/pp40.jpg";
import pp41 from "../../assets/pp41.jpg";
import pp42 from "../../assets/pp42.jpg";
import pp44 from "../../assets/pp44.jpg";
import pp45 from "../../assets/pp45.jpg";
import pp46 from "../../assets/pp46.jpg";
import ofsted from "../../assets/ofsted.jpg";

export default function Newsletters() {

  // ✅ Image carousel
  const photos = [
  img2, img4, img5, img10, img11, img12, pp3, pp5, pp6, pp7, pp11, pp12, pp14, pp15, pp17, pp18,
  pp19, pp20, pp21, pp22, pp23, pp24, pp25, pp26, pp27, pp28, pp31, pp33, pp34, pp35, pp36, pp37,
  pp38, pp40, pp41, pp42, pp44, pp45, pp46,ofsted,
];

  // ✅ Slick carousel settings
  const imageCarouselSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full bg-gray-50 overflow-hidden">
      {/* ✅ SECTION 1: HERO IMAGE */}
      <section className="relative w-full h-[95vh] md:h-[95vh] overflow-hidden text-yellow-500">
        <img
          src={pp46}
          alt="Newsletter Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center text-yellow-200 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            ElitePark Newsletters
          </motion.h1>
        </div>
      </section>

      {/* ✅ SECTION 2: IMAGE CAROUSEL */}
      <section className="py-8 bg-white">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-700"
        >
          Our Stories
        </motion.h2>
        <div className="max-w-3xl mx-auto px-4">
          <Slider {...imageCarouselSettings}>
            {photos.map((photo, index) => (
              <div key={index} className="px-2">
                <img
                  src={photo}
                  alt={`Slide ${index + 1}`}
                  className="rounded-2xl shadow-lg w-full h-[550px] md:h-[500px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Support for Young Carers Statement Section */}
      <section className="bg-gray-50 py-5 md:py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          {/* Four Clickable Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                img: pp1,
                title: "Contactus",
                subtitle: "Get in Touch",
                link: "/contact/reporting-an-absence",
              },
              {
                img: pp2,
                title: "Admission",
                subtitle: "Apply",
                link: "/joinus/admissions",
              },
              {
                img: pp4,
                title: "Prospectus",
                subtitle: "Request",
                link: "/about/our-vision",
              },
              {
                img: pp5,
                title: "Newsletter",
                subtitle: "What's Goiong On",
                link: "/safeguarding/online-safety",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative h-[250px] sm:h-[300px] lg:h-[350px] rounded-2xl shadow-lg overflow-hidden group"
              >
                <Link to={item.link}>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="flex flex-col items-center text-center">
                      <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white text-2xl sm:text-5xl lg:text-4xl font-bold"
                      >
                        {item.title}
                      </motion.h3>
                      {item.subtitle && (
                        <motion.p
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                          className="text-yellow-400 mt-2 text-xl sm:text-base font-medium"
                        >
                          {item.subtitle}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
