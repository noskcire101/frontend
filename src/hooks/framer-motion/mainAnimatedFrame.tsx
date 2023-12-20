import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const MainAnimatedFrame = ({ children }: Props) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {children}
    </motion.div>
  );
};

export default MainAnimatedFrame;
