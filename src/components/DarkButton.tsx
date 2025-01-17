"use client"
import { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface DarkButtonProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkButton: FC<DarkButtonProps> = ({ darkMode, toggleDarkMode }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const moonRef = useRef<HTMLElement | null>(null);
  const sunRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // GSAP animation for the button when clicked
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      });
    }

    // Animation for moon/sun icon toggle
    if (moonRef.current && sunRef.current) {
      gsap.to(moonRef.current, {
        opacity: darkMode ? 1 : 0,
        x: darkMode ? 0 : -20,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(sunRef.current, {
        opacity: darkMode ? 0 : 1,
        x: darkMode ? 20 : 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    // Apply background transition for darkMode
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        backgroundColor: darkMode ? "#1a233d" : "#f1f5f9", // Dark background or light background
        borderColor: darkMode ? "#4b5563" : "#d1d5db", // Dark border or light border
        duration: 0.3,
      });
    }
  }, [darkMode]); // Trigger the animation when darkMode changes

  return (
    <button
      ref={buttonRef}
      onClick={toggleDarkMode}
      className="rounded-full border-2 transition-all duration-300 ease-in-out"
    >
      <span ref={moonRef} className="text-yellow-500 text-x">
        🌙
      </span>
      <span ref={sunRef} className="text-gray-900 text-x">
        🌞
      </span>
    </button>
  );
};

export default DarkButton;
