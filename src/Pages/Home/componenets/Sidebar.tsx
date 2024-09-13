import { DesktopOutlined, PieChartOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd"
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
    const { Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    const items = [
        {
            key: '/',
            label: <Link to='/'>Home</Link>,
            icon: <UserOutlined />,
        },
        {
            key: '/products',
            label: <Link to='/products'>Products</Link>,
            icon: <DesktopOutlined />,
        },
        {
            key: '/categories',
            label: 'Categories',
            icon: <PieChartOutlined />,
            children: [
                {
                  key: 'g1',
                  label: 'Item 1',
                  type: 'group',
                },
            ]
        },
    ]
    
    return (
        <>
            {location.pathname !== "/login" && (
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