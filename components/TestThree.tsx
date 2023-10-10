import { Canvas } from "@react-three/fiber";
import WolfMesh from "./WolfMesh";
import { useRef } from "react";
import { Model } from "./Scene";
import { Cat } from "./Cat";
import { AnimaCat } from "./AnimaCat";

export default function CustomCanvas() {
  return (
    <div>
      <Canvas style={{ height: "500px" }}>
        <AnimaCat />
      </Canvas>
      <Canvas>
        <Model />
      </Canvas>
    </div>
  );
}
