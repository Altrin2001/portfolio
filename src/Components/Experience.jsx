import React from "react";

const experiences = [
  {
    company: "Inspireo Tech",
    role: "Trainee",
    duration: "1 Year",
    description:
      "Worked as a trainee, gaining hands-on experience in software development, collaborating with teams, and contributing to real-world projects using modern technologies.",
  },
  {
    company: "Shiash Infotech",
    role: "Intern",
    duration: "3 Months",
    description:
      "Completed an internship focused on practical training, learning industry best practices, and working on live assignments to enhance technical and professional skills.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 px-4"
    >
      {/* === LAPTOP VIEW === */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="hidden md:flex relative w-full max-w-5xl mx-auto aspect-[16/10]"
      >
        {/* Laptop Image */}
        <img
          src="/laptop.png"
          alt="Laptop"
          className="w-full h-auto object-contain pointer-events-none select-none"
        />

        {/* Overlay */}
        <div className="absolute top-[11%] left-[12.5%] w-[75%] h-[61%] bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-xl p-4 overflow-y-auto space-y-4 shadow-inner flex flex-col">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 tracking-widest animate-pulse drop-shadow-lg">
              My Experience
            </h2>
          </div>

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-black bg-opacity-60 text-white rounded-lg p-4 border-l-4 border-blue-500 shadow-md transition-transform hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-1">
                {exp.company}
              </h3>
              <div className="text-sm text-gray-300 mb-2">
                <span className="font-medium text-white">{exp.role}</span> |{" "}
                <span>{exp.duration}</span>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* === MOBILE CRT VIEW === */}
      <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className="flex md:hidden flex-col w-full max-w-md mx-auto gap-6 p-4 bg-gradient-to-br from-black via-gray-900 to-black border-t-2 border-b-2 border-green-500/30 relative overflow-hidden"
      >
        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(0,255,0,0.04) 0px, rgba(0,255,0,0.04) 1px, transparent 1px, transparent 3px)",
            zIndex: 10,
          }}
        />
        {/* Glow */}
        <div className="absolute -inset-2 rounded-xl pointer-events-none animate-pulse bg-gradient-to-r from-green-400/10 via-transparent to-green-400/10 blur-lg"></div>

        <div className="relative z-20 flex items-center justify-center mb-2">
          <h2 className="text-2xl font-extrabold text-green-400 tracking-widest animate-bounce drop-shadow-lg">
            My Experience
          </h2>
        </div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative z-20 bg-black/80 text-green-400 rounded-lg p-4 font-mono text-sm border-l-4 border-green-500 shadow-lg shadow-green-500/10 transition-transform duration-300 hover:scale-105 hover:border-green-300 group"
          >
            <div className="mb-2 flex flex-col gap-1">
              <h3 className="text-base font-bold group-hover:text-green-200 transition">
                {exp.company}
              </h3>
              <p className="text-xs text-green-300/80">
                <span className="animate-pulse">{exp.role}</span> | Duration:{" "}
                {exp.duration}
              </p>
            </div>
            <p className="leading-relaxed tracking-wide group-hover:text-green-200 transition">
              {exp.description}
            </p>
            <span className="block mt-2 h-0.5 w-1/3 bg-gradient-to-r from-green-400 via-green-200 to-transparent animate-[pulse_2s_infinite]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
