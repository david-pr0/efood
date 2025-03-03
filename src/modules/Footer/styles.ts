import styled from "styled-components";

export const StyledFooter = styled.footer `
    max-height: 300px;
    height: 100%;
    background-color: #FFEBD9;
    color: #E66767;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LinkList = styled.ul `
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 32px;
    margin-bottom: 80px;
    list-style: none;

    li {
        cursor: pointer;
    }
`

export const StyledText = styled.p `
    color: #E66767;
    max-width: 480px;
    margin: 0 auto;
    font-size: 10px;
    text-align: center;
`