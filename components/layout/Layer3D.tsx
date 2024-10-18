"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { EnvironmentSettings } from "../three";

const Layer3D = () => {
  return (
    <section className="w-full h-[100vh] fixed top-0 left-0 z-[1]">
      <Canvas>
        <Box></Box>
        <EnvironmentSettings />
      </Canvas>
    </section>
  );
};

export default Layer3D;
