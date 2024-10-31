"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/logo.jpg";
import { useState } from "react";
import AboutNavs from "./AboutNavs";
import NewsAndEventsNav from "./NewsAndEventsNav";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutNavsOpen, setAboutNavsOpen] = useState(false);
  const [newsAndEventsNavsOpen, setNewsAndEventsNavsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-50 text-[#0a1d30] w-full z-10">
      <div className="container mx-auto px-4 flex text-center justify-between h-16">
        {/* Logo */}
        <div className="flex gap-2 font-bold items-center">
          <Link href="/">
            <p>
              <Image
                src={logo}
                alt="School Logo"
                width={50}
                height={50}
                className="h-12 w-12"
              />
            </p>
          </Link>
          <p className="text-xl sm:text-2xl lg:text-4xl">SANT RUPHAEL SCHOOL</p>
        </div>
        {/* Navigation Links for Desktop */}
        <div className="hidden lg:flex space-x-6 pt-4">
          <Link href="/">
            <p className="relative before:absolute before:left-0 before:bottom-0 hover:before:w-full before:h-1 before:bg-[#0a1d30] before:content-[''] hover:before:animate-underline transition-all duration-300">
              Home
            </p>
          </Link>

          <div
            className="relative items-center h-full"
            onMouseEnter={() => setAboutNavsOpen(true)}
            onMouseLeave={() => setAboutNavsOpen(false)}
          >
            <Link href="/about-us/what-makes-us-different">
              <p className="relative before:absolute before:left-0 before:bottom-0 hover:before:w-full before:h-1 before:bg-[#0a1d30] before:content-[''] hover:before:animate-underline transition-all duration-300">
                About our school
              </p>
            </Link>
            {aboutNavsOpen && (
              <div className="absolute left-0 top-full bg-gray-50 min-w-[200px] z-50">
                <AboutNavs />
              </div>
            )}
          </div>

          <Link href="/academics">
            <p className="relative before:absolute before:left-0 before:bottom-0 hover:before:w-full before:h-1 before:bg-[#0a1d30] before:content-[''] hover:before:animate-underline transition-all duration-300">
              Academics
            </p>
          </Link>

          <Link href="/great-students">
            <p className="relative before:absolute before:left-0 before:bottom-0 hover:before:w-full before:h-1 before:bg-[#0a1d30] before:content-[''] hover:before:animate-underline transition-all duration-300">
              Great Students
            </p>
          </Link>

          <Link href="/our-services">
            <p className="relative before:absolute before:left-0 before:bottom-0 hover:before:w-full before:h-1 before:bg-[#0a1d30] before:content-[''] hover:before:animate-underline transition-all duration-300">
              Services
            </p>
          </Link>

          <div
            className="relative items-center h-full"
            onMouseEnter={() => setNewsAndEventsNavsOpen(true)}
            onMouseLeave={() => setNewsAndEventsNavsOpen(false)}
          >
            <Link href="/news-and-events/news">
              <p className="relative before:absolute before:left-0 before:bottom-0 hover:before:w-full before:h-1 before:bg-[#0a1d30] before:content-[''] hover:before:animate-underline transition-all duration-300">
                News and Events
              </p>
            </Link>
            {newsAndEventsNavsOpen && (
              <div className="absolute left-0 top-full bg-gray-50 min-w-[200px] z-50">
                <NewsAndEventsNav />
              </div>
            )}
          </div>

          <Link href="/contact-us">
            <p className="relative before:absolute before:left-0 before:bottom-0 hover:before:w-full before:h-1 before:bg-[#0a1d30] before:content-[''] hover:before:animate-underline transition-all duration-300">
              Contact us
            </p>
          </Link>
        </div>

        {/* nav Menu for Mobile */}
        <div className="lg:hidden pt-4">
          <button
            onClick={toggleMenu}
            className="text-[#0a1d30] focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={closeMenu}>
              <p className="flex items-center justify-between hover:bg-[#0a1d30] hover:text-gray-50 px-4 py-1 transition-all duration-300 font-medium">
                Home
              </p>
            </Link>
            <Link href="/about-us/what-makes-us-different" onClick={closeMenu}>
              <p className="flex items-center justify-between hover:bg-[#0a1d30] hover:text-gray-50 px-4 py-1 transition-all duration-300 font-medium">
                About our school
              </p>
              <AboutNavs />
            </Link>
            <Link href="/academics" onClick={closeMenu}>
              <p className="flex items-center justify-between hover:bg-[#0a1d30] hover:text-gray-50 px-4 py-1 transition-all duration-300 font-medium">
                Academics
              </p>
            </Link>
            <Link href="/great-students" onClick={closeMenu}>
              <p className="flex items-center justify-between hover:bg-[#0a1d30] hover:text-gray-50 px-4 py-1 transition-all duration-300 font-medium">
                Great Students
              </p>
            </Link>
            <Link href="/our-services" onClick={closeMenu}>
              <p className="flex items-center justify-between hover:bg-[#0a1d30] hover:text-gray-50 px-4 py-1 transition-all duration-300 font-medium">
                Services
              </p>
            </Link>
            <Link href="/news-and-events/news" onClick={closeMenu}>
              <p className="flex items-center justify-between hover:bg-[#0a1d30] hover:text-gray-50 px-4 py-1 transition-all duration-300 font-medium">
                News and Events
              </p>
              <NewsAndEventsNav />
            </Link>
            <Link href="/contact-us" onClick={closeMenu}>
              <p className="flex items-center justify-between hover:bg-[#0a1d30] hover:text-gray-50 px-4 py-1 transition-all duration-300 font-medium">
                Contact us
              </p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
