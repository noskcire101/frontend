import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1, delay: 0.5 }}
      className="text-3xl font-bold"
    >
      About
    </motion.div>
  );
};

export default About;
