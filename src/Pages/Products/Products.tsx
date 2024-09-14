import { useAddProductMutation, useGetAllProductsQuery } from "../../Store/services/products"
import { StyledContent } from "../Home/Home.styles"
import { StyledButton, StyledButtonsDiv, StyledDetailesDiv, StyledDiv, StyledImageDiv, StyledModal, StyledPDiv, StyledProductsDiv } from "./Products.styles";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { Button, Dropdown, MenuProps, Pagination, Skeleton, Space } from "antd";
import { toast } from "react-toastify";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, setApiItems } from "../../Store/reducers/productsSlice";

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

export interface IsOpenState {
    product: typeof productInitial;
    isOpen: boolean;
}

const Products = () => {
    const dispatch = useDispatch()
    const ITEMS_PER_PAGE = 10;
    const [page, setPage] = useState(1)

    const {data, isLoading} = useGetAllProductsQuery({ page, limit: 20})

    useEffect(() => {
        if (data) {
          dispatch(setApiItems(data)); 
        }
    }, [data, dispatch]);

    const productsItems = useSelector((state: any) => state.products.items)

    const [addProduct] = useAddProductMutation()
    const [isOpen, setIsOpen] = useState<IsOpenState>({ product: productInitial, isOpen: false });
    const [filterPlaceholder, setFilterPlaceholder] = useState('Filter by category')

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedProducts = productsItems?.slice(startIndex, endIndex);
    
    const newProduct: Product = {
        id: 21,
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        category: 'electronic'
    }
 
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
        addProduct(newProduct).unwrap()
        .then((res) => {
            dispatch(addNewProduct(res))
            toast.success('Product added successfully');
        })
        .catch((error) => toast.error(error))
    }

    const handleCancelModal = () => {
        setIsOpen({ product: productInitial, isOpen: false })
    }
    
    const handlePageChange = (page: number) => {
        setPage(page)
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

                        <ProductCard 
                            data={paginatedProducts} 
                            setIsOpen={setIsOpen} 
                            allData={productsItems}
                        />
                    </StyledProductsDiv>
                    </StyledContent>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '11px' }}>
                        <Pagination 
                            defaultCurrent={1} 
                            total={20} 
                            onChange={handlePageChange}
                        />
                    </div>
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