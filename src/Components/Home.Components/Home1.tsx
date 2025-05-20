
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export default function Home1() {
  return (
    <div>
      <div className="py-10">
        <Marquee speed={50} gradient={false}>
          <img
            src="/photo_2025-05-19_14-33-25.jpg"
            alt="Mega Limb Camp"
            className="mx-6 h-100"
          />
          <img
            src="/photo_2025-05-19_14-33-45.jpg"
            alt="Blood Donation Camp"
            className="mx-6 h-100"
          />
          <img
            src="/photo_2025-05-19_14-33-51.jpg"
            alt="IIT Delhi"
            className="mx-6 h-100"
          />
      
          <img
            src="/photo_2025-05-19_14-34-17.jpg"
            alt="MR Roadies"
            className="mx-6 h-100"
          />
          <img
            src="/photo_2025-05-19_14-33-55.jpg"
            alt="Rotary International"
            className="mx-6 h-100 "
          />
        </Marquee>

        
        <div className="py-10"> 
          <motion.div
            className="text-4xl pb-5 font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
             hi ppl out there
            </h2>
          </motion.div>

          <motion.div
            className="text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
              <p className="leading-7 [&:not(:first-child)]:mt-6">
              <blockquote className="mt-6 border-l-2 pl-6 italic">
      i'm abhay a full stack web developer and web3 enthusiast.<br/>
      i love adding javascript to terminal and make it visible on screen.<br/>
      if you are looking to talk something productive we can talk and work with cofee
    </blockquote>
              </p>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
