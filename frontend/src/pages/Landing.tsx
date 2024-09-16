import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const landingPage = () => {
  return (
    <div className="bg-green-800 min-h-screen p-10">
      <div className=" bg-white rounded-lg overflow-hidden">
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Indian Heritage Museum</h1>
          <nav>
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Visit</Button>
            <Button variant="ghost">Museum</Button>
            <Button variant="ghost">Study</Button>
            <Button variant="default">Contact</Button>
          </nav>
        </header>

        <main className="p-4">
          <h2 className="text-4xl font-bold mb-4">Team Smurfs Museum</h2>
          <img
            src="https://picsum.photos/800/400"
            alt="Museum entrance"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-sm mb-4">
            Featured & Certified Area of the Ministry of Tourism and Creative
            Economy
          </p>
          <div className="flex space-x-4 mb-8">
            <img src="https://picsum.photos/100/50" alt="Wonderful India" />
            <img src="https://picsum.photos/100/50" alt="Certified" />
            <img src="https://picsum.photos/100/50" alt="Singh Museum" />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Visitors</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Discover the beauty of museums and unforgettable experiences!
                </p>
                <Button variant="link">More details</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Opening Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Don't miss the opportunity to enjoy our services while we are
                  open.
                </p>
                <Button variant="link">More details</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tickets</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Enjoy an unforgettable experience at an affordable price! Book
                  your tickets early.
                </p>
                <Button variant="link">More details</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Study</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Take part in this study to contribute to positive change and
                  help improve community conditions.
                </p>
                <Button variant="link">More details</Button>
              </CardContent>
            </Card>
          </div>

          <section className="mb-8">
            <img
              src="https://picsum.photos/800/400"
              alt="Museum tour"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Scriptorium</h3>
            <p>
              The study of literary civilization and Javanese culture and the
              art of writing
            </p>
          </section>

          <blockquote className="text-center italic mb-8">
            "INDIAN HERITAGE MUSEUM brings together heirs with their historical
            and cultural heritage"
          </blockquote>

          <section className="mb-8">
            <img
              src="https://picsum.photos/800/400"
              alt="Museum tour"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">INDIAN HERITAGE MUSEUM</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              porro recusandae eligendi eveniet molestias cum error ex minus at?
              Veniam nulla vel esse possimus deserunt dicta, perferendis
              sapiente quos reiciendis, sunt, sed at omnis.
            </p>
          </section>

          <blockquote className="text-center italic mb-8">
            "Museums are treasure troves of art, history and culture."
          </blockquote>
        </main>

        <footer className="bg-gray-100 p-4">
          <div className="mb-4">
            <h4 className="font-bold">MUSEUM ULLEN SENTALU</h4>
            <p>Indian Heritage Museum,New Delhi, India</p>
          </div>
          <div>
            <h4 className="font-bold">ULLEN SENTALU SECRETARIAT</h4>
            <p>Inidan,Museum,New Delhi, India</p>
            <p>T: 0274 895058, 895057</p>
            <p>E: teamsmurfs@gmail.com, info@teamsmurfs.com</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default landingPage;
