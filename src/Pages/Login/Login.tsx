import { useUserLoginMutation } from "../../Store/services/login";
import { StyledContent } from "../Home/Home.styles"
import { Button, Form, Input } from "antd"
import { useNavigate } from "react-router-dom";
import { StyledLoginDiv } from "./Login.styles";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Store/reducers/loginSlice";

const Login = () => {

    const { username, password } = useSelector((state: any) => state.login)
    const dispatch = useDispatch()
    const [login] = useUserLoginMutation()
    const navigate = useNavigate();

    type FieldType = {
        username?: string;
        password?: string;
    };
  
    const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setUser({ username: e.target.value}))
    }

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setUser({ password: e.target.value}))
    }

    const onSubmit = () => {
        login({    
            username: username,
            password: password
        }).unwrap()
        .then((res) => {
            localStorage.setItem('token', res.token)
            navigate('/')
        })
        .catch(() => {})
    };

    return (
        <StyledContent>
            <StyledLoginDiv>
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
                        <Input size="large" placeholder="Username" onChange={(e) => handleChangeUsername(e)} />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password size="large" placeholder="Password" onChange={(e) => handleChangePassword(e)} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </StyledLoginDiv>
        </StyledContent>
    )
}

export default Login