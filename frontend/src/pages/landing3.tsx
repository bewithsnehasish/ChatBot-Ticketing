import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Laptop,
  Users,
  BarChart3,
  Accessibility,
  Camera,
  ShoppingCart,
  Building2,
  Smartphone,
  Coffee,
} from "lucide-react";

export default function TMSLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Building2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">TMS</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-sm font-medium">
            Pricing
          </a>
          <a href="#" className="text-sm font-medium">
            Blog
          </a>
        </nav>
        <Button variant="outline">Sign In</Button>
      </header>

      <main className="flex-grow">
        <section className="text-center py-20 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Effortless Museum Visits with TMS
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your museum experience with our innovative Chatbot
            Ticketing System, designed to eliminate delays and enhance visitor
            satisfaction.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </section>

        <section className="py-20 px-4 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What is TMS?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-32 h-32 text-primary" />
                </div>
              </div>
              <div>
                <p className="text-lg mb-4">
                  TMS is a revolutionary Chatbot-Based Museum Ticketing System
                  that simplifies the ticketing process for museums and their
                  visitors.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Laptop className="mr-2 h-5 w-5 text-primary" />
                    <span>Chatbot Ticketing</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    <span>Integrated Payment Gateway</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                    <span>Data Insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Key Features of TMS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { icon: Laptop, title: "Improved Customer Service" },
                { icon: Users, title: "Efficient Handling of High Volumes" },
                { icon: BarChart3, title: "Data Collection and Analysis" },
                { icon: Accessibility, title: "Accessibility" },
                { icon: Camera, title: "Reduced Human Error" },
                {
                  icon: ShoppingCart,
                  title: "Enhanced Marketing and Promotion",
                },
              ].map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold">{feature.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Users Say About TMS
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Thompson",
                  role: "Museum Director",
                  comment:
                    "TMS has transformed our ticketing process. Our visitors love it!",
                },
                {
                  name: "John Smith",
                  role: "Visitor",
                  comment:
                    "No more long lines! The chatbot made booking so easy.",
                },
                {
                  name: "Emily Johnson",
                  role: "Marketing Manager",
                  comment:
                    "The data insights have helped us improve our marketing strategies.",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <Avatar className="mx-auto mb-4">
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-center">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      {testimonial.role}
                    </p>
                    <p className="text-center italic">
                      "{testimonial.comment}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions About TMS
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How does the chatbot work?",
                  answer:
                    "The chatbot uses AI to handle ticket bookings and inquiries seamlessly.",
                },
                {
                  question: "Is TMS secure?",
                  answer:
                    "Yes, TMS uses industry-standard encryption to protect all user data and transactions.",
                },
                {
                  question: "Can TMS handle large crowds?",
                  answer:
                    "TMS is designed to efficiently manage high volumes during peak times.",
                },
                {
                  question: "What languages does the chatbot support?",
                  answer:
                    "The chatbot supports multiple languages to cater to a diverse audience.",
                },
                {
                  question: "How can I integrate TMS with my existing systems?",
                  answer:
                    "TMS offers easy integration options with most museum management systems.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="text-center py-20 px-4 bg-blue-300 text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Revolutionize Your Museum Visits?
          </h2>
          <p className="text-xl mb-8">
            Join us today and experience the future of museum ticketing.
          </p>
          <Button size="lg" variant="secondary">
            Get Started
          </Button>
        </section>
      </main>

      <footer className="border-t py-8 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-2">TMS</h3>
            <p className="text-sm text-muted-foreground">
              TMS offers a cutting-edge Chatbot-Based Museum Ticketing System
              that enhances visitor experiences by eliminating long queues and
              manual booking errors.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Products</h3>
            <ul className="text-sm space-y-1">
              <li>Chatbot Ticketing</li>
              <li>Analytics Tools</li>
              <li>Visitor Engagement</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="text-sm space-y-1">
              <li>Blog</li>
              <li>Case Studies</li>
              <li>Webinars</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="text-sm space-y-1">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © 2024 • TMS All rights reserved.
        </div>
      </footer>
    </div>
  );
}

