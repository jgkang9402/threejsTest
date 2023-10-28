"use client";

import { Camera, Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
import React, { useEffect, Suspense } from "react";
import FallGuy from "./FallGuy";

const FallGuyWrapper = () => {
  const asd = useGLTF("/fallguy/fallguy.gltf") as any;
  const bbb = useGLTF("/animacat/scene.gltf") as any;
  useEffect(() => {
    console.log("@@@", asd);
    console.log("###", bbb);
  }, [asd, bbb]);
  return (
    <div
      style={{
        border: "1px solid",
        position: "fixed",
        top: 0,
        right: 0,
        cursor: "pointer",
      }}
    >
      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#222",
          border: "1px solid red",
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <directionalLight position={[1, 1, 1]} />
          <OrbitControls
          // camera={cameraRef.current}
          // makeDefault={true}
          // enableZoom={false}
          />
          <Stars /> {/* 배경 은하수생김 */}
          <axesHelper scale={10} /> {/* 3차원축이 나타나게함 */}
          <FallGuy />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FallGuyWrapper;
