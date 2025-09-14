// components/NavBar.js
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4 container">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <div className="relative w-32 h-10">
          {/* Light mode logo */}
          <Image
            src="/assets/hft_prime_logo_lightmode.png"
            alt="HFT Prime Marketing Logo"
            fill
            className="object-contain block dark:hidden"
            priority
          />
          {/* Dark mode logo */}
          <Image
            src="/assets/hft_prime_logo_darkmode.png"
            alt="HFT Prime Marketing Logo"
            fill
            className="object-contain hidden dark:block"
            priority
          />
        </div>
      </div>

      {/* Right: Links (hidden on mobile) */}
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
      </div>
    </nav>
  );
}
