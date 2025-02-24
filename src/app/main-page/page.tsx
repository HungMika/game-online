"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function MainPage() {
  const router = useRouter();

  const redirectToPage = () => {
    router.push("/main-page/blog-page");
  };
  return (
    <div>
      <h1>main page</h1>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={redirectToPage}
      >
        Blog Page
      </button>
    </div>
  );
}
