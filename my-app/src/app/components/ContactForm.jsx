"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // For showing success/error feedback
  const [status, setStatus] = useState({ success: false, message: "" });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate & submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        success: false,
        message: "Please fill out all fields.",
      });
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      // If everything worked
      setFormData({ name: "", email: "", message: "" });
      setStatus({
        success: true,
        message: "Thanks for contacting us! We'll get back to you soon.",
      });
    } catch (error) {
      setStatus({
        success: false,
        message: error.message || "Error submitting the form.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 rounded shadow-md mt-8 800 mb-4 "
    >
      <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>

      {/* Feedback message */}
      {status.message && (
        <div
          className={`mb-4 p-2 rounded ${
            status.success ? "bg-green-600" : "bg-red-600"
          } text-white`}
        >
          {status.message}
        </div>
      )}

      <label className="block mb-2 text-gray-300">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
        placeholder="Your Name"
      />

      <label className="block mb-2 text-gray-300">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
        placeholder="you@example.com"
      />

      <label className="block mb-2 text-gray-300">Message</label>
      <textarea
        name="message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
        placeholder="Your message..."
      />

      <button
        type="submit"
        className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
