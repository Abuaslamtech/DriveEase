import React from "react";
import { Car, Shield, Clock, Award, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mb-10 text-white">
          <h1 className="text-4xl font-bold mb-4">About Premium Car Rentals</h1>
          <p className="text-xl max-w-3xl">
            We've been providing exceptional car rental experiences since 2015,
            with a focus on quality, reliability, and customer satisfaction.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Premium Car Rentals was founded with a simple mission: to
                provide an exceptional car rental experience that exceeds
                expectations. What started as a small fleet of 5 luxury vehicles
                has grown into a diverse collection of over 100 premium cars,
                SUVs, and specialty vehicles.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, Alex Rodriguez, recognized a gap in the market for
                high-quality rental vehicles paired with outstanding customer
                service. After years in the automotive industry, Alex used his
                expertise and passion for cars to create a rental experience
                unlike any other.
              </p>
              <p className="text-gray-700">
                Today, Premium Car Rentals serves thousands of satisfied
                customers annually, from business travelers to vacationers to
                special event attendees. While we've grown significantly, our
                commitment to personalized service and exceptional vehicles
                remains unchanged.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src="/api/placeholder/600/400"
                  alt="Our headquarters"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <p className="text-sm text-gray-600 italic">
                Our modern headquarters and primary pickup location in downtown,
                established in 2019.
              </p>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            What Sets Us Apart
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Car size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Premium Fleet
              </h3>
              <p className="text-gray-600 text-center">
                Our vehicles are meticulously maintained and replaced regularly
                to ensure you always drive the best.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Clock size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Efficient Process
              </h3>
              <p className="text-gray-600 text-center">
                Our streamlined booking and pickup process gets you on the road
                quickly with minimal wait times.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Shield size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Comprehensive Insurance
              </h3>
              <p className="text-gray-600 text-center">
                Every rental includes comprehensive insurance coverage for your
                peace of mind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Users size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Dedicated Support
              </h3>
              <p className="text-gray-600 text-center">
                Our customer service team is available 24/7 to assist with any
                questions or concerns.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                <Award size={20} className="text-blue-600 mr-2" />
                Quality
              </h3>
              <p className="text-gray-700">
                We never compromise on the quality of our vehicles or services.
                From regular maintenance to thorough cleaning between rentals,
                we ensure every vehicle meets our high standards.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                <Award size={20} className="text-blue-600 mr-2" />
                Customer-First Approach
              </h3>
              <p className="text-gray-700">
                Your satisfaction is our priority. We continuously gather and
                implement customer feedback to improve our services and meet
                your evolving needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                <Award size={20} className="text-blue-600 mr-2" />
                Transparency
              </h3>
              <p className="text-gray-700">
                We believe in clear, upfront pricing with no hidden fees. What
                you see is what you pay, with all insurance and basic provisions
                included in the quoted price.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Meet Our Leadership
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="/api/placeholder/200/200"
                  alt="Alex Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Alex Rodriguez</h3>
              <p className="text-blue-600 mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                With over 15 years in the automotive industry, Alex brings
                unparalleled expertise and vision to Premium Car Rentals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="/api/placeholder/200/200"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
              <p className="text-blue-600 mb-3">COO</p>
              <p className="text-gray-600 text-sm">
                Sarah oversees all operations, ensuring every customer
                interaction and vehicle rental meets our high standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="/api/placeholder/200/200"
                  alt="Michael Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
              <p className="text-blue-600 mb-3">Fleet Manager</p>
              <p className="text-gray-600 text-sm">
                Michael's automotive expertise ensures our fleet is always
                maintained to the highest standards of performance and safety.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Experience Premium Car Rentals?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Browse our selection of premium vehicles and book your rental today.
            Experience the difference that quality vehicles and exceptional
            service make.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors font-medium">
              View Our Fleet
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 py-2 px-6 rounded-md transition-colors font-medium">
              Contact Us
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
