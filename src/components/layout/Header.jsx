// src/components/layout/Header.jsx

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logoImage from "../../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      {/* Container for the main navigation bar */}
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <img
            src={logoImage}
            alt="Plateful Recipe Finder logo"
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-gray-800 tracking-tight">
            Plateful Recipe Finder
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary" : "hover:text-primary"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-primary" : "hover:text-primary"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-primary"
                : "hover:text-primary"
            }
          >
            Recipes
          </NavLink>
        </div>

        {/* Desktop Action Button */}
        <div className="hidden md:block">
          <Link to="/recipes">
            <button className="bg-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-primary-focus transition-all duration-300 transform hover:scale-105">
              Browse recipes
            </button>
          </Link>
        </div>

        {/* --- MOBILE MENU FUNCTIONALITY --- */}
        {/* Mobile Menu Button  */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 text-3xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* The Mobile Dropdown Menu*/}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-start space-y-2 px-4 pt-2 pb-4">
              <NavLink
                to="/"
                onClick={closeMenu}
                className="block w-full text-left p-2 rounded-md text-gray-700 hover:bg-neutral hover:text-primary"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className="block w-full text-left p-2 rounded-md text-gray-700 hover:bg-neutral hover:text-primary"
              >
                About
              </NavLink>
              <NavLink
                to="/recipes"
                onClick={closeMenu}
                className="block w-full text-left p-2 rounded-md text-gray-700 hover:bg-neutral hover:text-primary"
              >
                Recipes
              </NavLink>
              <Link to="/recipes" onClick={closeMenu} className="w-full mt-2">
                <button className="w-full bg-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-primary-focus transition-colors">
                  Browse Recipes
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
