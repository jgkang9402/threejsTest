"use client";

import FallGuyWrapper from "@/components/fallguy/FallGuyWrapper";
import Link from "next/link";
import React from "react";

type Props = {};

const FallGuyPage = (props: Props) => {
  return (
    <div>
      <Link href={"/"} style={{ position: "fixed", zIndex: 1 }}>
        <button
          style={{ backgroundColor: "red", width: "200px", height: "100px" }}
        >
          메인페이지로
        </button>
      </Link>
      <div>
        <FallGuyWrapper />
      </div>
    </div>
  );
};

export default FallGuyPage;
