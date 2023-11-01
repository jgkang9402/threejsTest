"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import AnimaPerson from "./AnimaPerson";
import Link from "next/link";
const LoadingSpinner = () => {
  return (
    <>
      <div className="spinner"></div>
    </>
  );
};
const PersonWrapper = () => {
  return (
    <>
      <Link href={"/"}>
        <button>홈으로</button>
      </Link>
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas
          style={{ width: "100vw", height: "100vh" }}
          camera={{ near: 1, far: 100, position: [7, 7, 10] }}
        >
          <AnimaPerson />
        </Canvas>
      </Suspense>
    </>
  );
};

export default PersonWrapper;
