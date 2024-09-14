import { Col, Skeleton } from "antd"
import { useGetAllCategoriesQuery } from "../../Store/services/categories"
import { StyledContent } from "../Home/Home.styles"
import { StyledButton, StyledCategoriesCard, StyledCategoryDiv, StyledProductsDiv, StyledRow } from "./Categories.styles"
import { useNavigate } from "react-router-dom"
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCategory, deleteCategory, editCategory, setApiItems } from "../../Store/reducers/categoriesSlice"
import { toast } from "react-toastify"

const Categories = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const colors = [ '#FFDDC1', '#FFC3A0', '#D5AAFF', '#D4E157' ];
    const {data, isLoading} = useGetAllCategoriesQuery()

    useEffect(() => {
        if (data) {
          dispatch(setApiItems(data)); 
        }
    }, [data, dispatch]);

    
    const categoryItems = useSelector((state: any) => state.categories.items)
    
    const handleAddCategory = () => {
        dispatch(addCategory('New Category'))
        toast.success('Category added successfully')
    }

    const handleDeleteCategory = (item: string) => {
        dispatch(deleteCategory(item))
        toast.success('Category deleted successfully')
    }

    const handleEditCategory = (index: number, item: string) => {
        dispatch(editCategory({ index, item }))
        toast.success('Category updated successfully')
    }
    
    return (
        <>
            {isLoading ? <Skeleton /> : 
                <StyledContent>
                <StyledProductsDiv>
                    <StyledCategoryDiv>
                        <h1>Categories</h1>
                        <StyledButton onClick={handleAddCategory}>Add Category</StyledButton>
                    </StyledCategoryDiv>
                    <StyledRow>
                        {categoryItems?.map((category: any, index: number) => (
                            <Col xs={24} sm={24} md={12} lg={8} xl={8} key={index}>
                                <StyledCategoriesCard
                                    style={{ backgroundColor: colors[index % colors.length] }}
                                    actions={[
                                        <DeleteOutlined key="delete" onClick={() => handleDeleteCategory(category)}/>,
                                        <EditOutlined key="edit" onClick={() => handleEditCategory(index, 'Updated Category')}/>,
                                        <EyeOutlined key="view"  onClick={() => navigate(`/category/${category}`)} />
                                    ]}
                                >
                                    <h1>{category}</h1>
                                </StyledCategoriesCard>
                            </Col>
                        ))}
                    </StyledRow>
                </StyledProductsDiv>
                </StyledContent>
            }
        </>
    )
}

export default Categories