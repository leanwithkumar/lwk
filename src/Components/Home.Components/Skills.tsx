import React, { useState } from "react";

interface Skill {
  name: string;
  logo: string;
}

const skills: Skill[] = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042" },
  { name: "Shadcn UI", logo: "https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", logo: "https://images.seeklogo.com/logo-png/33/1/express-js-logo-png_seeklogo-339850.png" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Mongoose", logo: "https://avatars.githubusercontent.com/u/7552965?s=200&v=4" },
  { name: "Vercel", logo: "https://www.svgrepo.com/show/327408/logo-vercel.svg" },
  { name: "Netlify", logo: "https://cdn.worldvectorlogo.com/logos/netlify.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Ubuntu", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ubuntu_logo.svg/900px-Ubuntu_logo.svg.png?20100502073026" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];

const Skills: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl text-center mb-8">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
        {skills.map((skill, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherBlurred = hoveredIndex !== null && !isHovered;

          return (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative p-4 flex flex-col items-center transition-all duration-300
                ${isHovered ? "z-10 scale-110" : ""}
                ${isOtherBlurred ? "blur-sm opacity-40" : "opacity-100"}
              `}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className={`
                  h-16 w-16 object-contain transition-all duration-700 ease-in-out
                  ${isHovered ? "rotate-[360deg] drop-shadow-[0_0_20px_#00ffe5]" : ""}
                `}
                loading="lazy"
              />
              <p
                className={`
                  mt-2 text-sm text-center transition-opacity duration-300
                  ${isHovered ? "opacity-100" : "opacity-0"}
                `}
              >
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
