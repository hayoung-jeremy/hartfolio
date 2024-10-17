"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Item = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const [viewportHeight, setViewportHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    handleResize(); // Set initial height
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["0px", "0px", `${viewportHeight * 0.6}px`, "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.6, 0.8], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div ref={ref} className="h-[100vh] flex items-start justify-center w-full">
      <motion.div
        style={{ y, opacity, scale }}
        className="border border-white/20 w-full xl:w-[40vw] h-[40vh] flex items-center justify-center bg-black/40 backdrop-blur-lg rounded-[28px]"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const Layer2D = () => {
  return (
    <section className="absolute top-0 left-0 z-[99999999] w-full">
      <div className="h-[100vh]">Self description</div>

      <Item>First Project</Item>
      <Item>Second Project</Item>
      <Item>Third Project</Item>

      <div className="h-[70vh]">Contact</div>
    </section>
  );
};

export default Layer2D;
