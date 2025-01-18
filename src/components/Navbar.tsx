"use client"

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Navbar() {
  const headerRef = useRef<HTMLElement | null>(null); // Define type for headerRef
  const navLinksRef = useRef<(HTMLLIElement | null)[]>([]); // Define type for navLinksRef
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
  const menuIconRef = useRef<HTMLButtonElement | null>(null); // Reference for the menu icon
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]); // Reference for mobile menu items

  
  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    }

    if (navLinksRef.current) {
      gsap.fromTo(
        navLinksRef.current.filter((el) => el !== null),
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        }
      );
    }
  }, []); // Ensure the animation runs only once on mount

  useEffect(() => {
    // Animate menu items when the menu is opened or closed
    if (isMenuOpen) {
      gsap.fromTo(
        menuItemsRef.current.filter((el) => el !== null),
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 }
      );
    } else {
      gsap.to(menuItemsRef.current.filter((el) => el !== null), {
        opacity: 0,
        x: 20,
        duration: 0.3,
        ease: "power2.in",
        stagger: 0.1,
      });
    }
  }, [isMenuOpen]); // Trigger animation when `isMenuOpen` changes

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility

    // GSAP animation for the hamburger menu icon
    if (menuIconRef.current) {
      gsap.to(menuIconRef.current, {
        rotation: isMenuOpen ? 0 : 180, // Rotate icon when menu is toggled
        scale: isMenuOpen ? 1 : 1.2, // Slight scale up when opening
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
    if (menuIconRef.current) {
      gsap.to(menuIconRef.current, {
        rotation: 0, // Reset icon rotation when closing
        scale: 1, // Reset scale to normal size
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <header className={`bg-white dark:bg-[#1a233d] shadow-md text-gray-800 dark:text-white`} ref={headerRef}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
       <Link href="/" className="text-yellow-400">Studio Sonterra</Link>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-4">
            {["Products", "About", "Contact"].map((link, index) => (
              <li key={link} ref={(el) => { navLinksRef.current[index] = el; }}>
                <a href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 dark:hover:text-gray-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop: Dark Mode and Login Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-gray-600 hover:text-gray-900 dark:hover:text-gray-300">
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button (Visible only on small screens) */}
      <div className="md:hidden flex items-center gap-4">
        <button onClick={toggleMenu} className="text-gray-600 dark:text-white" ref={menuIconRef}>
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu (Visible when menu is open) */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-0 left-0 w-full bg-white dark:bg-[#1a233d] shadow-md py-4`}>
        <div className="flex justify-end px-4">
          <button onClick={closeMenu} className="text-gray-600 dark:text-white text-2xl">
            X
          </button>
        </div>
        <ul className="flex flex-col gap-4 items-center">
          {["Products", "About", "Contact"].map((link, index) => (
            <li key={link} ref={(el) => { menuItemsRef.current[index] = el; }}>
              <a href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 dark:hover:text-gray-300" onClick={closeMenu}>
                {link}
              </a>
            </li>
          ))}
          <Link href="/login" className="text-gray-600 hover:text-gray-900 dark:hover:text-gray-300" onClick={closeMenu}>
            Login
          </Link>
        </ul>
      </div>
    </header>
  );
}
