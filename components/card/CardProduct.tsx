"use client";

import { Card } from "flowbite-react";

type PropsType = {
  name: string;
  image: string;
  price: number;
  seller?: string;
  category?: string;
  onClick?: () => void;
};

export default function CardProduct({
  name,
  image,
  price,
  seller,
  category,
  onClick,
}: PropsType) {
  return (
    <div>

      <Card
        onClick={onClick}
        className="w-[300px] bg-gray-100 hover:bg-gray-200 cursor-pointer shadow-lg rounded-lg p-4 flex flex-col items-center justify-center transition-shadow duration-500 ease-in-out hover:shadow-2xl"
        renderImage={() => (
          <img src={image} className="w-[250px] h-[150px] rounded-t-lg" />
        )}
      >
        <a>
          <h5 className="text-center text-xl font-semibold text-gray-900 line-clamp-1">
            {name}
          </h5>
        </a>

        <div className="flex flex-col gap-4 mt-3">
          <span className="bg-gray-200 hover:bg-white px-4 py-2 text-md text-gray-900 rounded-lg line-clamp-1">
            Seller: {seller}
          </span>
          <span className="bg-gray-200 hover:bg-white px-4 py-2 text-md text-gray-900 rounded-lg line-clamp-1">
            Category: {category}
          </span>
        </div>
        <span className="bg-gray-200 hover:bg-white px-4 py-2 text-md font-bold text-gray-900 rounded-lg line-clamp-1">
          Price: ${price}
        </span>

          <div className="flex flex-col items-center justify-between mt-4 gap-4">
            <a href="#" className="px-16 rounded-lg bg-cyan-700 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300">
              Add to cart
            </a>
          </div>
      </Card>
    </div>
  );
}
