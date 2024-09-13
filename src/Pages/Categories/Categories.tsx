import { Skeleton } from "antd"
import { useGetAllCategoriesQuery } from "../../Store/services/categories"
import { StyledContent } from "../Home/Home.styles"
import { StyledCategoriesCard, StyledProductsDiv, StyledRow } from "./Categories.styles"
import { useNavigate } from "react-router-dom"
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons"

const Categories = () => {
    const {data, isLoading} = useGetAllCategoriesQuery({})
    const navigate = useNavigate()

    const colors = [
        '#FFDDC1', 
        '#FFC3A0',
        '#D5AAFF',
        '#D4E157'
    ];
    
    return (
        <>
            {isLoading ? <Skeleton /> : 
                <StyledContent>
                <StyledProductsDiv>
                    <div>
                        <h1>categories</h1>
                    </div>
                    <StyledRow>
                        {data?.map((category: any, index: number) => (
                            <>
                                <StyledCategoriesCard
                                    style={{ backgroundColor: colors[index % colors.length] }}
                                    actions={[
                                        <DeleteOutlined key="delete" onClick={() => {}}/>,
                                        <EditOutlined key="edit" onClick={() => {}}/>,
                                        <EyeOutlined key="view"  onClick={() => navigate(`/category/${category}`)} />
                                    ]}
                                >
                                    <h1>{category}</h1>
                                </StyledCategoriesCard>
                            </>
                        ))}
                    </StyledRow>
                </StyledProductsDiv>
                </StyledContent>
            }
        </>
    )
}

export default Categories