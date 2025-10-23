import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* Logo + Motto */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold text-white">ElitePark Academy</h2>
          <p className="text-xs text-gray-400">
            Excellence • Integrity • Innovation
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center sm:justify-center gap-4">
          <Link to="/about/about-us" className="hover:text-white transition">
            About
          </Link>
          <Link
            to="/curriculum/subjects"
            className="hover:text-white transition"
          >
            Curriculum
          </Link>
          <Link to="/joinus/admissions" className="hover:text-white transition">
            Admissions
          </Link>
          <Link
            to="/contact/reporting-an-absence"
            className="hover:text-white transition"
          >
            Contact
          </Link>
        </div>

        {/* Social + Contact */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="flex space-x-3">
            <a href="#" className="hover:text-white transition">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-2 border-l border-gray-700 pl-3">
            <Phone className="w-3 h-3 text-blue-400" />
            <span>+234 706 882 6788</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Bar */}
      <div className="py-3 text-center text-xs text-green-100">
        © {new Date().getFullYear()} ElitePark Academy Created by{" "}
        <Link to="http://elvionweb.com">
          <span className="text-cyan-300 font-medium hover:underline cursor-pointer">
            Elvionweb
          </span>
        </Link>
      </div>
    </footer>
  );
}
