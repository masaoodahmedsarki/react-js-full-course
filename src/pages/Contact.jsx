
import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Get In Touch
          </span>

          <h1 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Have a question or want to work together?
            We'd love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-2 md:p-10">

          {/* Contact Information */}
          <div className="rounded-2xl bg-gray-900 p-8 text-white">
            <h2 className="mb-4 text-2xl font-bold">
              Let's Talk!
            </h2>

            <p className="mb-10 text-gray-400">
              Feel free to contact us. We are always ready
              to discuss your ideas and projects.
            </p>

            <div className="space-y-7">
              <div>
                <h3 className="font-semibold text-blue-400">Email</h3>
                <p className="mt-1 text-gray-300">
                  hello@example.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-400">Phone</h3>
                <p className="mt-1 text-gray-300">
                  +92 300 1234567
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-400">Location</h3>
                <p className="mt-1 text-gray-300">
                  Hyderabad, Pakistan
                </p>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer"
                className="rounded-lg bg-gray-700 px-4 py-2 hover:bg-blue-600">
                GitHub
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="rounded-lg bg-gray-700 px-4 py-2 hover:bg-blue-600">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Your message has been submitted!");
            }}
            className="space-y-6"
          >
            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message →
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
