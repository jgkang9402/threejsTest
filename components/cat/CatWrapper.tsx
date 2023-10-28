"use client";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { AnimaCat } from "./AnimaCat";
import { OrbitControls, Stars } from "@react-three/drei";

export default function CatWrapper() {
  const cameraRef = useRef<Camera>(null);

  const [scrollY, setScrollY] = useState([0, 5, 0]);

  // 스크롤 이벤트 핸들러
  // const handleScroll = () => {
  //   setScrollY(window.scrollY);
  // };

  // useEffect(() => {
  //   // 스크롤 이벤트 리스너 등록
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     // 컴포넌트 언마운트 시 이벤트 리스너 해제
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // 스크롤 위치를 각도로 변환
  // const rotationX = (scrollY / window.innerHeight) * Math.PI * 2;

  // Intersection Observer 설정
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 스크롤 영역에 50% 이상 들어올 때 콜백 실행
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 스크롤 영역에 들어온 경우
          // 스크롤 위치에 따라 회전값 조절
          const rotationX = entry.intersectionRatio * (Math.PI / 2); // 스크롤 위치에 따라 x 축 회전
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    // observer.observe(group.current);

    return () => {
      observer.disconnect();
    };
  }, []);

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
          width: "90vw",
          backgroundColor: "#222",
          border: "1px solid red",
        }}
        // style={{ height: "500px", border: "1px solid red" }}
        fallback={<div>123</div>}
      >
        <ambientLight intensity={0.5} />
        <directionalLight />
        <Stars />
        {/* <PerspectiveCamera
          ref={cameraRef}
          makeDefault={true}
          position={[0, 0, 50]}
        /> */}
        <OrbitControls
          camera={cameraRef.current}
          makeDefault={true}
          enableZoom={false}
        />
        <AnimaCat scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
