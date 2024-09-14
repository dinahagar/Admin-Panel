import { Button, Card, Row } from "antd";
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

export const StyledCategoryDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledButton = styled(Button)`
    background-color: #002140;
    color: #fff;
`

export const StyledCategoriesCard = styled(Card)`
    width: 300px;
    justify-content: center;
    cursor: pointer;
    min-height: 223px;

    .ant-card-body {
        display: flex;
        justify-content: center;
        min-height: 173px;
    }

    @media (max-width: 1100px) {
        width: 100%;
    }
`