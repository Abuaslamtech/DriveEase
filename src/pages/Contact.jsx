import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader,
  CheckCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulated successful submission
      setSubmitResult({
        success: true,
        message:
          "Your message has been sent successfully. We'll get back to you shortly.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitResult({
        success: false,
        message:
          "There was an error sending your message. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "What documents do I need to rent a car?",
      answer:
        "To rent a car from Premium Car Rentals, you'll need a valid driver's license, a major credit card in your name, and proof of insurance. International customers may need to provide a passport and international driver's permit. Requirements may vary depending on the specific vehicle type and rental duration.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Our standard cancellation policy allows for free cancellation up to 48 hours before your scheduled pickup time. Cancellations made within 48 hours may be subject to a cancellation fee equivalent to one day's rental. No-shows will be charged the full rental amount. Some premium and specialty vehicles may have different cancellation terms.",
    },
    {
      question: "Do you offer airport pickup and drop-off?",
      answer:
        "Yes, we offer complimentary airport pickup and drop-off services at major airports in our service areas. Please provide your flight details when making your reservation so we can coordinate the pickup. Our representative will meet you at the arrivals area with your vehicle.",
    },
    {
      question: "What happens if I return the car late?",
      answer:
        "Late returns are subject to additional hourly charges. If you're returning more than one hour after your scheduled return time, you may be charged for an additional day. We recommend contacting us as soon as possible if you anticipate returning the vehicle later than scheduled.",
    },
    {
      question: "Is there a security deposit required?",
      answer:
        "Yes, we require a security deposit for all rentals. The amount varies depending on the vehicle type, rental duration, and your rental history with us. The deposit is typically held on your credit card and released within 5-7 business days after the vehicle is returned in satisfactory condition.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mb-10 text-white">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have questions or need assistance? We're here to help! Reach out to
            our team using the information below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Get In Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin
                  size={20}
                  className="text-blue-600 mr-3 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="font-medium text-gray-800">Main Office</h3>
                  <p className="text-gray-600">
                    123 Rental Avenue
                    <br />
                    Suite 456
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone
                  size={20}
                  className="text-blue-600 mr-3 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-600">
                    Main: (555) 123-4567
                    <br />
                    Toll-Free: 1-800-PREMIUM
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail
                  size={20}
                  className="text-blue-600 mr-3 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">
                    General Inquiries: info@premiumrentals.com
                    <br />
                    Reservations: bookings@premiumrentals.com
                    <br />
                    Support: help@premiumrentals.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock
                  size={20}
                  className="text-blue-600 mr-3 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="font-medium text-gray-800">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 8:00 PM
                    <br />
                    Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-gray-800 mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Send Us a Message
            </h2>

            {submitResult && (
              <div
                className={`mb-6 p-4 rounded-md ${
                  submitResult.success
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                <div className="flex items-center">
                  {submitResult.success ? (
                    <CheckCircle size={20} className="mr-2 flex-shrink-0" />
                  ) : (
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {submitResult.message}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={16} className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Our Locations
          </h2>

          <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
            {/* Placeholder for a map */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin size={40} className="text-gray-500 mx-auto mb-2" />
                <p className="text-gray-700 font-medium">
                  Map placeholder - would integrate with Google Maps or similar
                  service
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      expandedFaq === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="p-4 bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Branch Locations Section */}
        <section className="mt-16 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Our Branch Locations
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                New York - Manhattan
              </h3>
              <p className="text-gray-600 mb-4">
                123 Rental Avenue
                <br />
                Suite 456
                <br />
                New York, NY 10001
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Phone:</span> (555) 123-4567
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Hours:</span> 8:00 AM - 8:00 PM
                (Mon-Sat)
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Los Angeles
              </h3>
              <p className="text-gray-600 mb-4">
                789 Hollywood Blvd
                <br />
                Suite 101
                <br />
                Los Angeles, CA 90028
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Phone:</span> (555) 987-6543
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Hours:</span> 8:00 AM - 9:00 PM
                (Mon-Sat)
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Miami</h3>
              <p className="text-gray-600 mb-4">
                456 Beach Drive
                <br />
                Suite 202
                <br />
                Miami, FL 33139
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Phone:</span> (555) 456-7890
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Hours:</span> 7:00 AM - 10:00 PM
                (Daily)
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-12 mb-16 bg-blue-50 rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for exclusive offers, travel tips, and
              updates on our newest premium vehicles.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              By subscribing, you agree to receive marketing emails from Premium
              Car Rentals. You can unsubscribe at any time.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
