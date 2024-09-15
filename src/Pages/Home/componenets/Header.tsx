import { Button, Dropdown, MenuProps } from "antd"
import { UserOutlined } from "@ant-design/icons";
import { StyledHeader, StyledUserDiv, StyledUserH } from "../Home.styles";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {  
  const location = useLocation();

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <Link to='/' onClick={() => {
              localStorage.removeItem('token')
              localStorage.removeItem('username')
            }}>Logout</Link>
          ),
        }
      ];

      const userName = localStorage.getItem('username')

    return (
      <>
        {location.pathname !== "/" && (
          <StyledHeader>
            <StyledUserDiv>
              <StyledUserH>{userName}</StyledUserH>
              <Dropdown menu={{ items }} placement="bottom">
                  <Button><UserOutlined /></Button>
              </Dropdown>
            </StyledUserDiv>
          </StyledHeader>
        )}
      </>
    )
}

export default Header