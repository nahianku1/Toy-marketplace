import React from "react";

function Contact() {
  return (
    <main className="min-h-screen ">
      <div className="-z-10 fixed bg-sky-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
      <div className="-z-10 fixed  right-10 bg-lime-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
      <div className="-z-10 fixed bottom-0 left-11 bg-pink-300 [filter:blur(120px)] w-[400px] h-[200px]"></div>
      <div className="-z-10 fixed bottom-0 right-11 bg-yellow-200 [filter:blur(120px)] w-[400px] h-[200px]"></div>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="max-w-4xl p-8 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-4">
              <p className="text-lg text-gray-700 mb-4">
                If you have any questions or inquiries, please feel free to
                reach out to us. Our team is ready to assist you.
              </p>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-lg text-gray-700">
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
              <p className="text-lg text-gray-700">
                <strong>Email:</strong> info@example.com
              </p>
              <p className="text-lg text-gray-700">
                <strong>Address:</strong> 1234 Toy Street, City, State, Zip Code
              </p>
            </div>
            <div className="md:w-1/2 md:pl-4">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg text-gray-700 mb-2"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg text-gray-700 mb-2"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg text-gray-700 mb-2"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring focus:border-blue-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
