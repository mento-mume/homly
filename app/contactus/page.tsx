import { useState } from "react";
import Button from "../components/Button";
import ContactCard from "../components/ContactCard";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here (e.g., send data to an API endpoint)
  };

  return (
    <section className="px-6 bg-[#FBFBFB] pt-12 pb-16 flex flex-col space-y-16 md:flex-row">
      <div>
        <h1 className="text-3xl text-[#555452] font-semibold mb-16 text-center">
          Send us a message
        </h1>
        <form
          onSubmit={handleSubmit}
          className=" p-4 bg-inherit shadow-md rounded-md"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            />
          </div>
          <Button variant="primary" size="big">
            Send
          </Button>
        </form>
      </div>
      <div>
        <h2 className="text-5xl font-bold text-primary mb-2">Contact Us</h2>
        <p className="text-gray-600 text-xl mb-12">Ready to get started?</p>
        <ContactCard textColor="text-primary" />
      </div>
    </section>
  );
};

export default ContactUs;
