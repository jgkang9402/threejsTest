"use client";

import React, { useEffect, useRef } from "react";
import {
  Environment,
  OrbitControls,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { useControls } from "leva";
import { Object3D } from "three";

const AnimaPerson = () => {
  const model = useGLTF("/animaperson/animaperson.glb");
  const animations = useAnimations(model.animations, model.scene);
  const { actionName } = useControls({
    actionName: {
      value: animations.names[2],
      options: animations.names,
    },
  });

  const meshRef = useRef<Object3D>();

  useEffect(() => {
    // 이벤트 바뀔때마다 동작하는거
    const action = animations.actions[actionName];
    action?.reset().fadeIn(0.5).play();

    return () => {
      action?.fadeOut(0.5);
    };
  }, [actionName]);

  useEffect(() => {
    // cursor움직일때 돌아가는거
    const handleMouseMove = (event: MouseEvent) => {
      const width = window.innerWidth;
      const mouseXNormalized = (event.clientX / width) * 2 - 1;
      const rotationY = Math.max(
        -0.785,
        Math.min(0.785, mouseXNormalized * 0.785)
      );
      if (meshRef.current) {
        meshRef.current.rotation.y = rotationY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <OrbitControls />
      <Environment preset="warehouse" />
      <primitive ref={meshRef} scale={3} object={model.scene} />
    </>
  );
};

export default AnimaPerson;
