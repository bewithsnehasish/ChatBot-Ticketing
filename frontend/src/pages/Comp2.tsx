import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RenaissanceVisitSection = () => {
  return (
    <div className="bg-gray-900 text-white p-6">
      <Card className="bg-gray-800 mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-4 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">Visit Renaissance</h2>
              <p className="text-gray-400 mb-2">3 hours</p>
              <p className="text-2xl font-bold mb-4">
                at <span className="text-3xl">$20</span> /person
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Explore now
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full md:w-1/2">
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
                alt="Renaissance building"
                className="rounded-lg"
              />
              <div className="relative">
                <img
                  src="https://picsum.photos/300/200"
                  alt="Renaissance sculpture"
                  className="rounded-lg"
                />
                <span className="absolute top-2 right-2 bg-white text-black text-xs font-bold px-2 py-1 rounded">
                  SPECIAL
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h3 className="text-2xl font-bold mb-4">Top picks this month</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Renaissance",
              category: "PAINTINGS",
              price: "€50",
              image: "https://picsum.photos/400/300",
            },
            {
              title: "Baroque",
              category: "SCULPTURES",
              price: "€75",
              image: "https://picsum.photos/400/300",
            },
            {
              title: "Impressionism",
              category: "EXHIBITS",
              price: "€60",
              image: "https://picsum.photos/400/300",
            },
          ].map((item, index) => (
            <Card key={index} className="bg-gray-800 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <p className="text-xs text-gray-400 mb-1">{item.category}</p>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm">from {item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenaissanceVisitSection;
