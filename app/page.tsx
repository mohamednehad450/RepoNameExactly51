import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 text-2xl">
      <Link href={"/test"}>/test</Link>
    </main>
  );
}
