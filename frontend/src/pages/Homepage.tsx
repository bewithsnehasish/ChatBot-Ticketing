import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold mr-2">🎟️</span>
          <span className="text-xl">Tickets</span>
        </div>
        <nav>
          <Button variant="ghost" className="mx-2">
            Home
          </Button>
          <Button variant="ghost" className="mx-2">
            Our services
          </Button>
          <Button variant="ghost" className="mx-2">
            Book now
          </Button>
          <Button variant="ghost" className="mx-2">
            Help
          </Button>
        </nav>
        <Input type="search" placeholder="Search" className="w-64" />
      </header>

      <main className="container mx-auto mt-8">
        <section className="mb-12">
          <Card className="bg-gray-800">
            <CardContent className="flex p-6">
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4">
                  Discover art with us
                </h1>
                <p className="mb-4">Explore the world of culture!</p>
                <Button>Explore</Button>
              </div>
              <div className="flex-1">
                <img
                  src="https://picsum.photos/600/400"
                  alt="Art discovery"
                  className="rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Exhibition categories</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              "Modern Art",
              "Historical Exhibits",
              "Interactive Displays",
              "Guided Tours",
              "Special Events",
              "Sculptures",
            ].map((category) => (
              <Card key={category} className="bg-gray-800">
                <CardContent className="p-4">
                  <img
                    src="https://picsum.photos/200/200"
                    alt={category}
                    className="w-16 h-16 mb-2 rounded-full"
                  />
                  <h3 className="text-lg font-semibold">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card className="bg-gray-800">
            <CardContent className="p-6 flex">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Visit Renaissance</h2>
                <p>3 hours at $20 /person</p>
                <Button className="mt-4">Explore now</Button>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-2">
                <img
                  src="https://picsum.photos/300/200"
                  alt="Renaissance art 1"
                  className="rounded-lg"
                />
                <img
                  src="https://picsum.photos/300/200"
                  alt="Renaissance art 2"
                  className="rounded-lg"
                />
                <img
                  src="https://picsum.photos/300/200"
                  alt="Renaissance art 3"
                  className="rounded-lg"
                />
                <img
                  src="https://picsum.photos/300/200"
                  alt="Renaissance art 4"
                  className="rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Top picks this month</h2>
          <div className="grid grid-cols-3 gap-4">
            {["Renaissance", "Baroque", "Impressionism"].map((style) => (
              <Card key={style} className="bg-gray-800">
                <img
                  src="https://picsum.photos/400/300"
                  alt={style}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{style}</h3>
                  <p>from €50</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-12 p-4 bg-gray-800 text-center">
        <p>© 2024 ArtDiscovery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
