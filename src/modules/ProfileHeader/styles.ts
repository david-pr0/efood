import styled from "styled-components";
import background from "../../assets/fundo.png"

export const HeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-image: url(${background});
    height: 180px;
    padding: 32px 0;
`

export const HeaderElements = styled.div `
    justify-content: space-between;
    img {
        cursor: pointer;
    }
    h3 {
        color: #e66767;
    }
`