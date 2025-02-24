"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function BlogPage() {
  const router = useRouter();

  const redirectToPage = () => {
    router.replace("/");
  };

  return (
    <div>
      <h1>Blog page</h1>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={redirectToPage}
      >
        Home Page
      </button>
    </div>
  );
}
