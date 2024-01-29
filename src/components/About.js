import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        {/* <div class="social-sidebar">
          <a href="https://www.linkedin.com" target="_blank">
            <img src="./Linkedin-i.png" alt="LinkedIn" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <img src="./twitter-icon.png" alt="X" />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <img src="./github.png" alt="GitHub" />
          </a>
        </div> */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Md Fayaq Ali Ather.
            {/* <br className="hidden lg:inline-block" />I love to build amazing web
            apps. */}
          </h1>
          <p className="mb-8 leading-relaxed">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
