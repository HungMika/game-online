"use client";
import { InputForm } from "@/components/input-form";
import React, { useState } from "react";

export default function Home() {
  const [mainScreenId, setMainScreenId] = useState("default");

  const handleClick = () => {};

  return (
    <div className="bg-gray-300 w-full h-full flex justify-center items-center">
      <div>
        <InputForm />
      </div>
    </div>
  );
}
