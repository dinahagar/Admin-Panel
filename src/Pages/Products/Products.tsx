import { Button, Card } from "antd";
import { useAddProductMutation, useGetAllProductsQuery } from "../../Store/services/products"
import { StyledContent } from "../Home/Home.styles"
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { StyledButton, StyledCard, StyledCol, StyledDiv, StyledProductsDiv, StyledRow } from "./Products.styles";
import { useState } from "react";

const { Meta } = Card;

const Products = () => {

    const {data} = useGetAllProductsQuery({})
    const [addProduct] = useAddProductMutation()
    const [add, setAdd] = useState(false)   
    const [productsArray, setProductsArray] = useState(data)

    const newProduct = {
        id:21,
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        category: 'electronic'
    }
 
    const handleAddNewProduct = () => {
        addProduct(newProduct).unwrap()
        .then(() => {
            setAdd(true)
            setProductsArray([newProduct, ...data])
        })
        .catch((error) => console.log(error))
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
                    {(add ? productsArray : data )?.map((product: any) => (
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
                                <DeleteOutlined key="delete" />,
                                <EditOutlined key="edit" />,
                                <EyeOutlined key="view" />,
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
        </>
    )
}

export default Products