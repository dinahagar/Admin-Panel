import { Card, Row } from "antd";
import styled from "styled-components";

export const StyledProductsDiv = styled.div`
    padding: 24px;
    min-height: 360px;
    background: #fff;
    border-radius: 8px;
    max-height: 85vh;
    height: 85vh;
    margin-top: 20px;
    display: block;
    overflow-y: auto;
`

export const StyledRow = styled(Row)`
    display: flex;
    justify-content: center;
    gap: 45px;
`

export const StyledCategoriesCard = styled(Card)`
    width: 300px;
    justify-content: center;
    cursor: pointer;

    .ant-card-body {
        display: flex;
        justify-content: center;
    }

    @media (max-width: 1100px) {
        width: 100%;
    }
`