// App.jsx — drop LoadingPage into your existing MERN React app
import { useState } from "react";
import LoadingPage from "./LoadingPage";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Loading screen mounts on top; unmounts when done */}
      {loading && <LoadingPage onComplete={() => setLoading(false)} />}

      {/* Your actual app content underneath */}
      {!loading && (
        <main className="flex min-h-screen items-center justify-center bg-black text-white">
          <h1 className="text-4xl font-bold">Welcome to Sanel</h1>
        </main>
      )}
    </>
  );
}
