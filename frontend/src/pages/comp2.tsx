import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Ticket,
  Search,
  Moon,
  Sun,
  Mountain,
  Users,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Component() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      setCanScrollLeft(carouselRef.current.scrollLeft > 0);
      setCanScrollRight(
        carouselRef.current.scrollLeft <
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth,
      );
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const topPicks = [
    { title: "Renaissance", category: "PAINTINGS", price: "£50" },
    { title: "Baroque", category: "SCULPTURES", price: "£75" },
    { title: "Impressionism", category: "EXHIBITS", price: "£60" },
    { title: "Modern Art", category: "PAINTINGS", price: "£80" },
    { title: "Ancient Egypt", category: "ARTIFACTS", price: "£65" },
    { title: "Photography", category: "EXHIBITS", price: "£55" },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <header className="p-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Ticket className="h-6 w-6" />
            <span className="text-xl font-bold">Tickets</span>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Our services</Button>
            <Button variant="ghost">Book now</Button>
            <Button variant="ghost">Help</Button>
          </div>
          <Input
            type="search"
            placeholder="Search"
            className="w-64 bg-gray-800 text-gray-100 placeholder-gray-400"
          />
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Museum statue"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
              <div className="p-8">
                <h1 className="text-4xl font-bold mb-4">
                  Discover art with us
                </h1>
                <p className="text-xl mb-6">Explore the world of culture!</p>
                <Button className="bg-red-600 hover:bg-red-700">Explore</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <Card className="bg-gray-800">
            <CardContent className="p-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Moon className="h-5 w-5" />
                  <span>English</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>09:00 AM - 05:00 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>2 adults</span>
                </div>
              </div>
              <Button variant="secondary">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Exhibition categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Modern Art", icon: Sun },
              { name: "Historical Exhibits", icon: Mountain },
              { name: "Interactive Displays", icon: Users },
              { name: "Guided Tours", icon: Users },
              { name: "Special Events", icon: Calendar },
              { name: "Sculptures", icon: Mountain },
            ].map((category, index) => (
              <Card
                key={index}
                className="bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  <category.icon className="h-12 w-12 mb-4" />
                  <span className="text-sm">{category.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card className="bg-gray-800">
            <CardContent className="p-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Visit Renaissance</h3>
                <p className="text-gray-400 mb-4">3 hours</p>
                <p className="text-xl font-bold">
                  $20 <span className="text-sm font-normal">/person</span>
                </p>
                <Button className="mt-4 bg-red-600 hover:bg-red-700">
                  Explore now
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((_, index) => (
                  <img
                    key={index}
                    src={`/placeholder.svg?height=100&width=100&text=Image${index + 1}`}
                    alt={`Renaissance exhibit ${index + 1}`}
                    className="w-24 h-24 object-cover rounded"
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Top picks this month</h2>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll right"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div
            className="overflow-x-auto scrollbar-hide"
            ref={carouselRef}
            onScroll={checkScrollButtons}
          >
            <div
              className="flex space-x-6"
              style={{ width: `${topPicks.length * 300}px` }}
            >
              {topPicks.map((pick, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 flex-shrink-0"
                  style={{ width: "280px" }}
                >
                  <img
                    src={`/placeholder.svg?height=200&width=300&text=Image${index + 1}`}
                    alt={pick.title}
                    className="w-full h-48 object-cover rounded-t"
                  />
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-400 mb-1">
                      {pick.category}
                    </p>
                    <h3 className="text-lg font-bold mb-2">{pick.title}</h3>
                    <p className="text-sm">From {pick.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold mb-2">MuseumBot</h3>
              <p className="text-sm">Enhancing your museum experience</p>
              <p className="text-sm">© 2023 MuseumBot</p>
            </div>
            <div className="text-sm">
              <p>FAQs</p>
              <p>Customer Support</p>
              <p>Terms of Use</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
