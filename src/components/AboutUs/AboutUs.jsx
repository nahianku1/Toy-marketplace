import React from "react";

const AboutUs = () => {
  return (
    <main className="min-h-screen ">
      <div className="-z-10 fixed bg-sky-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
      <div className="-z-10 fixed  right-10 bg-lime-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
      <div className="-z-10 fixed bottom-0 left-11 bg-pink-300 [filter:blur(120px)] w-[400px] h-[200px]"></div>
      <div className="-z-10 fixed bottom-0 right-11 bg-yellow-200 [filter:blur(120px)] w-[400px] h-[200px]"></div>
      <div className="max-w-4xl  mt-[90px] p-8 mx-auto">
        <h1 className="text-4xl  font-bold text-center mb-8">About Us</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-4">
            <div className="flex gap-1 mb-[30px] items-center justify-center">
              <img
                src="/images/ball.png"
                alt=""
                className="object-cover object-center"
              />
              <p className="font-pacifico font-bold text-[30px]">Edufun Toys</p>
            </div>
            <p className="text-lg text-gray-700">
              At Edufun Toys, we believe that learning should be fun and
              engaging. That's why we are dedicated to creating educational toys
              that inspire creativity, foster curiosity, and promote learning
              through play. Our mission is to provide children with the tools
              they need to explore, discover, and develop essential skills.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-4">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              Our mission is to provide high-quality products and services to
              our customers. We strive to exceed their expectations by
              delivering innovative solutions and maintaining exceptional
              customer support.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
            <p className="text-lg text-gray-700">
              We have a team of dedicated professionals who are passionate about
              their work. Each member brings a unique set of skills and
              expertise, enabling us to tackle diverse challenges and deliver
              outstanding results.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
