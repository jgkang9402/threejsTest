import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <Link href={"/person"}>person</Link>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Link href={"/fallguy"}>fallguy</Link>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Link href={"/cat"}>cat</Link>
      </div>
    </div>
  );
}
