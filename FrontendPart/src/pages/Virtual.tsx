import { useState, useEffect } from "react";
import { Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-30 bg-white`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Landmark className={`h-8 w-8 text-green-800 `} />
          <span className={`ml-2 text-xl font-bold text-green-800 `}>
            Indian Heritage Museum
          </span>
        </div>
        <div className="hidden md:flex space-x-4">
          <h1
            className={`text-lg font-bold 
                  text-green-800 hover:text-green-600 "
              }`}
          >
            360 Virtual Reality
          </h1>
        </div>
      </div>
    </nav>
  );
};

const Virtual = () => {
  return (
    <div className="relative h-screen w-full">
      <Navbar />
      <iframe
        src="https://momento360.com/e/u/192c257e89df4d5291f3558499cacbe9?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true" // Update this to the correct HTML file path
        className="absolute top-0 left-0 w-full h-full border-0"
        title="Virtual Reality Content" // Added title for accessibility
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Virtual;
