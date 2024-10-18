"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useLenis from "@/hooks/useLenis";

const Item = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);

  useLenis();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.45, 0.6, 0.68], [0, 0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.6, 0.78], [0.6, 0.6, 1, 1, 0.6]);

  return (
    <motion.div ref={ref} className="h-fit flex items-start justify-center w-full xl:my-[20px]">
      <motion.div
        style={{ opacity, scale, willChange: "transform, opacity" }}
        className="z-[99999999] border border-[#ffffff28] w-full xl:w-[40vw] h-[40vh] flex items-center justify-center bg-black/40 backdrop-blur-lg rounded-[28px]"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const Layer2D = () => {
  return (
    <section className="relative top-0 left-0 z-[99999999] w-full">
      <div className="h-[100vh]">Self description</div>

      <Item>
        <div className="p-5">
          <h2 className="text-3xl">Renault — Xperiencemor3 2023.07.13 ~ 2023.11.29 -</h2>
          [github](https://github.com/FashionInTech/renault-nfts-front) - 소개 영상
          [링크](https://www.youtube.com/watch?v=5VrAH1Cquh4)
        </div>
      </Item>
      <Item>Second Project</Item>
      <Item>Third Project</Item>

      <div className="h-[70vh]">Contact</div>
    </section>
  );
};

export default Layer2D;
