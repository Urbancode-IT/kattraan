import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';  // Importing icons

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data (e.g., send to server or show a success message)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Contact Info */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-bold text-pink-600">Contact Information</h2>

          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-pink-600 text-2xl" />
            <p className="text-lg">
              <strong>Address:</strong> 123 Main Street, Cityville, Country
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-pink-600 text-2xl" />
            <p className="text-lg">
              <strong>Email:</strong> contact@yourdomain.com
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-pink-600 text-2xl" />
            <p className="text-lg">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
          </div>

          <p className="text-lg">
            <strong>Business Hours:</strong> Monday to Friday, 9 AM - 5 PM
          </p>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-bold text-pink-600">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white p-3 rounded-md hover:bg-pink-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
