"use client";
import API_URL, { ProductType } from "@/lib/definitions";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import ViewPage from "../view/[ id ]/page";


export default function Dashboard() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  const [productDetail, setProductDetail] = useState<ProductType | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.results)) {
          const sliced = data.results.slice(0, 10);
          setProducts(sliced);
        } else {
          console.error("Fetched data is not an array:", data.results);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleViewProduct = (product: ProductType) => {
    setProductDetail(product);
    setOpenModal(true);
  };

  const columns: TableColumn<ProductType>[] = [
    {
      name: "Product Title",
      selector: (row) => row.name,
    },
    {
      name: "Price ( USD )",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row): JSX.Element | any => (
        <img className="w-16 h-16" src={row.image} alt={row.image} />
      ),
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Action",
      selector: (row): any => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleViewProduct(row)}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            View
          </button>
          <button className="px-4 py-2 text-white bg-yellow-400 rounded hover:bg-yellow-500">
            Edit
          </button>
          <button className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <main className="h-screen ">
      <DataTable
        fixedHeader
        progressPending={loading}
        columns={columns}
        data={products}
        pagination={true}
        striped
        highlightOnHover
      />
      {openModal && (
        <ViewPage
          productDetail={productDetail}
          onClose={() => setOpenModal(false)}
        />
      )}
    </main>
  );
}
