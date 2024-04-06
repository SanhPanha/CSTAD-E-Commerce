"use client";
import CardProduct from "@/components/card/CardProduct";
import API_URL, { ProductType } from "@/lib/definitions";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Service() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data.results));
    console.log(products);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h1 className="text-4xl font-bold text-center text-gray-900 my-4">
        CSTAD E-COMMERCE
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product: any, index) => (
          <CardProduct
            onClick={() => router.push(`/service/${product.id}`)}
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            category={product.category}
            seller={product.seller}
          />
        ))}
      </div>
    </div>
  );
}
