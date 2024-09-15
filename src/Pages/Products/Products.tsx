import { useAddProductMutation, useGetAllProductsQuery } from "../../Store/services/products"
import { StyledContent } from "../Home/Home.styles"
import { StyledButton, StyledButtonsDiv, StyledDetailesDiv, StyledDiv, StyledImageDiv, StyledModal, StyledPDiv, StyledProductsDiv } from "./Products.styles";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { Button, Dropdown, MenuProps, Skeleton, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, setApiItems } from "../../Store/reducers/productsSlice";
import { IsOpenState, productsState } from "../../Types/products";
import ProductModal from "./components/ProductModal";
import { toast, ToastContentProps } from "react-toastify";

const Products: React.FC = () => {
    const dispatch = useDispatch()

    const {data, isLoading} = useGetAllProductsQuery({ page: 1, limit: 20})
    const [addProduct] = useAddProductMutation()

    useEffect(() => {
        if (data) {
          dispatch(setApiItems(data)); 
        }
    }, [data, dispatch]);

    const productsItems = useSelector((state: { products: productsState }) => state.products.items)

    const [formData, setFormData] = useState({
        id: '21',
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
    })

    const [isOpen, setIsOpen] = useState<IsOpenState>({ product: formData, isOpen: false });
    const [filterPlaceholder, setFilterPlaceholder] = useState('Filter by category')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const items: MenuProps['items'] = [
        {
          label: 'Electronics',
          key: '1',
          onClick: () => handleFilterProducts('electronics')
        },
        {
          label: 'Jewelery',
          key: '2',
          onClick: () => handleFilterProducts('jewelery')
        },
        {
          label: "Men's clothing",
          key: '3',
          onClick: () => handleFilterProducts("men's clothing")
        },
        {
          label: "Women's clothing",
          key: '4',
          onClick: () => handleFilterProducts("women's clothing")
        }
    ];
      
    const menuProps = {
        items
    };
    
    const handleAddNewProduct = () => {
        setIsModalOpen(true)
    }
    
    const handleSubmit = () => {
        addProduct(formData).unwrap()
        .then((res: any) => {
            dispatch(addNewProduct(res))
            toast.success('Product added successfully');
        })
        .catch((error: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | ((props: ToastContentProps<unknown>) => ReactNode) | null | undefined) => toast.error(error))
        setIsModalOpen(false)
    }

    const handleCancelModal = () => {
        setIsOpen({ product: formData, isOpen: false })
    }
    
    const handleFilterProducts = (category: string) => {
        const categoryProducts = data.filter((product: { category: string; }) => product.category === category)
        dispatch(setApiItems(categoryProducts)); 
        setFilterPlaceholder(category)
    }
    
    return (
        <>
            {isLoading ? <Skeleton /> : 
                <>
                    <StyledContent>
                    <StyledProductsDiv>
                        <StyledDiv>
                            <h1>Products</h1>
                            <StyledButtonsDiv>
                                <Dropdown menu={menuProps}>
                                    <Button>
                                        <Space>
                                            {filterPlaceholder}
                                            <DownOutlined />
                                        </Space>
                                    </Button>
                                </Dropdown>
                                <StyledButton onClick={handleAddNewProduct}>Add Product</StyledButton>
                            </StyledButtonsDiv>
                        </StyledDiv>

                        <ProductModal 
                            isModalOpen={isModalOpen}
                            setIsModalOpen={setIsModalOpen}
                            formData={formData}
                            setFormData={setFormData}
                            handleSubmit={handleSubmit}
                        />

                        <ProductCard 
                            data={productsItems} 
                            setIsOpen={setIsOpen} 
                        />
                    </StyledProductsDiv>
                    </StyledContent>
                </>
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

export default Products