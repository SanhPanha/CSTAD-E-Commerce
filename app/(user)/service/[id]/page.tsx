import CardComponent from "@/components/card/CardComponent";
import { Metadata, ResolvingMetadata } from "next";
import API_URL, { ProductType } from "@/lib/definitions";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getData = async (id: string) => {
  const res = await fetch(`${API_URL}${id}`);
  const data = await res.json();
  console.log(data);
  return data;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`https://store.istad.co/api/products/${id}`).then(
    (res) => res.json()
  );

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: product.image,
    },
  };
}

export default async function Detail(props: Props) {
  let data = await getData(props.params.id);

  return (
    <main className="h-screen grid place-content-center shadow-2xl">
      <CardComponent
        image={
          data?.image ||
          "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
        }
        name={data?.title || "NoTitle"}
        price={data?.price || 0}
        seller={data?.seller || "No Seller"}
        desc={data?.desc || "No Description"}
      />
    </main>
  );
}
