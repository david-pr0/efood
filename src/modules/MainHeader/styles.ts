import styled from "styled-components";
import background from "../../assets/fundo.png"

export const HeaderContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-image: url(${background});
    height: 280px;
    padding: 32px 0;
`

export const StyledText = styled.p `
    color: #E66767;
    font-size: 36px;
    text-align: center;
    font-weight: bold;
    max-width: 540px;
    width: 100%;
`