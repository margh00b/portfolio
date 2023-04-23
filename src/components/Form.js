import React, { useState } from "react";
import ContactForm from "../pages/api/contactForm.js";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("api/contactForm/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Thank you!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        alert("Failed: ${errorData.error}");
      }
    } catch (error) {
      console.error("Failed:", error);
    }
  };
  return (
    <div className="mx-auto max-w-md ">
      <form
        className="bg-white shadow-md rounded px-8 py-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6">Contact Me</h1>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Email</label>
          <input
            className="w-full border-gray-300 border rounded p-2"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Phone</label>
          <input
            className="w-full border-gray-300 border rounded p-2"
            type="tel"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="flex mb-4">
          <div className="mr-2 w-1/2">
            <label className="block font-semibold mb-2">First Name</label>
            <input
              className="w-full border-gray-300 border rounded p-2"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="ml-2 w-1/2">
            <label className="block font-semibold mb-2">Last Name</label>
            <input
              className="w-full border-gray-300 border rounded p-2"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Message</label>
          <textarea
            className="w-full border-gray-300 border rounded p-2"
            rows="4"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
