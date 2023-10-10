"use client";
import CustomCanvas from "@/components/TestThree";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <div style={{ height: "500vh" }}> */}
      {/* <div style={{ backgroundColor: "#99f" }}> */}
      <div>1231231</div>
      {Array.from({ length: 100 }).map((_, idx) => {
        return (
          <div key={idx} style={{ margin: "1rem" }}>
            {idx}
          </div>
        );
      })}
      <CustomCanvas />
    </div>
  );
}
