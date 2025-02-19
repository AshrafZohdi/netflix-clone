"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../images/logo.webp"
import ProfileMenu from "./ProfileMenu"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo & Navigation Links */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image src={Logo} alt="Netflix" width={50} height={50} />
          </Link>
          <div className="hidden md:flex space-x-6 text-white">
            <Link href="/">Home</Link>
            <Link href="/series">Series</Link>
            <Link href="/movies">Movies</Link>
            <Link href="/new-popular">New & Popular</Link>
          </div>
        </div>

        {/* Profile & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
          <ProfileMenu />

            {/* Dropdown Menu */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-3 w-48 bg-gray-900 text-white rounded-md shadow-lg">
                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-700">
                  Profile
                </Link>
                <Link href="/settings" className="block px-4 py-2 hover:bg-gray-700">
                  Settings
                </Link>
                <Link href="/logout" className="block px-4 py-2 hover:bg-gray-700">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-black/90 text-white absolute top-16 left-0 w-full p-4 space-y-4">
          <Link href="/">Home</Link>
          <Link href="/series">Series</Link>
          <Link href="/movies">Movies</Link>
          <Link href="/new-popular">New & Popular</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
