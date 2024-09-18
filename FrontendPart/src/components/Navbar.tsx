import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Landmark } from "lucide-react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home page first
      window.location.href = `/#${sectionId}`;
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-white bg-opacity-80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className={`text-2xl font-bold transition-colors duration-300 flex items-center gap-2 ${
            isSticky ? "text-green-800" : "text-white"
          }`}
        >
          <Landmark
            className={`w-8 h-8 ${isSticky ? "text-green-800" : "text-white"}`}
          />
          <span>Indian Heritage Museum</span>
        </Link>
        <div className="space-x-4">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("museums")}
            className={`text-lg ${
              isSticky
                ? "text-green-800 hover:text-green-600"
                : "text-white hover:text-green-300"
            }`}
          >
            Museums
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("support")}
            className={`text-lg ${
              isSticky
                ? "text-green-800 hover:text-green-600"
                : "text-white hover:text-green-300"
            }`}
          >
            Support
          </Button>
          <Link to="/faq">
            <Button
              variant="ghost"
              className={`text-lg ${
                isSticky
                  ? "text-green-800 hover:text-green-600"
                  : "text-white hover:text-green-300"
              }`}
            >
              FAQ
            </Button>
          </Link>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("upcoming-events")}
            className={`text-lg ${
              isSticky
                ? "text-green-800 hover:text-green-600"
                : "text-white hover:text-green-300"
            }`}
          >
            Upcoming Events
          </Button>

          <Link to="/virtual">
            <Button
              variant="ghost"
              className={`text-lg ${
                isSticky
                  ? "text-green-800 hover:text-green-600"
                  : "text-white hover:text-green-300"
              }`}
            >
              360 Virtual Tour
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
