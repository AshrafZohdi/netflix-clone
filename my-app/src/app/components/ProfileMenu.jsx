"use client";
import { useState } from "react";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import Image from "next/image";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 p-2 rounded-md text-white hover:bg-gray-800 transition"
      >
        <Image
          src= "/images/ProfileAvatar.webp" // Replace with dynamic user profile pic
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full"
        />
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
          <button className="flex items-center gap-2 px-4 py-3 hover:bg-gray-800 w-full">
            <User className="w-4 h-4" />
            Profile
          </button>
          <button className="flex items-center gap-2 px-4 py-3 hover:bg-gray-800 w-full">
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <hr className="border-gray-700" />
          <button className="flex items-center gap-2 px-4 py-3 hover:bg-red-600 w-full">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
