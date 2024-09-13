import { Layout } from "antd";
import styled from "styled-components";

const { Header, Content, Footer } = Layout;

export const StyledHeader = styled(Header)`
    padding: 20px;
    background: #fff;
    display: flex; 
    justify-content: end;
    align-items: center;
`

export const StyledFooter = styled(Footer)`
   text-align: center;
`

export const StyledLayout = styled(Layout)`
   min-height: 90vh;
`

export const StyledContent = styled(Content)`
    margin: 0 16px;
`

export const StyledContentDiv = styled.div`
    padding: 24px;
    min-height: 360px;
    background: #fff;
    border-radius: 8px;
    height: 95%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
`