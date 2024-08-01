"use client"; // This line ensures that the component is rendered on the client side

import { useState } from "react";
import Link from "next/link";
import Logo from "../../public/images/Logo.svg";
import table from "../../public/images/tabler_menu.svg";
import Image from "next/image";
import Button from "./Button";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-primary py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0 ml-10">
            <Image src={Logo} alt="My SVG" width={122} height={42} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12 ">
            <Link className="text-white hover:text-blue-500" href="/">
              Home
            </Link>
            <Link className="text-white hover:text-blue-500" href="/about">
              How it works
            </Link>
            <Link className="text-white hover:text-blue-500" href="/services">
              Features
            </Link>
            <Link className="text-white hover:text-blue-500" href="/contact">
              Our Team
            </Link>
            <Link className="text-white hover:text-blue-500" href="/contact">
              contact us
            </Link>
            <Button
              variant="tertiary"
              size="big"
              // onClick={() => alert("Tertiary Big Clicked")}
            >
              Download
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden mr-5">
            <button onClick={toggleMobileMenu}>
              <Image src={table} alt="My SVG" width={32} height={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mx-[115px] mb-10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center space-y-8 h-auto w-40">
            <Link className="text-white hover:text-blue-500" href="/">
              Home
            </Link>
            <Link className="text-white hover:text-blue-500" href="/about">
              How it works
            </Link>
            <Link className="text-white hover:text-blue-500" href="/services">
              Features
            </Link>
            <Link className="text-white hover:text-blue-500" href="/contact">
              Our Team
            </Link>
            <Link className="text-white hover:text-blue-500" href="/contact">
              contact us
            </Link>
            <Button
              variant="tertiary"
              size="big"
              // onClick={() => alert("Tertiary Big Clicked")}
            >
              Download
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
