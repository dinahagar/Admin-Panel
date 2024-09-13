import { Card } from "antd";
import { useAddProductMutation, useDeleteProductMutation, useGetAllProductsQuery, useUpdateProductMutation } from "../../Store/services/products"
import { StyledContent } from "../Home/Home.styles"
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { StyledButton, StyledCard, StyledCol, StyledDetailesDiv, StyledDiv, StyledImageDiv, StyledModal, StyledPDiv, StyledProductsDiv, StyledRow } from "./Products.styles";
import { useState } from "react";

const { Meta } = Card;

interface Product {
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

const Products = () => {

    const {data} = useGetAllProductsQuery({})
    const [addProduct] = useAddProductMutation()
    const [deleteProduct] = useDeleteProductMutation()
    const [updateProduct] = useUpdateProductMutation()
    const [action, setAction] = useState(false)   
    const [productsArray, setProductsArray] = useState(data)
    const [isOpen, setIsOpen] = useState({ product: productInitial, isOpen: false });

    const products = action ? productsArray : data 
    const newProduct: Product = {
        id:21,
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        category: 'electronic'
    }
    const updatedProduct: Product = {
        id: 22,
        title:'new title',
        price: 100,
        category:'new category',
        description:'new description',
        image:'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'
    }
 
    const handleAddNewProduct = () => {
        addProduct(newProduct).unwrap()
        .then((res) => {
            setAction(true)
            setProductsArray([res, ...data])
        })
        .catch(() => {})
    }

    const handleDeleteProduct = (id: number) => {
        deleteProduct({id}).unwrap()
        .then((res) => {
            setAction(true)
            const notDeleted = products?.filter((product: Product) => product.id !== res.id)
            setProductsArray(notDeleted)
        })
        .catch(() => {})
    }

    const handleUpdateProduct = (product: any) => {        
        updateProduct(product).unwrap()
        .then((res) => {
            setAction(true)
            const notDeleted = products?.filter((product: { id: any; }) => product.id !== res.id)
            setProductsArray([updatedProduct, ...notDeleted])
        })
        .catch(() => {})
    }

    const handleCancelModal = () => {
        setIsOpen({ product: productInitial, isOpen: false })
    }
    
    return (
        <>
            <StyledContent>
            <StyledProductsDiv>
                <StyledDiv>
                    <h1>Products</h1>
                    <StyledButton onClick={handleAddNewProduct}>Add Product</StyledButton>
                </StyledDiv>
                <StyledRow>
                    {products?.map((product: any) => (
                        <StyledCol xs={24} sm={24} md={12} lg={8} xl={6} key={product.id}>
                            <StyledCard
                                style={{ width: 200 }}
                                cover={
                                <img
                                    alt="example"
                                    src={product.image}
                                    style={{ width: '50%' }}
                                />
                                }
                                actions={[
                                <DeleteOutlined key="delete" onClick={() => handleDeleteProduct(product.id)}/>,
                                <EditOutlined key="edit" onClick={() => handleUpdateProduct(product)}/>,
                                <EyeOutlined key="view"  onClick={() => setIsOpen({ product: product, isOpen: true })} />,
                                ]}
                            >
                                <Meta
                                    title={product.title}
                                    description={product.category}
                                />
                            </StyledCard>
                        </StyledCol>
                    ))}
                </StyledRow>
            </StyledProductsDiv>
            </StyledContent>
            
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

export default Products