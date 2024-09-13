import { Button, Dropdown, MenuProps } from "antd"
import { UserOutlined } from "@ant-design/icons";
import { StyledHeader } from "../Home.styles";
import { Link } from "react-router-dom";

const Header: React.FC = () => {  

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <Link to='/login'>Logout</Link>
          ),
        }
      ];

    return (
        <StyledHeader>
            <Dropdown menu={{ items }} placement="bottom">
                <Button><UserOutlined /></Button>
            </Dropdown>
        </StyledHeader>
    )
}

export default Header