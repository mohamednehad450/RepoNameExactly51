"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const prefix = "https://mohamednehad450.github.io/test-next-link";

export default function Test() {
  const router = useRouter();
  return (
    <main className="p-8 text-2xl flex flex-col gap-4 text-center">
      <Link href={"/"}>{`<Link href={"/"}>`}</Link>
      <Link href={prefix + "/"}>{`<Link href={prefix + "/"}>`}</Link>
      <button
        onClick={() => router.push("/")}
      >{`<button onClick={() => router.push("/")}>`}</button>
      <button onClick={() => router.push(prefix + "/")}>
        {`<button onClick={() => router.push(prefix + "/")}>`}
      </button>
      <a href="/">{`<a href={"/"}> (doesn't work understandably)`}</a>
      <a href={prefix + "/"}>{`<a href={prefix + "/"}>`}</a>
    </main>
  );
}
