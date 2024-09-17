import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "../styles/landing.css";

const LandingPage = () => {
  return (
    <div
      id="test"
      className="bg-gradient-to-b from-gray-700 to-gray-300 min-h-screen"
    >
      <div id="test" className="relative h-screen">
        <img
          src="https://picsum.photos/1200/800"
          alt="Scenic train journey through mountains"
          id="test"
          className="w-full h-full object-cover"
        />
        <div
          id="test"
          className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"
        >
          <header id="test" className="container mx-auto px-4 py-6">
            <div id="test" className="flex justify-between items-center">
              <h1 id="test" className="text-3xl font-bold text-white">
                INDIAN HERITAGE MUSEUM
              </h1>
              <nav id="test" className="flex space-x-2">
                {["Home", "Visit", "Museum", "Study", "Contact"].map((item) => (
                  <Button
                    key={item}
                    variant={item === "Study" ? "default" : "ghost"}
                    className={`rounded-full text-white ${
                      item === "Study"
                        ? "bg-green-700 hover:bg-green-600"
                        : "hover:bg-white/20"
                    }`}
                  >
                    {item}
                  </Button>
                ))}
              </nav>
            </div>
          </header>

          <div
            id="test"
            className="absolute inset-0 flex items-center justify-center"
          >
            <h2 id="test" className="text-6xl font-bold text-white text-center">
              Discover the rich heritage of India
            </h2>
          </div>
        </div>
      </div>

      <main id="test" className="container mx-auto px-4 py-8">
        <section id="test" className="mb-16 text-center">
          <h2 id="test" className="text-5xl font-bold text-white mb-4">
            Discover the Rich Heritage of India
          </h2>
          <p id="test" className="text-xl text-green-100 mb-8">
            Immerse yourself in the cultural beauty of India at India Museum
          </p>
          <Button
            size="lg"
            id="test"
            className="rounded-full bg-white text-green-800 hover:bg-green-100"
          >
            Plan Your Visit
          </Button>
        </section>

        <section
          id="test"
          className="mb-16 bg-white rounded-lg overflow-hidden shadow-xl"
        >
          <div id="test" className="relative">
            <img
              src="https://picsum.photos/1200/400"
              alt="Upcoming Event: Indian Royal Gala"
              id="test"
              className="w-full h-96 object-cover"
            />
            <div
              id="test"
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
              <div id="test" className="text-white text-center p-8">
                <h3 id="test" className="text-4xl font-bold mb-4">
                  Upcoming Event: Royal Randwa Of India
                </h3>
                <p id="test" className="text-xl mb-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Error doloremque vero, sequi quam repellat dignissimos maxime
                  laborum cum labore. Harum expedita obcaecati exercitationem?
                </p>
                <Button
                  size="lg"
                  id="test"
                  className="rounded-full bg-white text-green-800 hover:bg-green-100"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="test"
          className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Guided Tours",
              description: "Discover hidden stories with our expert guides",
            },
            {
              title: "Cultural Workshops",
              description: "Immerse yourself in traditional Indian arts",
            },
            {
              title: "Virtual Experiences",
              description: "Explore the museum from anywhere in the world",
            },
            {
              title: "Educational Programs",
              description: "Engaging activities for schools and families",
            },
            {
              title: "Conservation Efforts",
              description:
                "Learn about our work in preserving cultural heritage",
            },
            {
              title: "Special Exhibitions",
              description: "Rotating displays of unique artifacts and artworks",
            },
          ].map((item, index) => (
            <Card
              key={index}
              id="test"
              className="bg-white bg-opacity-90 hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
                <Button variant="link" id="test" className="mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        <section id="test" className="mb-16">
          <h3 id="test" className="text-3xl font-bold text-white mb-8">
            Our Museums
          </h3>
          <Carousel id="test" className="w-full">
            <CarouselContent>
              {[
                {
                  name: "Royal Artifacts Gallery",
                  image: "https://picsum.photos/800/400?random=1",
                },
                {
                  name: "Traditional Arts Museum",
                  image: "https://picsum.photos/800/400?random=2",
                },
                {
                  name: "Indian Cultural Center",
                  image: "https://picsum.photos/800/400?random=3",
                },
                {
                  name: "Historical Archives",
                  image: "https://picsum.photos/800/400?random=4",
                },
              ].map((museum, index) => (
                <CarouselItem key={index}>
                  <div id="test" className="relative">
                    <img
                      src={museum.image}
                      alt={museum.name}
                      id="test"
                      className="w-full h-80 object-cover rounded-lg"
                    />
                    <div
                      id="test"
                      className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                    >
                      <h4 id="test" className="text-3xl font-bold text-white">
                        {museum.name}
                      </h4>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section id="test" className="mb-16">
          <h3 id="test" className="text-3xl font-bold text-white mb-8">
            Support Our Mission
          </h3>
          <div id="test" className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div
              id="test"
              className="relative rounded-lg overflow-hidden transform md:translate-y-8"
            >
              <img
                src="https://picsum.photos/600/400?random=5"
                alt="Donate"
                id="test"
                className="w-full h-80 object-cover"
              />
              <div
                id="test"
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              >
                <div id="test" className="text-white text-center p-8">
                  <h4 id="test" className="text-2xl font-bold mb-4">
                    Donate
                  </h4>
                  <p id="test" className="mb-4">
                    Help us preserve and share Indian cultural heritage for
                    future generations.
                  </p>
                  <Button id="test" className="rounded-full">
                    Make a Donation
                  </Button>
                </div>
              </div>
            </div>
            <div
              id="test"
              className="relative rounded-lg overflow-hidden transform md:-translate-y-8"
            >
              <img
                src="https://picsum.photos/600/400?random=6"
                alt="Volunteer"
                id="test"
                className="w-full h-80 object-cover"
              />
              <div
                id="test"
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              >
                <div id="test" className="text-white text-center p-8">
                  <h4 id="test" className="text-2xl font-bold mb-4">
                    Volunteer
                  </h4>
                  <p id="test" className="mb-4">
                    Join our team and contribute your skills to support our
                    cultural mission.
                  </p>
                  <Button id="test" className="rounded-full">
                    Get Involved
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="test" className="mb-16 bg-opacity-90 rounded-lg p-8">
          <h3 id="test" className="text-3xl font-bold mb-8">
            Upcoming Events
          </h3>
          <div id="test" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Batik Workshop",
                date: "June 15, 2024",
                image: "https://picsum.photos/400/200?random=7",
              },
              {
                title: "Gamelan Performance",
                date: "June 22, 2024",
                image: "https://picsum.photos/400/200?random=8",
              },
              {
                title: "Wayang Kulit Show",
                date: "July 1, 2024",
                image: "https://picsum.photos/400/200?random=9",
              },
            ].map((event, index) => (
              <div
                key={index}
                id="test"
                className="bg-green-50 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  id="test"
                  className="w-full h-48 object-cover"
                />
                <div id="test" className="p-4">
                  <h4 id="test" className="font-bold mb-2">
                    {event.title}
                  </h4>
                  <p id="test" className="text-sm text-gray-600 mb-4">
                    {event.date}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    id="test"
                    className="rounded-full"
                  >
                    Register
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="test" className="mb-16 text-center text-black">
          <h3 id="test" className="text-3xl font-bold text-black mb-4">
            Become a Member
          </h3>
          <p id="test" className="text-xl text-black mb-8">
            Enjoy exclusive access, special events, and support the preservation
            of Indian culture.
          </p>
          <Button
            size="lg"
            id="test"
            className="rounded-full bg-white text-green-800 hover:bg-green-100"
          >
            Join Now
          </Button>
        </section>
      </main>

      <footer id="test" className="bg-gray-800 text-white py-8">
        <div
          id="test"
          className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div>
            <h4 id="test" className="font-bold text-lg mb-4">
              INDIAN HERITAGE MUSEUM
            </h4>
            <p>Indian Heritage Museum,New Delhi,India,736101</p>
            <p>Open Tuesday - Sunday, 8:30 AM - 4:00 PM</p>
          </div>
          <div>
            <h4 id="test" className="font-bold text-lg mb-4">
              Quick Links
            </h4>
            <ul>
              <li>
                <a href="#" id="test" className="hover:text-green-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" id="test" className="hover:text-green-300">
                  Exhibitions
                </a>
              </li>
              <li>
                <a href="#" id="test" className="hover:text-green-300">
                  Education
                </a>
              </li>
              <li>
                <a href="#" id="test" className="hover:text-green-300">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 id="test" className="font-bold text-lg mb-4">
              Connect With Us
            </h4>
            <div id="test" className="flex space-x-4">
              {["Facebook", "Instagram", "Twitter", "YouTube"].map((social) => (
                <Button
                  key={social}
                  variant="ghost"
                  size="sm"
                  id="test"
                  className="text-white hover:text-green-300"
                >
                  {social}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <div id="test" className="fixed bottom-4 right-4">
        <Button
          size="lg"
          id="test"
          className="rounded-full bg-white text-green-800 hover:bg-green-100 shadow-lg"
        >
          <MessageCircle id="test" className="mr-2" />
          Chat with Us
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
