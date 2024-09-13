import { DesktopOutlined, PieChartOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd"
import { useState } from "react";

const Sidebar: React.FC = () => {
    const { Sider } = Layout;
    type MenuItem = Required<MenuProps>['items'][number];
    const [collapsed, setCollapsed] = useState(false);

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
        } as MenuItem;
    }
    
    const items: MenuItem[] = [
        getItem('Home', '1', <PieChartOutlined />),
        getItem('Categories', 'sub1', <UserOutlined />, [
            getItem('one', '3'),
            getItem('two', '4'),
            getItem('three', '5'),
        ]),
        getItem('Products', '2', <DesktopOutlined />)
        ];
    
    return (
        <Sider collapsible breakpoint="sm" collapsedWidth="80px" collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    )
}

export default Sidebar