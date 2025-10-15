// import React from "react";

export default function Product({ product }) {
  return (
    <div
      key={product.id}
      className="bg-white border rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold">${product.price}</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
