import Link from "next/link";

export default async function SucessPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold">Thanks for your purchase!</h1>
      <Link href="/dashboard" className="btn btn-primary">
        Dashboard
      </Link>
    </main>
  );
}
