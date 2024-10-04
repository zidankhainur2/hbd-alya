"use client";

import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Close the menu if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-12">
          <Image src={logo} alt="logo" priority />
        </Link>

        {/* lg screen */}
        <ul className="lg:flex gap-x-6 ml-14 hidden">
          <li>
            <Link
              href="/home"
              className="text-white font-semibold underline text-sm hover:text-gray-200"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/About"
              className="text-gray-300 font-normal text-sm hover:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/album"
              className="text-gray-300 font-normal text-sm hover:text-white"
            >
              Album
            </Link>
          </li>
          <li>
            <Link
              href="/question"
              className="text-gray-300 font-normal text-sm hover:text-white"
            >
              Fact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-x-6">
        {/* Dropdown menu */}
        <button
          className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none transition-all duration-200"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6 hover:shadow-lg" />
          )}
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-20 left-48 w-48 bg-transparent backdrop-blur-md lg:hidden z-20 rounded-lg shadow-lg mx-auto"
        >
          <ul className="flex flex-col items-center px-5 py-3 space-y-2">
            <li>
              <Link
                href="/home"
                className="text-white font-semibold text-sm hover:text-gray-200 hover:underline transition-all duration-200 ease-in-out"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/About"
                className="text-gray-300 font-normal text-sm hover:text-white hover:font-semibold hover:underline transition-all duration-200 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/album"
                className="text-gray-300 font-normal text-sm hover:text-white hover:font-semibold hover:underline transition-all duration-200 ease-in-out"
              >
                Album
              </Link>
            </li>
            <li>
              <Link
                href="/question"
                className="text-gray-300 font-normal text-sm hover:text-white hover:font-semibold hover:underline transition-all duration-200 ease-in-out"
              >
                Fact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
