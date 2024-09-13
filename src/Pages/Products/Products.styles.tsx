import { Button, Card, Col, Row } from "antd";
import styled from "styled-components";

export const StyledProductsDiv = styled.div`
    padding: 24px;
    min-height: 360px;
    background: #fff;
    border-radius: 8px;
    height: 94vh;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    display: grid;
`
export const StyledRow = styled(Row)`
`

export const StyledCol = styled(Col)`
    justify-content: center;
    display: grid;
    margin-bottom: 10px;
`

export const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledButton = styled(Button)`
    border: none;
    background: #002140;
    color: #fff;
`

export const StyledCard = styled(Card)`
    .ant-card-cover {
        display: flex;
        justify-content: center;
        margin: 10px;
        min-height: 120px;
    }
    .ant-card-body {
        min-height: 95px;
    }
    .ant-card-actions {
        min-height: 48px;
    }
`