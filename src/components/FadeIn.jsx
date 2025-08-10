import React from "react";
import { motion } from "framer-motion";

const FadeIn = ({ children, delay = 0, duration = 0.5, direction = "up" }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "right" ? 20 : direction === "left" ? -20 : 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
