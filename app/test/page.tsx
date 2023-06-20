"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const prefix = "https://mohamednehad450.github.io/test-next-link";

export default function Test() {
  const router = useRouter();
  return (
    <main className="p-8 text-2xl flex flex-col gap-4">
      <Link href={"/"}>Home</Link>
      <Link href={prefix + "/"}>Home {"(with assetPrefix)"}</Link>
      <button onClick={() => router.push("/")}>Home (with useRouter)</button>
      <button onClick={() => router.push(prefix + "/")}>
        Home {"(with useRouter with assetPrefix)"}
      </button>
      <a href="/">Home {"(with <a> tag)"}</a>
      <a href={prefix + "/"}>Home {"(with <a> tag) and assetPrefix"}</a>
    </main>
  );
}
