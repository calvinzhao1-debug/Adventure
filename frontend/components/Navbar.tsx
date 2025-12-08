"use client"; // Required because we use useState for the mobile menu

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Helper to close menu when a link is clicked (for mobile UX)
  const closeMenu = () => setIsExpanded(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 pb-6 lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Desktop + Top Bar Navigation */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" title="UNSW ADSOC" className="flex items-center gap-2">
              {/* You can replace this SVG with the actual ADSOC Image Logo later */}
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xs">
                DS
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                UNSW <span className="text-blue-500">ADSOC</span>
              </span>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON (Hamburger) */}
          <button
            type="button"
            className="inline-flex p-2 text-gray-300 transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {/* Menu open: "hidden", Menu closed: "block" */}
            <svg
              className={`${isExpanded ? "hidden" : "block"} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>

            {/* Menu open: "block", Menu closed: "hidden" */}
            <svg
              className={`${isExpanded ? "block" : "hidden"} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* DESKTOP LINKS (Hidden on mobile) */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link href="/events" className="text-base font-medium text-gray-300 transition-all duration-200 hover:text-blue-500">
              Events
            </Link>
            <Link href="/about" className="text-base font-medium text-gray-300 transition-all duration-200 hover:text-blue-500">
              About
            </Link>
            <Link href="/team" className="text-base font-medium text-gray-300 transition-all duration-200 hover:text-blue-500">
              Team
            </Link>
            <Link href="/membership" className="text-base font-medium text-gray-300 transition-all duration-200 hover:text-blue-500">
              Membership
            </Link>
          </div>

          {/* DESKTOP CTA BUTTON */}
          <Link
            href="/subscribe"
            className="hidden items-center justify-center px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            Subscribe
          </Link>
        </nav>

        {/* MOBILE MENU (Visible only when expanded is true) */}
        {isExpanded && (
          <nav className="pt-4 pb-6 bg-gray-900 border border-gray-800 rounded-md shadow-md lg:hidden mt-2">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <Link
                  href="/events"
                  onClick={closeMenu}
                  className="inline-flex py-2 text-base font-medium text-gray-300 transition-all duration-200 hover:text-blue-500"
                >
                  Events
                </Link>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="inline-flex py-2 text-base font-medium text-gray-300 transition-all duration-200 hover:text-blue-500"
                >
                  About
                </Link>
                <Link
                  href="/team"
                  onClick={closeMenu}
                  className="inline-flex py-2 text-base font-medium text-gray-300 transition-all duration-200 hover:text-blue-500"
                >
                  Team
                </Link>
                <Link
                  href="/membership"
                  onClick={closeMenu}
                  className="inline-flex py-2 text-base font-medium text-gray-300 transition-all duration-200 hover:text-blue-500"
                >
                  Membership
                </Link>
              </div>
            </div>

            <div className="px-6 mt-6">
              <Link
                href="/subscribe"
                onClick={closeMenu}
                className="inline-flex justify-center w-full px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                Subscribe Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;