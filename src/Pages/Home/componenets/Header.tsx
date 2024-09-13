import { Button, Dropdown, MenuProps } from "antd"
import { UserOutlined } from "@ant-design/icons";
import { StyledHeader } from "../Home.styles";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {  
  const location = useLocation();

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <Link to='/login'>Logout</Link>
          ),
        }
      ];

    return (
      <>
        {location.pathname !== "/login" && (
          <StyledHeader>
              <Dropdown menu={{ items }} placement="bottom">
                  <Button><UserOutlined /></Button>
              </Dropdown>
          </StyledHeader>
        )}
      </>
    )
}

export default Header