// "use client";
// import { Canvas, Camera, useFrame, useLoader } from "@react-three/fiber";
// import { useState } from "react";
// import { useGLTF } from "@react-three/drei";

// // ...

// export default function WolfMesh(props: JSX.IntrinsicElements["mesh"]) {
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);

//   // load GLTF
//   const { nodes, meterials }: any = useGLTF("/scene.gltf");

//   // handle 3d model
//   // useFrame((state, delta, frame) => {
//   //   const mesh = gltf.scene.children[0];
//   //   mesh.rotation.y = mesh.rotation.z += 0.01;
//   //   mesh.rotation.x = state.clock.getElapsedTime();
//   // });

//   return (
//     <>
//       <primitive
//         object={nodes.Hips}
//         scale={0.01}
//         onPointerOver={(e: any) => setHover(true)}
//         onPointerOut={(e: any) => setHover(false)}
//         // onClick={(e: any) =>
//         //   window.open("https://sketchfab.com/anthonyjamesgirdler")
//         // }
//       />
//     </>
//   );
// }
