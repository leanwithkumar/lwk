import { motion } from "framer-motion";
import Home1 from "./Home.Components/Home1";
import Skills from "./Home.Components/Skills";

export default function Home() {
  return (
    <div className="w-full h-full space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Home1 />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Skills />
      </motion.div>
    </div>
  );
}
