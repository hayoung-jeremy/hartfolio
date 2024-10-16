"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const Layer2D = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div style={{ position: "relative" }}>
      <div className="h-[70vh]">1</div>
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100%"
          viewBox="0 0 100 1000"
          // preserveAspectRatio="xMidYMid meet"
          style={{ position: "sticky", top: "0%", left: "20%", height: "100vh" }}
          className="border border-white/20"
        >
          <motion.path
            d="M100 0 L 100 100 C 100 250, 0 250, 0 400 V800"
            fill="transparent"
            stroke="white"
            strokeWidth="2"
            style={{ pathLength: pathLength }}
          />
        </svg>
        <div style={{ height: "100vh", position: "relative" }}></div>
      </div>
      <div className="h-[800px]">2</div>
    </div>
  );
};

export default Layer2D;
