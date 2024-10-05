import React from "react";

const AboutUs = () => {
  return (
    <section className="about-us bg-blue-50 py-12 px-6 md:py-20 md:px-12">
      <div className="container mx-auto">
        <div className="relative w-full h-[50vh] mb-10 md:mb-16">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Berlin_Schering_Office.jpg/800px-Berlin_Schering_Office.jpg"
            alt="Tech Store Image 3"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
              About Us
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Text Section */}
          <div className="text-lg text-blue-900 mb-8 text-justify leading-relaxed">
            Welcome to Tech Store Solutions, where innovation meets excellence.
            Founded in 2010, we have been at the forefront of technological
            advancements, providing cutting-edge solutions that empower
            businesses and individuals alike. Our mission is to transform ideas
            into reality. We specialize in state-of-the-art software, robust IT
            infrastructure, and digital strategies that drive success. Our team
            is dedicated to delivering high-quality products and services that
            exceed expectations. 
            <br /><br />
            <strong>Core Values:</strong><br />
            Innovation: We thrive on creativity, pushing the boundaries of
            what's possible. <br />
            Integrity: Honesty and transparency are the cornerstones of our
            business. <br />
            Customer-Centricity: We listen, understand, and tailor solutions to
            meet client needs. <br />
            Excellence: We strive for excellence from concept to delivery. <br />
            Collaboration: Teamwork drives our success.
          </div>

          {/* Video Section */}
          <div className="flex justify-center md:justify-start">
            <video
              className="w-full h-[300px] md:h-auto md:w-full rounded-lg shadow-xl transform transition-all hover:scale-105"
              autoPlay
              loop
              muted
              src="https://videos.pexels.com/video-files/5483092/5483092-uhd_2732_1440_25fps.mp4"
              preload="metadata"
            />
          </div>
        </div>

        <h3 className="text-2xl font-semibold mt-12 mb-6 text-purple-700 hover:text-purple-800 transition-colors">
          Our Vision
        </h3>
        <p className="text-md text-blue-800 mb-6 leading-relaxed md:text-lg">
          Our vision is to be the leading tech retailer that empowers individuals
          and businesses through innovative technology solutions. We aim to
          create a community where technology enhances lives and drives progress.
        </p>

        <h3 className="text-2xl font-semibold mt-12 mb-6 text-purple-700 hover:text-purple-800 transition-colors">
          Words from Our Team
        </h3>

        {/* Words from Our Team with Circular Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Team Member Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="text-center">
              {/* Circular Image */}
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="CEO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <p className="text-lg text-blue-900 italic mb-4">
                "At Tech Store Solutions, we are committed to pushing the
                boundaries of innovation and delivering exceptional value to our
                customers."
              </p>
              <p className="text-lg text-purple-700 font-bold">- CEO</p>
            </div>
          </div>

          {/* Team Member Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="text-center">
              {/* Circular Image */}
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Chairman"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <p className="text-lg text-blue-900 italic mb-4">
                "Our mission is to create a positive impact through technology,
                fostering growth and progress in every community we serve."
              </p>
              <p className="text-lg text-purple-700 font-bold">- Chairman</p>
            </div>
          </div>

          {/* Team Member Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="text-center">
              {/* Circular Image */}
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <p className="text-lg text-blue-900 italic mb-4">
                "Working at Tech Store Solutions has been an incredible journey.
                The collaborative environment and innovative spirit make it a great
                place to grow."
              </p>
              <p className="text-lg text-purple-700 font-bold">- Team Member</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mt-12 mb-6 text-purple-700 hover:text-purple-800 transition-colors">
          Join Us!
        </h3>
        <p className="text-md text-blue-900 leading-relaxed md:text-lg">
          Thank you for choosing Tech Store Solutions! We invite you to explore
          our products and experience the difference in quality and service. If
          you have any questions or need assistance, feel free to reach out to
          our friendly customer support team.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
