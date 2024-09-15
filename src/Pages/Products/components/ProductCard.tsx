import { DeleteOutlined, EditOutlined, EyeOutlined, SearchOutlined } from "@ant-design/icons"
import { StyledCard, StyledCol, StyledSearchInput } from "../Products.styles"
import { useDeleteProductMutation, useUpdateProductMutation } from "../../../Store/services/products"
import { Card, Row } from "antd";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteProductItem, editProduct } from "../../../Store/reducers/productsSlice";
import { useEffect, useState } from "react";
import { Product, ProductCardProps } from "../../../Types/products";

const { Meta } = Card;

const ProductCard: React.FC<ProductCardProps> = ({data, setIsOpen, allData}) => {
    const dispatch = useDispatch()
    const [deleteProduct] = useDeleteProductMutation()
    const [updateProduct] = useUpdateProductMutation()
    const [products, setProducts] = useState(data)

    useEffect(() => {
        setProducts(data)
    }, [allData, data])

    const updatedProduct: Product = {
        id: 22,
        title:'new title',
        price: 100,
        category:'new category',
        description:'new description',
        image:'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'
    }

    const handleDeleteProduct = (id: number) => {
        deleteProduct({id}).unwrap()
        .then((res) => {            
            dispatch(deleteProductItem(res))
            toast.success('Product deleted successfully');
        })
        .catch((error) => toast.error(error))
    }

    const handleUpdateProduct = (index: number, product: Product) => {        
        updateProduct(product).unwrap()
        .then(() => {
            dispatch(editProduct({index, updatedProduct}))
            toast.success('Product updated successfully');
        })
        .catch((error) => toast.error(error))
    }
    
    const handleSearch = (input: string) => {
        if(input.trim() !== '') {
            const searchTitleResult = allData?.filter((product: { title: string; }) => product.title.toLowerCase().includes(input.toLowerCase()))
            setProducts(searchTitleResult)
        }else {
            setProducts(data)
        }
    }
    
    return (
        <>
            <StyledSearchInput 
                size="large" 
                placeholder="Search" 
                prefix={<SearchOutlined />} 
                onChange={(e) => handleSearch(e.target.value)}
            />
            <Row>
                {products?.map((product: Product, index: number) => (
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
                                <EditOutlined key="edit" onClick={() => handleUpdateProduct(index, product)}/>,
                                <EyeOutlined key="view"  onClick={() => setIsOpen({ product: product, isOpen: true })} />
                            ]}
                        >
                            <Meta
                                title={product.title}
                                description={product.category}
                            />
                        </StyledCard>
                    </StyledCol>
                ))}
            </Row>

        </>
    )
}

export default ProductCard