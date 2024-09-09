import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/263/636/original/contact-us-concept-icons-such-as-mobile-phone-e-mail-address-chat-global-communication-on-dark-blue-background-for-presentation-web-banner-article-business-and-network-connection-and-company-free-vector.jpg"
          alt=""
          className="w-full h-64 object-cover mb-6"
        />
      </div>
      <div className="flex flex-col md:flex-row bg-blue-100 p-6">
        {/* Contact Form */}
        <div className="bg-blue-200 text-lightpurple-700 p-4 md:w-1/2">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Full Name:
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="border border-blue-500 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Email Address:
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="border border-blue-500 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Contact No:
              </label>
              <input
                type="text"
                placeholder="Contact No"
                className="border border-blue-500 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Write Message:
              </label>
              <textarea
                placeholder="Write Message"
                className="border border-blue-500 p-2 w-full"
              ></textarea>
            </div>
            <div className="flex justify-end items-center">

            <button
              type="submit"
              className="bg-blue-500 text-white p-1 w-auto rounded-lg "
              >
              Submit
            </button>
                </div>
          </form>
        </div>
        {/* Map */}
        <div className="bg-blue-200 p-4 md:w-1/2">
          <h2 className="text-xl font-bold mb-4 text-lightpurple-700">
            Our Location
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56532.620627720025!2d85.38326678582939!3d27.677467868535842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aae42806ba1%3A0x5449e079404e5e82!2sBhaktapur!5e0!3m2!1sen!2snp!4v1725903008991!5m2!1sen!2snp"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
