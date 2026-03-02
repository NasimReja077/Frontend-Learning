"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-10 flex flex-col gap-4">
      <input
        type="text"
        placeholder="Enter your name"
        className="border p-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="bg-blue-600 text-white p-2">
        Submit
      </button>
    </form>
  );
}