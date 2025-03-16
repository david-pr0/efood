import styled from "styled-components";

export const StyledDiv = styled.div `
    width: 100%;
    height: 340px;
    display: flex;
    padding: 32px;
    background-color: #E66767;
    gap: 24px;
    position: relative;
`

export const Image = styled.img `
    width: 280px;
    height: 280px;
    object-fit: fill;
`

export const StyledText = styled.div `
    display: flex;
    flex-direction: column;
    gap: 16px;

    h3 {
        font-size: 18px;
        font-weight: 900;
    }

    p {
        font-size: 14px;
        line-height: 22px;
    }
`

export const Close = styled.img `
    position: absolute;
    top: 0;
    right: 0;
    width: 16px;
    height: 16px;
    cursor: pointer;
    margin-top: 8px;
    margin-right: 8px;
`