"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";
import AnimaPerson from "./AnimaPerson";
import Link from "next/link";

const PersonWrapper = () => {
  return (
    <>
      <Link href={"/"}>
        <button>홈으로</button>
      </Link>
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        camera={{ near: 1, far: 100, position: [7, 7, 10] }}
      >
        <AnimaPerson />
      </Canvas>
    </>
  );
};

export default PersonWrapper;
