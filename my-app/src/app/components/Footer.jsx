"use client";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  // Example language selector (purely visual in this snippet)
  const [language, setLanguage] = useState("English");

  return (
    <footer className="bg-black text-gray-400 py-8 mt-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Footer Top Section */}
        <p className="mb-6">
          Questions? <Link href="#" className="hover:underline">Contact us</Link>
        </p>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
          <div className="space-y-2">
            <Link href="#" className="hover:underline block">FAQ</Link>
            <Link href="#" className="hover:underline block">Investor Relations</Link>
            <Link href="#" className="hover:underline block">Privacy</Link>
            <Link href="#" className="hover:underline block">Speed Test</Link>
          </div>

          <div className="space-y-2">
            <Link href="#" className="hover:underline block">Help Center</Link>
            <Link href="#" className="hover:underline block">Jobs</Link>
            <Link href="#" className="hover:underline block">Cookie Preferences</Link>
            <Link href="#" className="hover:underline block">Legal Notices</Link>
          </div>

          <div className="space-y-2">
            <Link href="#" className="hover:underline block">Account</Link>
            <Link href="#" className="hover:underline block">Ways to Watch</Link>
            <Link href="#" className="hover:underline block">Corporate Information</Link>
            <Link href="#" className="hover:underline block">Only on Netflix</Link>
          </div>

          <div className="space-y-2">
            <Link href="#" className="hover:underline block">Media Center</Link>
            <Link href="#" className="hover:underline block">Terms of Use</Link>
            <Link href="/contact" className="hover:underline block">Contact Us</Link>
          </div>
        </div>

        {/* Language Selector */}
        <div className="mt-6">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-black border border-gray-500 px-2 py-1 text-white rounded-sm"
          >
            <option value="English">English</option>
            <option value="Español">Español</option>
            <option value="Français">Français</option>
            <option value="Deutsch">Deutsch</option>
          </select>
        </div>

        {/* Footer Bottom Section */}
        <p className="mt-6 text-sm text-gray-500">
          Netflix Clone &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
