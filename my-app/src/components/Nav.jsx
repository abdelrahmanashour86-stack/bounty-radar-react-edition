import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"; 
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";

const Nav = ({ dark, theme, news }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Radar", link: "/radar" },
    { name: "OWASP", link: "/owasp" },
    { name: "Disclosures", link: "/disclosures" },
  ];

  return (
    <div className="w-full">
      <Navbar className="fixed top-0 left-0 right-0 z-50">
        
        {/* --- DESKTOP VIEW --- */}
        {/* FIX: Removed 'flex justify-between' so it doesn't override the built-in mobile hiding */}
        <NavBody className="bg-[rgba(255,255,255,0.77)] dark:bg-[#4d4847cc] rounded-4xl p-4 transition-colors duration-300">
          
          <div className="logo flex items-center">
            <img src="logo.png" className="w-30 h-10 object-contain" alt="Bounty Radar" />
          </div>
          
          <ul 
            className="flex items-center gap-2 mx-auto"
            onMouseLeave={() => setHoveredIndex(null)} 
          >
            {navItems.map((item, idx) => (
              <li key={`desktop-item-${idx}`} className="relative z-20">
                <Link 
                  to={item.link} 
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className="relative block px-4 py-2 text-[var(--color-text-color)] font-medium transition-colors duration-300"
                >
                  {hoveredIndex === idx && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 h-full w-full rounded-full bg-black/10 dark:bg-white/10"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-20">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 relative z-20">
            {news && <div className="hidden lg:block">{news}</div>}

            <button 
              onClick={theme} 
              className="bg-transparent font-bold text-[var(--color-text-color)] transition-all duration-300 rounded-full focus:outline-none p-2 hover:bg-black/10 dark:hover:bg-white/10"
              aria-label="Toggle Theme"
            >
              {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )} 
            </button>
          </div>
        </NavBody>

        {/* --- MOBILE VIEW --- */}
        <MobileNav className="bg-[rgba(255,255,255,0.77)] dark:bg-[#4d4847cc] rounded-3xl transition-colors duration-300 backdrop-blur-xl ">
          <MobileNavHeader>
            <div className="logo flex items-center">
              <img src="logo.png" className="w-30 h-10 object-contain" alt="Bounty Radar" />
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={theme} 
                className="bg-transparent font-bold text-[var(--color-text-color)] transition-all duration-300 rounded-full focus:outline-none p-2 hover:bg-black/10 dark:hover:bg-white/10"
              >
                {dark ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )} 
              </button>
              
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} className="bg-[rgba(255,255,255,0.95)] dark:bg-[#4d4847fa] backdrop-blur-2xl">
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                to={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-2 border-b border-black/5 dark:border-white/5 text-[var(--color-text-color)] font-medium tracking-wide transition-colors hover:text-[var(--color-important)]"
              >
                {item.name}
              </Link>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default Nav;