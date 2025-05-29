"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "/app/globals.css";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const offset = section.offsetTop - 160;
          const height = section.offsetHeight;
          if (scrollY >= offset && scrollY < offset + height) {
            setActive(link.href);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active link on click
  const handleClick = (href) => {
    setActive(href);
    setMenuOpen(false); // Close menu on mobile after click
  };

  return (
    <nav className="h-24 w-full background-first fixed top-0 left-0 z-50">
      <div className="flex flex-wrap h-24 w-full px-7 md:px-10 lg:pl-20 py-5 items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            width={40}
            height={40}
            className="h-10 items-center pr-3 mb-1"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap dark:text-white">
            My Portfolio
          </span>
        </a>

        {/* Hamburger Button */}
        <button
          className="inline-flex items-center p-2 ml-3 text-2xl  text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-8 h-8" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Nav Links */}
        <div
  className={`${
    menuOpen ? "block" : "hidden"
  } w-full md:block md:w-auto transition-all duration-200 md:ml-auto`}
  id="navbar-default"
>
  <ul className="font-medium flex flex-col gap-4  p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 background-first md:bg-transparent  md:items-center">
    {navLinks.map((link) => (
      <li className="group" key={link.href}>
        <a
          href={link.href}
          onClick={() => handleClick(link.href)}
          className={`block py-2 px-3 font-bold text-2xl rounded-sm md:bg-transparent md:p-0 dark:text-white green-hover ${
            active === link.href ? "active green" : "text-white"
          }`}
          aria-current={active === link.href ? "page" : undefined}
        >
          {link.label}
        </a>
      </li>
    ))}
  </ul>
</div>
      </div>
    </nav>
  );
};

export default Navbar;