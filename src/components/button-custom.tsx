import React from "react";

interface buttonCustomProps {
  ButtonTitle: string;
}

export const ButtonCustom = ({ ButtonTitle }: buttonCustomProps) => {
  return (
    <button className="border-2 border-gray-600 p-2 m-1 rounded-md">
      {ButtonTitle}
    </button>
  );
};
