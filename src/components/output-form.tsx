import { useRouter } from "next/navigation";
import React, { useMemo } from "react";

export const OutputForm = React.memo(
  ({ products }: { products: { name: string; price: string }[] }) => {
    const router = useRouter();

    const redirectToPage = () => {
      router.push("/main-page");
    };

    //useMemo hạn chế re-render mỗi khi thêm 1 sản phẩm và tính toán lại
    const totalPrice = useMemo(() => {
      return products.reduce((sum, product) => sum + Number(product.price), 0);
    }, [products]);
    console.log("OutputForm re-rendered!");

    return (
      <div className="mt-4 p-4 bg-gray-100 rounded-md">
        <h2>Tổng giá trị: {totalPrice} VND</h2>
        <h2 className="text-lg font-bold">Danh sách sản phẩm:</h2>
        {products.length === 0 ? (
          <p>Chưa có sản phẩm nào.</p>
        ) : (
          <ul className="list-disc pl-5">
            {products.map((product, index) => (
              <li key={index}>
                <strong>{product.name}</strong>: {product.price} VND
              </li>
            ))}
          </ul>
        )}
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={redirectToPage}
        >
          Chuyển trang
        </button>
      </div>
    );
  }
);
