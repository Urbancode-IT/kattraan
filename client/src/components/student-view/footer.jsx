import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import googlePlayImg from "@/assets/client/google-play.svg";
import appStoreImg from "@/assets/client/app-store.svg";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-12 border-t border-gray-200 px-4 sm:px-8 lg:px-20">
      {/* Grid Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-gray-200">
        {/* Brand Info */}
        <div className="col-span-1 sd:col-span-2">
          <h1 className="text-3xl font-bold text-orange-600 mb-2">Kattraan</h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Kattraan – Your gateway to limitless learning. Upskill, get certified, and grow with expert-led courses tailored for your success.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#"><FaFacebookF className="text-blue-600 hover:scale-110 transition" /></a>
            <a href="#"><FaInstagram className="text-pink-500 hover:scale-110 transition" /></a>
            <a href="#"><FaTwitter className="text-sky-500 hover:scale-110 transition" /></a>
            <a href="#"><FaLinkedinIn className="text-blue-700 hover:scale-110 transition" /></a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-lg mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link to="/about" className="hover:text-blue-600">About us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact us</Link></li>
            <li><Link to="/blog" className="hover:text-blue-600">News and Blogs</Link></li>
            <li><Link to="/library" className="hover:text-blue-600">Library</Link></li>
            <li><Link to="/careers" className="hover:text-blue-600">Career</Link></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-bold text-lg mb-3">Community</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link to="/docs" className="hover:text-blue-600">Documentation</Link></li>
            <li><Link to="/faq" className="hover:text-blue-600">FAQ</Link></li>
            <li><Link to="/forum" className="hover:text-blue-600">Forum</Link></li>
            <li><Link to="/sitemap" className="hover:text-blue-600">Sitemap</Link></li>
          </ul>
        </div>

        {/* Teaching */}
        <div>
          <h4 className="font-bold text-lg mb-3">Teaching</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link to="/instructor-home" className="hover:text-blue-600">Become a Instructor</Link></li>
            <li><Link to="/teaching-guide" className="hover:text-blue-600">How to guide</Link></li>
            <li><Link to="/legal/terms" className="hover:text-blue-600">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-lg mb-3">Contact</h4>
          <p className="text-sm text-gray-700">Toll free: <strong>+91 9878798797</strong></p>
          <p className="text-xs text-gray-500 mb-2">(9AM to 8PM IST)</p>
          <p className="text-sm text-gray-700">Email: <strong>admin@urbancode.in</strong></p>
          <div className="flex gap-3 mt-3">
            <img src={googlePlayImg} alt="Google Play" className="w-28 shadow-md rounded-md" />
            <img src={appStoreImg} alt="App Store" className="w-28 shadow-md rounded-md" />
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-6 text-sm text-gray-500 gap-3">
        <p>&copy; 2025 Kattraan. URBAN CODE TRAINING AND SOLUTIONS.</p>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">🌐 Language</span>
          <Link to="/legal/terms" className="hover:text-blue-600">Terms of Use</Link>
          <Link to="/legal/privacy" className="hover:text-blue-600">Privacy Policy</Link>
          <Link to="/legal/disclaimer" className="hover:text-blue-600">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
