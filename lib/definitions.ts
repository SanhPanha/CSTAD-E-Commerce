const API_URL = 'https://store.istad.co/api/products/';

export type ProductType = {
    id: number;
    name: string;
    price: number;
    category?: string;   
    desc?: string;
    image: string;
    seller?: string;
    onClick?: () => void;
};

export default API_URL;