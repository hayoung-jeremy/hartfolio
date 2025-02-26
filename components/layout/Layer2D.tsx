"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useLenis from "@/hooks/useLenis";
import Link from "next/link";
import { Github, OpenInNewTab } from "../icons";

const Item = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);

  useLenis();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.15, 0.8, 0.85], [0, 0, 1, 1, 0]);
  // const scale = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.8, 0.88], [0.6, 0.6, 1, 1, 0.6]);

  return (
    <motion.div ref={ref} className="h-fit flex items-start justify-center w-full xl:my-[20px]">
      <motion.div
        style={{ opacity, willChange: "transform, opacity" }}
        className="z-[100] border border-[#ffffff28] w-full xl:w-[40vw] min-h-[40vh] flex items-center justify-center bg-black/80 backdrop-blur-lg rounded-[28px]"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const Layer2D = () => {
  return (
    <section className="relative top-0 left-0 z-[100] w-full">
      <div className="h-[100vh]">Self description</div>

      <Item>
        <div className="p-5">
          <h2 className="text-3xl">Renault — Xperiencemor3</h2>
          <p className="text-[#999]">2023.07.13 ~ 2023.11.29</p>
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/FashionInTech/renault-nfts-front"
              className="flex items-center justify-center w-fit gap-1 border border-white/30 px-2 py-[2px] rounded-xl text-[14px]"
            >
              <Github width={16} height={16} /> github
            </Link>

            <Link
              href="https://www.youtube.com/watch?v=5VrAH1Cquh4"
              className="flex items-center justify-center w-fit gap-1 border border-white/30 px-2 py-[2px] rounded-xl text-[14px]"
            >
              참고 영상 <OpenInNewTab width={20} height={20} />
            </Link>
          </div>
        </div>
      </Item>
      <Item>Second Project</Item>
      <Item>Third Project</Item>

      <div className="h-[70vh]">Contact</div>
    </section>
  );
};

export default Layer2D;
