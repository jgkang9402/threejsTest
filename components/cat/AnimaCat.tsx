"use client";
import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["sk_player_cat_lod0_Material_#81_0"]: THREE.SkinnedMesh;
    ["sk_player_cat_lod0_Material_#105_0"]: THREE.SkinnedMesh;
    ["sk_player_cat_lod0_Material_#93_0"]: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    Material_81: THREE.MeshBasicMaterial;
    Material_105: THREE.MeshBasicMaterial;
    Material_93: THREE.MeshBasicMaterial;
  };
};

type ActionName = "Take 001";
type AnimaCatProps = JSX.IntrinsicElements["group"] & {
  scrollY: number[];
};

// export function AnimaCat(props: JSX.IntrinsicElements["group"], { scrollY }) {
export function AnimaCat(props: AnimaCatProps) {
  const { scrollY, ...groupProps } = props;

  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/animacat/scene.gltf"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  const [isPlaying, setIsPlaying] = useState(true); // 애니메이션 상태를 관리하는 상태 변수

  // 애니메이션 재생 함수
  const playAnimation = () => {
    // actions["Take 001"].play(); // "Take 001"은 실제 애니메이션의 이름으로 수정해야 합니다.
    setIsPlaying(true);
  };

  // 애니메이션 정지 함수
  const stopAnimation = () => {
    // actions["Take 001"].stop(); // "Take 001"은 실제 애니메이션의 이름으로 수정해야 합니다.
    setIsPlaying(false);
  };

  const scrollDirection = useScrollDirection();

  // useFrame((state, delta) => {
  //   // console.log(state, delta);
  //   // const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2;
  //   // stripe.current.color.setRGB(1 + t * 10, 2, 20 + t * 50);
  //   // easing.dampE(
  //   //   head.current.rotation,
  //   //   [0, state.pointer.x * (state.camera.position.z > 1 ? 1 : -1), 0],
  //   //   0.4,
  //   //   delta
  //   // );
  //   // light.current.intensity = 1 + t * 2;
  // });
  useEffect(() => {
    console.log(group);
    console.log(actions);
    console.log(nodes);
    console.log(animations);
    console.log(scrollY);

    actions["Take 001"].play();
    // playAnimation();
  }, []);

  return (
    <group
      ref={group}
      {...groupProps}
      dispose={null}
      scale={[0.1, 0.1, 0.1]}
      rotation={[0, scrollDirection, scrollDirection + 0]}
      // rotation={[0, scrollDirection, 0]}
    >
      {/* 모델과 애니메이션 재생 및 정지 버튼 */}
      <group name="OSG_Scene">
        <group
          name="RootNode_(gltf_orientation_matrix)"
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group name="RootNode_(model_correction_matrix)">
            <group name="catfbx" rotation={[Math.PI / 2, -Math.PI / 1.3, 0]}>
              <group>
                <group name="RootNode">
                  <group>
                    <primitive object={nodes._rootJoint} />
                    <group rotation={[-Math.PI / 2, 0, 0]} />
                    <group
                      name="sk_player_cat_lod0"
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <skinnedMesh
                      name="sk_player_cat_lod0_Material_#81_0"
                      geometry={
                        nodes["sk_player_cat_lod0_Material_#81_0"].geometry
                      }
                      material={materials.Material_81}
                      skeleton={
                        nodes["sk_player_cat_lod0_Material_#81_0"].skeleton
                      }
                    />
                    <skinnedMesh
                      name="sk_player_cat_lod0_Material_#105_0"
                      geometry={
                        nodes["sk_player_cat_lod0_Material_#105_0"].geometry
                      }
                      material={materials.Material_105}
                      skeleton={
                        nodes["sk_player_cat_lod0_Material_#105_0"].skeleton
                      }
                    />
                    <skinnedMesh
                      name="sk_player_cat_lod0_Material_#93_0"
                      geometry={
                        nodes["sk_player_cat_lod0_Material_#93_0"].geometry
                      }
                      material={materials.Material_93}
                      skeleton={
                        nodes["sk_player_cat_lod0_Material_#93_0"].skeleton
                      }
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>

      {/* <div>
        {isPlaying ? (
          <button onClick={stopAnimation}>애니메이션 정지</button>
        ) : (
          <button onClick={playAnimation}>애니메이션 재생</button>
        )}
      </div> */}
    </group>
  );
}

useGLTF.preload("/animacat/scene.gltf");

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      if (!ticking) {
        requestAnimationFrame(() => {
          if (scrollDelta > 0) {
            // 아래로 스크롤 중일 때, 0.1씩 증가
            setScrollDirection((prevDirection) => prevDirection + 0.1);
          } else if (scrollDelta < 0) {
            // 위로 스크롤 중일 때, 0.1씩 감소
            setScrollDirection((prevDirection) =>
              Math.max(prevDirection - 0.1, 0)
            );
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollDirection;
}
