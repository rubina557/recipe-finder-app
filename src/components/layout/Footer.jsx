import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import logoImage from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-4">
        {/* Main Footer Content  */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Branding */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={logoImage}
                alt="Plateful Recipe Finder logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-slate-800 tracking-tight">
                Plateful Recipe Finder
              </span>
            </Link>
            <p className="text-slate-600 max-w-sm text-sm">
              Discover delicious, simple, and healthy recipes for every
              occasion. Your journey to better eating starts here.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:justify-self-center">
            <h3 className="font-semibold text-slate-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/recipes"
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="md:justify-self-end">
            <h3 className="font-semibold text-slate-800 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-slate-500 hover:text-primary transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-slate-500 hover:text-primary transition-colors"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="#"
                aria-label="Tiktok"
                className="text-slate-500 hover:text-primary transition-colors"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Plateful Recipe Finder. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
