import React, { useCallback, useMemo, useState } from "react";
import { OutputForm } from "./output-form";
import { useGetProducts } from "@/features/products/api/use-get-products";
import { useCreateProduct } from "@/features/products/api/use-create-products";

export const InputForm = () => {
  const { data: products, isLoading: productsLoading } = useGetProducts();
  const { mutate: createProduct } = useCreateProduct();

  const [prodName, setProdName] = useState("");
  const [prodPrice, setProdPrice] = useState("");

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.name === "prodName") {
        setProdName(e.target.value);
      }
      if (e.target.name === "prodPrice") {
        setProdPrice(e.target.value);
      }
    },
    []
  );

  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prodName || !prodPrice) {
      return alert("please fill the product's info!");
    }

    await createProduct({ name: prodName, price: Number(prodPrice) });

    setProdName("");
    setProdPrice("");
  };

  return (
    <div className="bg-white px-4 pb-4 rounded-md">
      <form
        onSubmit={handlesubmit}
        className="w-full h-full flex flex-col space-y-2.5 py-2 text-gray-500"
      >
        <input
          className="border-black border-2"
          type="text"
          name="prodName"
          value={prodName}
          placeholder="tên sản phẩm"
          onChange={onInputChange}
        />
        <input
          className="border-black border-2"
          type="text"
          name="prodPrice"
          value={prodPrice}
          placeholder="Giá trị sản phẩm"
          onChange={onInputChange}
        />
        <button className="bg-blue-600 rounded-md text-white">Add</button>
      </form>
      <OutputForm products = {products || []}/>
    </div>
  );
};
