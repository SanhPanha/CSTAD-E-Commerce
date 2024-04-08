'use client'
import { useEffect, useState } from "react";
import API_URL, { ProductType } from "@/lib/definitions";
import { Modal } from "flowbite-react";
import Image from "next/image";

interface ViewPageProps {
  productDetail: ProductType | null;
  onClose: () => void;
}


const ViewPage = ({ productDetail, onClose }:any) => {
  const [data, setData] = useState<any>(null);
  const imagePlaceholder =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4PG970kLEIAwXbJGaMfq5tlVDqnBbuDP_MRmm2JlhA&s";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}${productDetail?.id}`);
        const responseData = await res.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (productDetail) {
      fetchData();
    }
  }, [productDetail]);

  return (
    <main>
      {/* for product detail */}
      <Modal show={true} onClose={onClose}>
        <h1 className="text-center text-3xl py-6">Product Detail</h1>
        <Modal.Body className="bg-gray-200">
          <div className="grid  space-y-6 justify-center items-center">
            <Image
              src={productDetail?.image || imagePlaceholder}
              alt={productDetail?.name || "Untitled"}
              width={300}
              height={300}
              className="mx-auto rounded"
            />
            <h3 className="text-3xl text-gray-700">
              {productDetail?.name || "Untitled"}
            </h3>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {data?.desc || "No description available"}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Price: {data?.price || 0} USD
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default ViewPage;