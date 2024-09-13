import { useUserLoginMutation } from "../../Store/services/login";
import { StyledContent, StyledContentDiv } from "../Home/Home.styles"
import { Button, Form, Input } from "antd"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [login] = useUserLoginMutation()
    const navigate = useNavigate();

    type FieldType = {
        username?: string;
        password?: string;
    };
      
    const onSubmit = () => {
        login({    
            username: 'johnd',
            password: 'm38rmF$'
        }).unwrap()
        .then((res) => {
            console.log(res);
            localStorage.setItem('token', res.token)
            navigate('/')
        })
        .catch(() => {})
    };

    return (
        <StyledContent>
            <StyledContentDiv>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onSubmit}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input size="large" placeholder="Username" />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password size="large" placeholder="Password" />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </StyledContentDiv>
        </StyledContent>
    )
}

export default Login