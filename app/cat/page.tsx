import CatWrapper from "@/components/cat/CatWrapper";
import Link from "next/link";

export default function CatPage() {
  return (
    <>
      <div>
        <Link href={"/"}>
          <button>메인페이지로</button>
        </Link>
      </div>
      {Array.from({ length: 200 }).map((_, idx) => {
        return (
          <div key={idx} style={{ margin: "1rem" }}>
            스크롤{idx}
          </div>
        );
      })}
      <CatWrapper />
    </>
  );
}
