import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitter, BsDiscord } from "react-icons/bs";
import { PiGithubLogoFill } from "react-icons/pi";

export default function Contact() {
  const socials = [
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/abhay-kumar-443b981b6/",
      label: "LinkedIn",
    },
    {
      icon: <BsTwitter />,
      url: "https://x.com/leanwithkumar",
      label: "Twitter",
    },
    {
      icon: <BsDiscord />,
      url: "https://discord.gg/vYXdt7Ss",
      label: "Discord",
    },
    {
      icon: <PiGithubLogoFill />,
      url: "https://github.com/leanwithkumar",
      label: "GitHub",
    },
  ];

  return (
    <>
      <div className="my-6 px-4 py-10">
        <blockquote className="mt-6 border-l-2 pl-6 italic text-lg max-w-2xl mx-auto">
          "You can’t connect the dots looking forward; you can only connect them
          looking backwards. So you have to trust that the dots will somehow
          connect in your future." <br />- Steve Jobs
        </blockquote>
      </div>

      
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 px-4 sm:px-10 md:px-20 lg:px-40 mb-10 py-10">
        {socials.map(({ icon, url, label }, index) => (
          <div
            key={index}
            onClick={() => window.open(url, "_blank")}
            role="button"
            aria-label={label}
            className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 border rounded-full border-white text-2xl sm:text-3xl md:text-4xl hover:text-white hover:bg-[#2C2C6C] cursor-pointer transition-all duration-200"
          >
            {icon}
          </div>
        ))}
      </div>
    </>
  );
}
