import { DesktopOutlined, PieChartOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd"
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledLink } from "../Home.styles";

const Sidebar: React.FC = () => {
    const { Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    const items = [
        {
            key: '/home',
            label: <Link to='/home'>Home</Link>,
            icon: <UserOutlined />,
        },
        {
            key: '/products',
            label: <Link to='/products'>Products</Link>,
            icon: <DesktopOutlined />,
        },
        {
            key: '/categories',
            label: <StyledLink to='/categories'>Categories</StyledLink>,
            icon: <PieChartOutlined />,
            children: [
                {
                  key: 'g1',
                  label: <StyledLink to='/category/electronics'>Electronics</StyledLink>,
                  type: 'group',
                },
                {
                  key: 'g2',
                  label: <StyledLink to='/category/jewelery'>Jewelery</StyledLink>,
                  type: 'group',
                },
                {
                  key: 'g3',
                  label: <StyledLink to="/category/men's%20clothing">Men's clothing</StyledLink>,
                  type: 'group',
                },
                {
                  key: 'g4',
                  label: <StyledLink to="/category/women's clothing">Women's clothing</StyledLink>,
                  type: 'group',
                }
            ]
        },
    ]
    
    return (
        <>
            {location.pathname !== "/" && (
            <Sider
                collapsible
                breakpoint="sm"
                collapsedWidth="80px"
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            )}
        </>
    )
}

export default Sidebar