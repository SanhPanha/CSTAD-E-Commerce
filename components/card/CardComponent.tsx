"use client";
import { Card } from "flowbite-react";
import { useRouter } from "next/navigation";

type PropsType = {
  title: string;
  desc: string;
  image: string;
};

export default function CardComponent({ title, desc, image }: PropsType) {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center sm:mx-4 md:mx-8 lg:mx-16">
      <Card className="max-w-full md:max-w-4xl" imgSrc={image} horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{desc}</p>
      </Card>

      <button
        onClick={handleBack}
        className="px-4 py-2 bg-blue-500 rounded-lg text-lg font-semibold mt-4 text-gray-100 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300 w-40"
      >
        Back to Home
      </button>
    </div>
  );
}
