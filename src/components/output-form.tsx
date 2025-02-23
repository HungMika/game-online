import React, { useMemo } from "react";

export const OutputForm = React.memo(
  ({ products }: { products: { name: string; price: string }[] }) => {
    //useMemo hạn chế re-render mỗi khi thêm 1 sản phẩm và tính toán lại
    const totalPrice = useMemo(() => {
      return products.reduce((sum, product) => sum + Number(product.price), 0);
    }, [products]);
    console.log("OutputForm re-rendered!");

    return (
      <div className="mt-4 p-4 bg-gray-100 rounded-md">
        <p className="font-semibold">
          Tổng giá trị: {totalPrice.toLocaleString()} VND
        </p>
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
      </div>
    );
  }
);
