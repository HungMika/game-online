import React, { useCallback, useMemo, useState } from "react";
import { OutputForm } from "./output-form";

export const InputForm = () => {
  const [prod, setProd] = useState<{ name: string; price: string }[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //useCallback hạn chế re-render mỗi khi onChange input form
  const onInputchange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.name === "prodName") {
        setName(e.target.value);
      }
      if (e.target.name === "prodPrice") {
        setPrice(e.target.value);
      }
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === "" || price.trim() === "") {
      alert("please fill all the product's info");
      return;
    }
    setProd([...prod, { name, price }]);
    setName("");
    setPrice("");
  };

  return (
    <div className="bg-white px-4 pb-4 rounded-md">
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-col space-y-2.5 py-2 text-gray-500"
      >
        <input
          className="border-black border-2"
          type="text"
          name="prodName"
          value={name}
          placeholder="tên sản phẩm"
          onChange={onInputchange}
        />
        <input
          className="border-black border-2"
          type="text"
          name="prodPrice"
          value={price}
          placeholder="Giá trị sản phẩm"
          onChange={onInputchange}
        />
        <button className="bg-blue-600 rounded-md text-white">Add</button>
      </form>
      <OutputForm products={prod} />
    </div>
  );
};
