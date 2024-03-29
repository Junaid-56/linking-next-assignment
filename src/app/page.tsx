import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>This is the HOMEPAGE</h1>
      </div>
      <br></br>
      <br></br>
      <div>
        <Link href="/name">click here to Go to Name Page</Link>
      </div>
    </main>
  );
}
