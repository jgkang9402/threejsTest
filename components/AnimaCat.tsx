import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
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
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function AnimaCat(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/animacat/scene.gltf"
  ) as GLTFResult;
  const { actions } = useAnimations<GLTFActions>(animations, group);

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
  useEffect(() => {
    console.log(actions);
    console.log(nodes);
    console.log(materials);
    console.log(animations);

    actions["Take 001"].play();
    playAnimation();
  }, []);

  return (
    <group ref={group} {...props} dispose={null} scale={[0.1, 0.1, 0.1]}>
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
