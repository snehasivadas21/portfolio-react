import React, { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <a href="/" className="logo">
            <img src="sneha/images/logo.svg" width={40} height={40} alt="sneha" />
          </a>
        </div>

        {/* Center: Navbar (visible in desktop only) */}
        <div className="hidden md:block">
          <Navbar navOpen={true} />
        </div>

        {/* Right: Hamburger (mobile only) + Contact Me (desktop only) */}
        <div className="flex items-center gap-4">
          {/* Hamburger: Only on mobile */}
          <button
            className="menu-btn md:hidden p-2 text-white"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>

          {/* Contact: Only on desktop */}
          <div className="hidden md:block">
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Mobile navbar dropdown */}
      <div className="md:hidden">
        <Navbar navOpen={navOpen} />
      </div>
    </header>
  );
};

export default Header;
