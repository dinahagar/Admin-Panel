import { useAddProductMutation } from "../../Store/services/products"
import { StyledContent } from "../Home/Home.styles"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCategoryProductsQuery } from "../../Store/services/categories";
import ProductCard from "../Products/components/ProductCard";
import { StyledButton, StyledDetailesDiv, StyledDiv, StyledImageDiv, StyledModal, StyledPDiv, StyledProductsDiv } from "../Products/Products.styles";
import { Skeleton } from "antd";
import { toast } from "react-toastify";

export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    category: string
}

let productInitial = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    image: '',
    category: ''
}

const CategoryProducts = () => {
    
    const { category } = useParams();
    const {data, isLoading} = useGetCategoryProductsQuery({category})
    const [addProduct] = useAddProductMutation()
    const [action, setAction] = useState(false)   
    const [productsArray, setProductsArray] = useState(data)
    const [isOpen, setIsOpen] = useState({ product: productInitial, isOpen: false });

    const newProduct: Product = {
        id:21,
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        category: 'electronic'
    }
 
    const handleAddNewProduct = () => {
        addProduct(newProduct).unwrap()
        .then((res) => {
            setAction(true)
            setProductsArray([res, ...data])
            toast.success('Product added successfully');
        })
        .catch((error) => toast.error(error))
    }

    const handleCancelModal = () => {
        setIsOpen({ product: productInitial, isOpen: false })
    }
    
    return (
        <>
            {isLoading ? <Skeleton /> : 
                <StyledContent>
                <StyledProductsDiv>
                    <StyledDiv>
                        <h1>Products</h1>
                        <StyledButton onClick={handleAddNewProduct}>Add Product</StyledButton>
                    </StyledDiv>

                    <ProductCard
                        data={data} 
                        productsArray={productsArray} 
                        setAction={setAction} 
                        action={action} 
                        setProductsArray={setProductsArray} 
                        setIsOpen={setIsOpen} 
                        allData={data}
                    />
                    
                </StyledProductsDiv>
                </StyledContent>
            }
            <StyledModal title="" open={isOpen.isOpen} onCancel={handleCancelModal} footer={null}>
                <StyledImageDiv>
                    <img src={isOpen.product.image} alt="" style={{ width: '55%', maxHeight: '45vh' }} />   
                </StyledImageDiv>
                <h2>{isOpen.product.title}</h2>
                <StyledDetailesDiv>
                    <h3>Price: {isOpen.product.price}</h3>
                    <h3>Category: {isOpen.product.category}</h3>
                </StyledDetailesDiv>
                <StyledPDiv>"{isOpen.product.description}"</StyledPDiv>
            </StyledModal>
        </>
    )
}

export default CategoryProducts