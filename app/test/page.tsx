"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import getConfig from "next/config";

export default function Test() {
  const router = useRouter();
  const config = getConfig();
  return (
    <main className="p-8 text-2xl flex flex-col gap-4">
      <Link href={"/"}>Home</Link>
      <Link href={config.assetPrefix + "/"}>Home (with assetPrefix)</Link>
      <button onClick={() => router.push("/")}>Home (with useRouter)</button>
      <button onClick={() => router.push(config.assetPrefix + "/")}>
        Home (with useRouter with assetPrefix)
      </button>
      <a href="/">Home {"(with <a> tag)"}</a>
      <a href={config.assetPrefix + "/"}>
        Home {"(with <a> tag) and assetPrefix"}
      </a>
    </main>
  );
}
