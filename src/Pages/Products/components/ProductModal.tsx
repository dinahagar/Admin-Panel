import { Form, Input, Select, Upload } from "antd"
import { StyledModal } from "../Products.styles"
import { PlusOutlined } from "@ant-design/icons"
import { useGetAllCategoriesQuery } from "../../../Store/services/categories"
import { Product } from "../../../Types/products"
import { Dispatch, SetStateAction } from "react"

interface productModal {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    formData: Product;
    setFormData: Dispatch<SetStateAction<Product>>;
    handleSubmit: () => void;
}
const ProductModal: React.FC<productModal> = ({isModalOpen, setIsModalOpen, formData, setFormData, handleSubmit}) => {

    const {data: categoriesList} = useGetAllCategoriesQuery()

    const handleCancelProductModal = () => {
        setIsModalOpen(false)
    }

    return (
        <StyledModal title="Add New Product" open={isModalOpen} onOk={handleSubmit} onCancel={handleCancelProductModal}>
        <Form name="form_item_path" layout="vertical" onFinish={() => {}}>
            <Form.Item label="Title" name="title">
                <Input size="large" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value})}/>
            </Form.Item>
            <Form.Item label="Price" name="price">
                <Input size="large" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value})}/>
            </Form.Item>
            <Form.Item label="Description" name="description">
                <Input size="large" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value})}/>
            </Form.Item>
            <Form.Item
                label="Select"
                name="Select"
            >
                <Select size="large" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e })}>
                    {categoriesList?.map(option => (
                        <Select.Option key={option} value={option}>
                            {option}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={() => {}}>
                <Upload action="/upload.do" listType="picture-card" onChange={(e) => setFormData({ ...formData, image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"})}>
                    <button value={formData.image} style={{ border: 0, background: 'none' }} type="button">
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </button>
                </Upload>
            </Form.Item>
        </Form>
    </StyledModal>

    )
}

export default ProductModal