const API_URL = "https://store.istad.co/api/products/";

const API_URL_CREATE = "https://store.istad.co/api/";

type CategoryType = {
  name: string;
  icon: string;
};

export type ProductType = {
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
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NjU3ODU2LCJpYXQiOjE3MTI0OTc4NTYsImp0aSI6IjI4ZjFiM2RjNmZmZjRlOWFiMmNjOTFiOWU5NDlhZmY2IiwidXNlcl9pZCI6Njh9.j4fItvddJ7yAdvK1joNlWmVdyOEQ3-7q9Rcoa_jMpmo";

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


export {  token, initialValues , API_URL_CREATE};
export default API_URL;
// export { token };
