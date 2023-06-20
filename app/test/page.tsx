"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Test() {
  const router = useRouter();
  return (
    <main className="p-8 text-2xl">
      <Link href={"/"}>Home</Link>
      <button onClick={() => router.push("/")}>Home (with useRouter)</button>
    </main>
  );
}
