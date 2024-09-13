import { Card } from "antd";
import { useGetAllProductsQuery } from "../../Store/services/products"
import { StyledContent } from "../Home/Home.styles"
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { StyledCard, StyledCol, StyledProductsDiv, StyledRow } from "./Products.styles";

const { Meta } = Card;

const Products = () => {

    const {data} = useGetAllProductsQuery({})
    
    return (
        <>
            <StyledContent>
            <StyledProductsDiv>
                <h1>Products</h1>
                <StyledRow>
                    {data?.map((product: any) => (
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