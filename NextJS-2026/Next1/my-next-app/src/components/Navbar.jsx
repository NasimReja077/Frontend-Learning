"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold">My Next App</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}