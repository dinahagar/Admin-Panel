import { Dispatch, SetStateAction } from "react";

export interface Product {
    id: string,
    title: string,
    price: string,
    description: string,
    image: string,
    category: string
}

export interface IsOpenState {
    product: Product;
    isOpen: boolean;
}

export interface productsState {
    items: Product[];
}

export interface ProductCardProps {
    data?: Product[]; 
    setIsOpen: Dispatch<SetStateAction<{product: Product, isOpen: boolean}>>;
    allData?: Product[]
}
