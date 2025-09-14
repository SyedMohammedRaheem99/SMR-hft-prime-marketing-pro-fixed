// components/NavBar.js
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="flex items-center justify-between py-4 container">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <div className="relative w-32 h-10">
          {mounted && (
            <>
              {theme === "dark" ? (
                <Image
                  src="/assets/hft_prime_logo_darkmode.png"
                  alt="HFT Prime Marketing Logo Dark"
                  fill
                  className="object-contain"
                  priority
                />
              ) : (
                <Image
                  src="/assets/hft_prime_logo_lightmode.png"
                  alt="HFT Prime Marketing Logo Light"
                  fill
                  className="object-contain"
                  priority
                />
              )}
            </>
          )}
        </div>
      </div>

      {/* Right: Links */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#work" className="hover:text-indigo-600">
          Work
        </a>
        <a href="#about" className="hover:text-indigo-600">
          About
        </a>
        <a href="#contact" className="hover:text-indigo-600">
          Contact
        </a>
        {/* Dark mode toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-2 py-1 border rounded text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
