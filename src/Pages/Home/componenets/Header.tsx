import { Button, Dropdown, MenuProps } from "antd"
import { UserOutlined } from "@ant-design/icons";
import { StyledHeader } from "../Home.styles";

const Header: React.FC = () => {  
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              Logout
            </a>
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