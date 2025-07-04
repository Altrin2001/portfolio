import React, { useState } from "react";
import Swal from "sweetalert2"; // ✅ import Swal

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const fullMessage = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappNumber = "9360413784"; // replace with your number

    // ✅ SweetAlert success message
    await Swal.fire({
      title: 'Sending to WhatsApp...',
      text: 'Your message is being prepared!',
      icon: 'success',
      timer: 5000,
      showConfirmButton: false,
      timerProgressBar: true
    });

    // ✅ Then open WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4"
    >
      <div className="relative max-w-xl w-full bg-gray-950 rounded-xl shadow-2xl p-10 flex flex-col items-center">
        <div className="absolute left-0 top-6 bottom-6 w-2 rounded-full bg-gradient-to-b from-pink-500 via-blue-500 to-green-400 blur-[2px] shadow-[0_0_30px_10px_rgba(236,72,153,0.6)]" />
        <div className="absolute right-0 top-6 bottom-6 w-2 rounded-full bg-gradient-to-b from-green-400 via-blue-500 to-pink-500 blur-[2px] shadow-[0_0_30px_10px_rgba(34,197,94,0.6)]" />

        <h2 className="text-3xl font-bold text-white mb-2 z-10">
          Contact <span className="text-pink-500">Me</span>
        </h2>
        <p className="text-gray-300 mb-8 text-center z-10">
          Want to message me on WhatsApp? Fill the form and hit send!
        </p>

        <form onSubmit={handleWhatsApp} className="w-full flex flex-col gap-6 z-10">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
