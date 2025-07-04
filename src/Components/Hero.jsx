import React from 'react';
import facebook from '../assets/facebook.jpg';
import github from '../assets/githup.jpg';
import instagram from '../assets/instagram.jpg';
import linkedin from '../assets/linkedin.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { FaJava, FaDownload } from 'react-icons/fa';
import {
  SiSpringboot, SiReact, SiMysql, SiHtml5, SiCss3,
  SiJavascript, SiBootstrap, SiTailwindcss
} from 'react-icons/si';
import altrin from '../assets/altrin.png';

function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col" >
      {/* Glowing circle background */}
     <div
     className="absolute z-0 
             h-[320px] w-[320px] sm:h-[420px] sm:w-[320px] 
             bg-gradient-to-r from-red-600 via-blue-600 to-green-400 
             rounded-full shadow-[0_0_100px_rgba(255,165,0,0.7)] 
             -left-20 top-1/2 -translate-x-1/2 -translate-y-1/7 
             sm:left-2 sm:top-100 right-1.5 sm:-translate-x-1/2 sm:-translate-y-0 
             md:left-1/2 md:top-60 md:-translate-x-1/2 md:-translate-y-0 
             lg:top-24 lg:right-36 lg:left-auto lg:translate-x-0 lg:translate-y-0 
             lg:rotate-[15deg]"
  aria-hidden="true"
      ></div>

      {/* Main Section */}
      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-gray-700 z-10"
      >
        <div className="container mx-auto flex flex-col md:flex-row px-5 py-24 items-center">
          <div
            className="relative flex flex-col lg:flex-grow md:w-1/2 
            lg:pr-24 md:pr-16 md:items-start md:text-left 
            mb-16 md:mb-0 items-center text-center"
          >
            {/* Social Media Icons */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex space-x-4 mb-6"
              aria-label="social media links"
            >
              <a href="#" aria-label="facebook">
                <img
                  className="rounded-full w-14 h-14 hover:scale-110 transition-transform bg-blue-500"
                  src={facebook}
                  alt="Facebook"
                />
              </a>
              <a href="#" aria-label="instagram">
                <img
                  className="rounded-full w-14 h-14 hover:scale-110 transition-transform bg-pink-500"
                  src={instagram}
                  alt="Instagram"
                />
              </a>
              <a href="#" aria-label="linkedin">
                <img
                  className="rounded-full w-14 h-14 hover:scale-110 transition-transform bg-blue-700"
                  src={linkedin}
                  alt="LinkedIn"
                />
              </a>
              <a href="#" aria-label="github">
                <img
                  className="rounded-full w-14 h-14 hover:scale-110 transition-transform bg-gray-700"
                  src={github}
                  alt="GitHub"
                />
              </a>
            </div>

            {/* Title and Subtitle */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-gray-900 mb-2">
              Hi! I'm{" "}
              <span className="text-pink-400 md:text-fuchsia-500 sm:text-green-400">
                Altrin<sup>Kingson</sup>
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-2">
              <Typewriter
                words={[
                  "Full Stack Java Web Developer",
                  "Creative Coder",
                  "Frontend & Backend Pro",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={75}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <br />
            <p className="mb-8 leading-relaxed text-black max-w-lg">
              I am a passionate{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-500 via-red-500 to-green-400 bg-clip-text text-transparent">
                Java Full Stack Developer
              </span>{" "}
              dedicated to crafting scalable, robust web applications and intuitive user experiences.
              With expertise in{" "}
              <span className="tech-carousel font-semibold">
                <span className="carousel-inner">
                  <span className="tech-item text-orange-600"><SiHtml5 /> Html-5</span>
                  <span className="tech-item text-blue-600"><SiCss3 /> Css-3</span>
                  <span className="tech-item text-purple-600"><SiBootstrap /> Bootstrap-3</span>
                  <span className="tech-item text-teal-400"><SiTailwindcss /> Tailwind CSS-4</span>
                  <span className="tech-item text-yellow-300"><SiJavascript /> Java Script</span>
                  <span className="tech-item text-orange-600"><FaJava /> Core Java</span>
                  <span className="tech-item text-green-600"><SiSpringboot /> Spring Boot</span>
                  <span className="tech-item text-blue-500"><SiReact /> React-JS</span>
                  <span className="tech-item text-blue-700"><SiMysql /> MySQL</span>
                </span>
              </span>
              , I build seamless solutions that drive business growth and innovation. I thrive on solving complex problems and continuously learning cutting-edge tools and frameworks.
            </p>

            {/* CV Download Button */}
            <div className="flex justify-center">
              <a href="/Altrinpdf.pdf" download className="inline-flex items-center gap-2 justify-center px-6 py-2 text-white text-lg font-semibold bg-gradient-to-r from-red-500 via-pink-500 to-blue-600 
                rounded-full shadow-blue-300 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] hover:scale-105 hover:text-gray-200">
                <FaDownload /> Download CV
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          >
            <img
              src={altrin}
              alt="Altrin.img"
              className="object-cover object-center rounded-full w-70 h-75 border-4 border-white shadow-xl"
              width={320}
              height={200}
              loading="eager"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
