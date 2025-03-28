import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import googlePlayImg from "@/assets/client/google-play.svg";
import appStoreImg from "@/assets/client/app-store.svg";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-10 border-t border-gray-200 px-6 lg:px-20">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-200 pb-8">
        {/* Brand Info */}
        <div>
          <h1 className="text-2xl font-bold text-orange-600">Kattraan</h1>
          <p className="text-sm mt-2 text-gray-600">
          Kattraan – Your gateway to limitless learning. Upskill, get certified, and grow with expert-led courses tailored for your success.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a href="#"><FaFacebookF className="text-blue-600" /></a>
            <a href="#"><FaInstagram className="text-pink-500" /></a>
            <a href="#"><FaTwitter className="text-sky-500" /></a>
            <a href="#"><FaLinkedinIn className="text-blue-700" /></a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>About us</li>
            <li>Contact us</li>
            <li>News and Blogs</li>
            <li>Library</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-bold mb-2">Community</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>Documentation</li>
            <li>Faq</li>
            <li>Forum</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Teaching */}
        <div>
          <h4 className="font-bold mb-2">Teaching</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>Become a teacher</li>
            <li>How to guide</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <p className="text-sm text-gray-700">Toll free: <strong>+91 9878798797</strong></p>
          <p className="text-xs text-gray-500 mb-2">(9AM to 8PM IST)</p>
          <p className="text-sm text-gray-700">Email: <strong>admin@urbancode.in</strong></p>

          {/* App Store Buttons */}
          <div className="flex gap-2 mt-3">
            <img src={googlePlayImg} alt="Google Play" className="w-28" />
            <img src={appStoreImg} alt="App Store" className="w-28" />
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center py-4 text-sm text-gray-500 gap-2">
        <p>Copyrights ©2025 Kattraan. Build by Urbancode</p>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            🌐 Language
          </span>
          <span>Terms of use</span>
          <span>Privacy policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
