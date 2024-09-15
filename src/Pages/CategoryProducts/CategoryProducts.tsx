import { useAddProductMutation } from "../../Store/services/products"
import { StyledContent } from "../Home/Home.styles"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCategoryProductsQuery } from "../../Store/services/categories";
import ProductCard from "../Products/components/ProductCard";
import { StyledButton, StyledDetailesDiv, StyledDiv, StyledImageDiv, StyledModal, StyledPDiv, StyledProductsDiv } from "../Products/Products.styles";
import { Skeleton } from "antd";
import { toast } from "react-toastify";
import { addNewProduct } from "../../Store/reducers/productsSlice";
import { useDispatch } from "react-redux";
import { Product } from "../../Types/products";
import ProductModal from "../Products/components/ProductModal";

const CategoryProducts: React.FC = () => {

    const dispatch = useDispatch()
    const { category } = useParams();
    const {data, isLoading} = useGetCategoryProductsQuery({category})
    const [addProduct] = useAddProductMutation()

    const [formData, setFormData] = useState({
        id: '21',
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
    })
    const [isOpen, setIsOpen] = useState<{product: Product, isOpen: boolean}>({ product: formData, isOpen: false });

    const [isModalOpen, setIsModalOpen] = useState(false)
 
    const handleAddNewProduct = () => {
        setIsModalOpen(true)
    }
    
    const handleSubmit = () => {
        addProduct(formData).unwrap()
        .then((res) => {
            dispatch(addNewProduct(res))
            toast.success('Product added successfully');
        })
        .catch((error) => toast.error(error))
        setIsModalOpen(false)
    }

    const handleCancelModal = () => {
        setIsOpen({ product: formData, isOpen: false })
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

                    <ProductModal 
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                    />

                    <ProductCard
                        data={data} 
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