import styled from "styled-components";

type Props = {
    width: string,
}

export const StyledCard = styled.div `
    background-color: #e66767;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h3 {
        font-size: 16px;
        font-weight: 900;
    }

    p {
        font-size: 14px;
        line-height: 22px;
    }

    img {
        width: 100%;
        cursor: pointer;
    }
`

export const StyledButton = styled.button <Props> `
    cursor: pointer;
    background-color: #FFEBD9;
    color: #e66767;
    padding: 4px 0;
    border: none;
    font-weight: bold;
    font-size: 14px;
    max-width: ${({width}) => (width === "100%" ? "100%" : "240px")};
`