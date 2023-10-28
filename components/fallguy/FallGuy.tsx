"use client";

// import { Camera, Canvas, useFrame, useLoader } from "@react-three/fiber";
// // import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
// import React, { useEffect, useRef, Suspense } from "react";
// import { SphereGeometry } from "three";

// type Props = {};

// const FallGuy = (props: Props) => {
//   const gltf = useLoader(GLTFLoader, "/fallguy/fallguy.gltf");
//   const groupRef = useRef<THREE.Group>();

//   useFrame((state, delta) => {
//     // useFrame을쓰려면 Canvas태그 하위에서 선언해서 무조건 사용해야함 안그러면 에러
//     // console.log(state, delta);
//     groupRef.current.rotation.y += delta;
//   });

//   useEffect(() => {
//     gltf.scene.traverse((child: any) => {
//       if (child.isMesh) {
//         child.material.color.set("pink"); // 색상변경
//       }
//     });
//   }, [gltf]);

//   return (
//     <>
//       {/* <group ref={gltf}> */}
//       <group
//         ref={groupRef}
//         position={[2, -2, -2]}
//         rotation={[0, (45 * Math.PI) / 180, (45 * Math.PI) / 180]}
//         scale={[1.5, 1, 1]}
//       >
//         <mesh>
//           <primitive object={gltf.scene} scale={0.2} />
//           <axesHelper scale={5} />
//           <mesh position-y={2.5}>
//             <sphereGeometry />
//             <meshStandardMaterial color={"aqua"} />
//           </mesh>
//         </mesh>
//       </group>
//     </>
//   );
// };

// export default FallGuy;

import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

type Props = {};

const FallGuy: React.FC<Props> = (props) => {
  const [loadedGltf, setLoadedGltf] = useState(null);
  // const gltf = useGLTF("/duckTest.glb");
  const gltf = useGLTF("/fallguy/fallguy.gltf");
  const groupRef = useRef<THREE.Group>();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta;
    }
  });

  useEffect(() => {
    // setTimeout(() => {
    setLoadedGltf(gltf);
    // }, 5000);

    if (gltf.scene) {
      gltf.scene.traverse((child: any) => {
        if (child.isMesh) {
          child.material.color.set("pink");
        }
      });
    }
  }, [gltf]);

  if (!loadedGltf) return null;

  return (
    <group
      ref={groupRef}
      position={[2, -2, -2]}
      rotation={[0, (45 * Math.PI) / 180, (45 * Math.PI) / 180]}
      scale={[1.5, 1, 1]}
    >
      <mesh>
        <primitive object={loadedGltf.scene} scale={0.2} />
        <axesHelper scale={5} />
        <mesh position-y={2.5}>
          <sphereGeometry />
          <meshStandardMaterial color={"aqua"} />
        </mesh>
      </mesh>
    </group>
  );
};

export default FallGuy;
