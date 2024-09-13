import { Skeleton } from "antd"
import { useGetAllCategoriesQuery } from "../../Store/services/categories"
import { StyledContent } from "../Home/Home.styles"
import { StyledCard, StyledProductsDiv, StyledRow } from "./Categories.styles"
import { useNavigate } from "react-router-dom"

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
                                <StyledCard 
                                    style={{ backgroundColor: colors[index % colors.length] }} 
                                    key={category.id}
                                    onClick={() => navigate(`/category/${category}`)}
                                >
                                    <h1>{category}</h1>
                                </StyledCard>
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