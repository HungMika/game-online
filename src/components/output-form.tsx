import { useRouter } from "next/navigation";
import React from "react";

interface Product {
  _id: string;
  prodName: string;
  prodPrice: number;
}

interface OutputFormProps {
  products: Product[];
}

export const OutputForm = ({ products }: OutputFormProps) => {
  const router = useRouter();

  const redirectToPage = () => {
    router.push("/main-page");
  };

  // Tính tổng giá trị sản phẩm trên client-side
  const totalPrice = products.reduce(
    (sum, product) => sum + product.prodPrice,
    0
  );

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-md">
      <h2 className="text-lg font-bold">Tổng giá trị: {totalPrice} VND</h2>
      <h2 className="text-lg font-bold mt-2">Danh sách sản phẩm:</h2>
      {products.length === 0 ? (
        <p className="text-gray-600">Chưa có sản phẩm nào.</p>
      ) : (
        <ul className="list-disc pl-5 mt-2">
          {products.map((product) => (
            <li key={product._id} className="text-gray-800">
              <strong>{product.prodName}</strong>: {product.prodPrice} VND
            </li>
          ))}
        </ul>
      )}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={redirectToPage}
      >
        Chuyển trang
      </button>
    </div>
  );
};
