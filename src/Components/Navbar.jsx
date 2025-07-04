import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


const navLinks = [
  { href: "#skills", label: 'Skills' },
  { href: "#experience", label: 'Experience' },
  { href: "#projects", label: 'Projects' },
  { href: "#contact", label: 'Contact' },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 w-full bg-gray-200/85 backdrop-blur supports-[backdrop-filter]:bg-gray-200/25 px-4 lg:px-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 relative">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-extrabold text-center bg-gradient-to-l from-red-500 via-green-500 to-yellow-400
    bg-[length:300%_300%] bg-clip-text text-transparent 
    [animation:gradientMove_4s_ease-in-out_infinite] 
    drop-shadow-[0_0_20px_rgba(255,0,255,0.6)]"
            >
              Altrin Kingson
            </h2>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-lg font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-black text-gray-600 hover:bg-amber-300/85 px-3 py-1 rounded-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md border-t border-gray-300">
            <div className="flex flex-col items-center space-y-2 py-4 font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                  className="transition-colors hover:text-black text-gray-600 hover:bg-amber-300/85 px-4 py-2 rounded-full"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
