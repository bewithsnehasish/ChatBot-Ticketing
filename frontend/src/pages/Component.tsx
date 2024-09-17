import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TMSLandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 pr-8">
          <img
            src="https://picsum.photos/600/400"
            alt="TMS Interface"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">What is TMS?</h1>
          <p className="mb-4">
            TMS is a revolutionary Chatbot-Based Museum Ticketing System that
            simplifies the ticketing process for museums and their visitors.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <div>
                <strong>Chatbot Ticketing</strong>
                <p>
                  An AI-driven chatbot that handles ticket bookings and
                  inquiries seamlessly.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <div>
                <strong>Integrated Payment Gateway</strong>
                <p>
                  A secure payment system that ensures hassle-free transactions.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <div>
                <strong>Data Insights</strong>
                <p>
                  Analytics tools that provide valuable insights for smarter
                  decision-making.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 pr-8">
          <h2 className="text-3xl font-bold mb-4">Why Choose TMS?</h2>
          <p className="mb-4">
            TMS is designed to enhance the visitor experience by addressing
            common ticketing challenges faced by museums.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <div>
                <strong>Eliminate Long Queues</strong>
                <p>Reduce waiting times and improve visitor satisfaction.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <div>
                <strong>Cost-Effective Solution</strong>
                <p>Lower operational costs with automated ticketing.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <div>
                <strong>Multilingual Support</strong>
                <p>
                  Cater to a diverse audience with support for multiple
                  languages.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://picsum.photos/500/400"
            alt="TMS in action"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 pr-8">
          <img
            src="https://picsum.photos/600/400"
            alt="TMS devices"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">How to Use TMS?</h2>
          <p className="mb-4">
            Follow these simple steps to revolutionize your museum ticketing.
          </p>
          <ol className="space-y-2 list-decimal list-inside">
            <li>
              <strong>Sign Up</strong>
              <p>Create an account to access TMS features.</p>
            </li>
            <li>
              <strong>Integrate with Your Museum</strong>
              <p>Connect TMS with your existing systems.</p>
            </li>
            <li>
              <strong>Launch the Chatbot</strong>
              <p>Deploy the chatbot for ticketing and visitor inquiries.</p>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default TMSLandingPage;
