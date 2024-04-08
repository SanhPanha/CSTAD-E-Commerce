const API_URL = "https://store.istad.co/api/products/";

const API_URL_CREATE = "https://store.istad.co/api/";

type CategoryType = {
  name: string;
  icon: string;
};

type ProductType = {
  id?: number;
  name?: string;
  price?: number;
  category?: CategoryType;
  desc?: string;
  image: string;
  seller?: string;
  onClick?: () => void;
  quantity?: number;
};

const token =
"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NzE5MDgyLCJpYXQiOjE3MTI1NTkwODIsImp0aSI6ImU0ODcwOWE4NzJhZTQ2NGFhOGQxNDM4NjI2YTE3M2E3IiwidXNlcl9pZCI6Njh9.PKy7gppd5E66yI77EnF3ZK_5aRXxhOsO03pybWIPDp4";

const initialValues = {
  categoryName: "",
  categoryIcon: "",
  name: "",
  desc: "",
  image: "",
  price: 0,
  quantity: 0,
  fileIcon: null,
  fileProduct: null,
};

export { token, initialValues, API_URL_CREATE };
export default API_URL;
export type { ProductType };
// export { token };
