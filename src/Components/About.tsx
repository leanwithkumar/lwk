import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="py-12 px-4 sm:px-6 lg:px-8">
      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="border-l-2 pl-6 italic text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
      >
         let's make it simple as we are talking with or without coffee.<br/><br/>
     my name is abhay kumar. currently i'm pursuing my undergrad in electronics and communication engineering. i started to code when i realized it's to late but i fell in love with the terminal.
     throughout my highschool career i was an athlete who keeps puishing the limits for archiving sucess. meanwhile i love to watch anime -dattebayo<br/><br/>
     my english teachers told me you must write and speak whenever you get a chance, obeying their dicision i became a house captain in grade 12. hail to nilgiri house!<br/><br/>
     as i moved to collage i dropped the plan of engineering and started working with collage clubs which was kinda social welfare ngos, i helped a lot of needy ppl now god do help me please<br/><br/>
     jokes apart i'm doing programming since jan 2025 (seriously) getting my hands dirty on c++ and javascript (until python and typescript replace them) i practice dsa daily on leetcode, geeksforgeeks and codeforces no lies check this out <a className="underline" href="https://leetcode.com/u/leanwithkumar/" target="_blank">leetcode </a> <a className="underline" href="" target="_blank"> geeksforgeeks</a><br/><br/>
     

    i love to work  entire day as it makes me more productive. i complete work on time and search position in management because of my leadership, teambuilding and public speaking skills.<br/><br/>
    well if you are looking to do something great like making website ring my number.<br/>
    open to make startups from scratch.
      </motion.blockquote>
    </div>
  );
}
