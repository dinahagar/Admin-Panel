import { Button, Card, Col, Input, Modal } from "antd";
import styled from "styled-components";

export const StyledProductsDiv = styled.div`
    padding: 24px;
    min-height: 360px;
    background: #fff;
    border-radius: 8px;
    max-height: 80vh;
    height: 80vh;
    margin-top: 20px;
    display: block;
    overflow-y: auto;
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

    @media (max-width: 430px) {
        display: block;
    }
`

export const StyledButton = styled(Button)`
    border: none;
    background: #002140;
    color: #fff;

    @media (max-width: 430px) {
        margin-bottom: 5px;
    }
`

export const StyledCard = styled(Card)`
    height: 292px;
    .ant-card-cover {
        display: flex;
        justify-content: center;
        margin: 10px;
        height: 120px;
    }
    .ant-card-body {
        height: 95px;
    }
    .ant-card-actions {
        height: 48px;
    }
`

export const StyledModal = styled(Modal)`
    margin-top: -45px !important;
`

export const StyledImageDiv = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledDetailesDiv = styled.div`
    display: flex;
    justify-content: space-between;
    color: brown;
`

export const StyledPDiv = styled.p`
    font-weight: bold;
`

export const StyledButtonsDiv = styled.div`
    display: flex;
    gap: 10px;
`

export const StyledSearchInput = styled(Input)`
    position: absolute;
    top: -52px;
    left: 15px;
    width: 40%;
`