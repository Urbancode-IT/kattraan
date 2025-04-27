import React from "react";
import Footer from "@/components/student-view/footer";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">




      

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Have questions, feedback, or need support? We’d love to hear from you! Fill out the form below or reach out directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
            <p className="mb-2 text-gray-700">📞 Toll free: <strong>+91 9878798797</strong></p>
            <p className="mb-2 text-gray-700">🕘 Support Hours: 9AM - 8PM IST</p>
            <p className="mb-4 text-gray-700">✉️ Email: <strong>admin@urbancode.in</strong></p>
            <p className="text-gray-600 text-sm">We usually respond within 24 hours on working days.</p>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" placeholder="Your Name" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows="4" placeholder="Write your message here..." className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
