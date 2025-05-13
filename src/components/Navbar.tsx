
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "px-4 py-2 font-medium transition-colors relative",
      isActive
        ? "text-church-accent after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-church-accent"
        : "hover:text-church-accent"
    );

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="text-2xl font-serif font-bold text-church-primary">
            Bugema <span className="text-church-accent">Church</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/sermons" className={navLinkClass}>Sermons</NavLink>
          <NavLink to="/events" className={navLinkClass}>Events</NavLink>
          <NavLink to="/ministries" className={navLinkClass}>Ministries</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/donate" className="ml-4 bg-church-accent text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">
            Donate
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-church-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white p-4 shadow-lg animate-fade-in">
          <NavLink
            to="/"
            className="block py-2 text-church-primary hover:text-church-accent"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/sermons"
            className="block py-2 text-church-primary hover:text-church-accent"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sermons
          </NavLink>
          <NavLink
            to="/events"
            className="block py-2 text-church-primary hover:text-church-accent"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Events
          </NavLink>
          <NavLink
            to="/ministries"
            className="block py-2 text-church-primary hover:text-church-accent"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ministries
          </NavLink>
          <NavLink
            to="/about"
            className="block py-2 text-church-primary hover:text-church-accent"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/donate"
            className="block py-2 mt-2 bg-church-accent text-white px-4 rounded-md hover:bg-opacity-90 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Donate
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
