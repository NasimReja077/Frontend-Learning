import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-4">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to My Next.js App 🚀
      </h1>

      <Link 
        href="/about"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Go to About Page
      </Link>
    </main>
  );
}