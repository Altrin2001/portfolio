import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    {
      icon: <FaHtml5 className="text-orange-500 transition-transform duration-300 group-hover:-rotate-[6deg]" size={50} />,
      name: "HTML",
      desc: "I use HTML to build structured and accessible content for all my web pages.",
    },
    {
      icon: <FaCss3Alt className="text-blue-500 transition-transform duration-300 group-hover:-rotate-[6deg]" size={50} />,
      name: "CSS",
      desc: "I design responsive and modern layouts using CSS to enhance user experience.",
    },
    {
      icon: <FaJs className="text-yellow-400 transition-transform duration-300 group-hover:-rotate-[6deg]" size={50} />,
      name: "JavaScript",
      desc: "I develop dynamic and interactive features using clean, efficient JavaScript code.",
    },
    {
      icon: <SiTailwindcss className="text-cyan-500 transition-transform duration-300 group-hover:-rotate-[6deg]" size={50} />,
      name: "Tailwind",
      desc: "I use Tailwind CSS to rapidly create custom designs with utility-first styling.",
    },
    {
      icon: <FaReact className="text-sky-400 transition-transform duration-300 group-hover:-rotate-[6deg]" size={50} />,
      name: "React",
      desc: "I build scalable and reusable UI components with React for smooth user interfaces.",
    },
    {
      icon: <FaJava className="text-red-600 transition-transform duration-300 group-hover:-rotate-[6deg]" size={50} />,
      name: "Java",
      desc: "I write robust backend and desktop applications using Java and object-oriented principles.",
    }
  ];

  return (
    <section
      id="skills"
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full py-16 bg-gradient-to-b from-gray-200/10 to-white relative"
    >
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 rounded-2xl">
 <div className="inline-block px-6 py-3 rounded-2xl border border-transparent transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_25px_#facc15]">
  <h2 
    className="text-3xl sm:text-5xl font-bold text-center 
               bg-gradient-to-b from-yellow-500 via-purple-500 to-blue-500 
               bg-clip-text text-transparent"
  >
    My-Skills
  </h2>
</div>



        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 bg-white/90 border border-transparent hover:border-white rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl relative overflow-hidden"
              data-aos="zoom-in"
            >
              <div className="bg-white rounded-xl p-5 flex flex-col items-center gap-3 shadow-inner h-full text-center">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-sm text-gray-600">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
