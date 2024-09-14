import { DeleteOutlined, EditOutlined, EyeOutlined, SearchOutlined } from "@ant-design/icons"
import { StyledCard, StyledCol, StyledSearchInput } from "../Products.styles"
import { useDeleteProductMutation, useUpdateProductMutation } from "../../../Store/services/products"
import { Product } from "../Products"
import { Card, Row } from "antd";
import { toast } from "react-toastify";

const { Meta } = Card;

interface ProductCardProps {
    data?: any; 
    setAction: any;
    setProductsArray: any; 
    setIsOpen: any;
    action: boolean;
    productsArray: any;
    allData?: any
}

const ProductCard: React.FC<ProductCardProps> = ({data, productsArray, setAction, action, setProductsArray, setIsOpen, allData}) => {

    const products = action ? productsArray : data 
    const [deleteProduct] = useDeleteProductMutation()
    const [updateProduct] = useUpdateProductMutation()

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
            setAction(true)
            const notDeleted = products?.filter((product: Product) => product.id !== res.id)
            setProductsArray(notDeleted)
            toast.success('Product deleted successfully');
        })
        .catch((error) => toast.error(error))
    }

    const handleUpdateProduct = (product: any) => {        
        updateProduct(product).unwrap()
        .then((res) => {
            setAction(true)
            const notDeleted = products?.filter((product: { id: any; }) => product.id !== res.id)
            setProductsArray([updatedProduct, ...notDeleted])
            toast.success('Product updated successfully');
        })
        .catch((error) => toast.error(error))
    }
    
    const handleSearch = (input: string) => {
        const searchTitleResult = allData?.filter((product: { title: string; }) => product.title.toLowerCase().startsWith(input.toLowerCase()))
        setAction(true);
        setProductsArray(searchTitleResult);
        if(input.trim() !== '') {
            setAction(true);
            setProductsArray(searchTitleResult);
        }else {
            setProductsArray(products);
            setAction(false);
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
                {products?.map((product: Product) => (
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