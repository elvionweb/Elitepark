import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMobileDropdown = (menu) =>
    setMobileOpen(mobileOpen === menu ? null : menu);

  const menus = {
    about: {
      label: "About Us",
      items: [
        "About Us",
        "Prospectus",
        "Examination Results",
        "Ofsted Report",
        "The ElitePark Trust",
        "HCA",
      ],
    },
    information: {
      label: "Information",
      items: [
        "Term Dates",
        "Policies",
        "Funding Reports",
        "Newsletters",
        "The School Day",
        "Equality Report",
        "Special Educational Needs",
        "Exams Information",
        "Young Carers",
        "Information for Parents",
        "Statutory Information",
      ],
    },
    curriculum: {
      label: "Curriculum",
      items: [
        "Subjects",
        "Bridging Work Year 10 – 11",
        "Bridging Work Year 11-12",
        "Enrichment Timetable",
        "ElitePark Values",
        "Core Text Books & Revision Guides",
        "Careers",
        "Arts and Humanities Strategy",
        "Year 8 Options Evening",
      ],
    },
    safeguarding: {
      label: "Safeguarding",
      items: [
        "Staying Safe",
        "Online Safety",
        "Student Wellbeing",
        "Anti-Bullying",
        "The Prevent Duty",
        "Safer Recruitment",
      ],
    },
    sixthform: {
      label: "Sixth Form",
      items: [
        "Applications and Enrolment",
        "Sixth Form Bursaries",
        "A Level Results",
        "Sixth Form Entry Requirements",
        "Useful Links",
        "Leaver Destinations",
      ],
    },
    contact: {
      label: "Contact Us",
      items: ["Reporting an Absence", "Directions to School", "Student drop-off"],
    },
    joinus: {
      label: "Join Us",
      items: ["Admissions", "Vacancies"],
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -7 },
    visible: { opacity: 1, y: 5 },
    exit: { opacity: 0, y: -5 },
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div
        className="
          max-w-[95%] 
          sm:max-w-7xl 
          mx-auto 
          px-4 sm:px-6 lg:px-8 
          py-4 
          flex justify-between items-center
        "
      >
        {/* Logo */}

        <Link
                to="http://localhost:5173/">
                <h1 className="text-xl sm:text-2xl font-bold text-blue-600 whitespace-nowrap">
          ElitePark
        </h1>
              </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-wrap gap-x-8 items-center mr-5">
          <Link
            to="/"
            className="hover:text-blue-800 transition font-medium whitespace-nowrap"
          >
            Home
          </Link>

          {Object.entries(menus).map(([key, menu]) => (
            <div
              key={key}
              className="relative group"
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
            >
              <button className="flex items-center font-medium hover:text-blue-600 transition whitespace-nowrap">
                {menu.label} <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {hovered === key && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    transition={{ duration: 0.25 }}
                    className={`
                      absolute mt-3 bg-orange-50 border shadow-lg rounded-xl p-4 grid gap-1
                      ${menu.items.length > 6 ? "grid-cols-2 w-[22rem]" : "grid-cols-1 w-[14rem]"}
                      sm:w-[18rem] md:w-[20rem] lg:w-[22rem] xl:w-[12rem]
                    `}
                  >
                    {menu.items.map((item, i) => (
                      <Link
                        key={i}
                        to={`/${key}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="px-2 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition text-sm font-medium"
                      >
                        {item}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              lg:hidden 
              bg-white 
              shadow-lg 
              overflow-hidden 
              rounded-b-xl 
              max-h-[85vh] 
              overflow-y-auto
            "
          >
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 hover:bg-blue-50 hover:text-blue-700 font-medium transition"
            >
              Home
            </Link>

            {Object.entries(menus).map(([key, menu]) => (
              <div key={key}>
                <button
                  onClick={() => toggleMobileDropdown(key)}
                  className="w-full flex justify-between items-center px-6 py-3 font-semibold hover:bg-gray-50 transition text-left"
                >
                  {menu.label}
                  <ChevronDown
                    className={`ml-2 w-4 h-4 transform transition-transform ${
                      mobileOpen === key ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileOpen === key && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="bg-gray-50"
                    >
                      {menu.items.map((item, i) => (
                        <Link
                          key={i}
                          to={`/${key}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                          onClick={() => setIsOpen(false)}
                          className="block px-10 py-2 hover:bg-blue-100 hover:text-blue-700 rounded-md transition text-sm"
                        >
                          {item}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
