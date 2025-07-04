import React from 'react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4"
    >
      <div className="relative max-w-xl w-full bg-gray-950 rounded-xl shadow-2xl p-10 flex flex-col items-center">
        {/* Neon side border */}
        <div className="absolute left-0 top-6 bottom-6 w-2 rounded-full bg-gradient-to-b from-pink-500 via-blue-500 to-green-400 blur-[2px] shadow-[0_0_30px_10px_rgba(236,72,153,0.6)]" />
        <div className="absolute right-0 top-6 bottom-6 w-2 rounded-full bg-gradient-to-b from-green-400 via-blue-500 to-pink-500 blur-[2px] shadow-[0_0_30px_10px_rgba(34,197,94,0.6)]" />

        <h2 className="text-3xl font-bold text-white mb-2 z-10">Contact <span className="text-pink-500">Me</span></h2>
        <p className="text-gray-300 mb-8 text-center z-10">
          Have a question, proposal, or just want to say hi? Fill out the form below and I'll get back to you!
        </p>
        <form className="w-full flex flex-col gap-6 z-10">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact