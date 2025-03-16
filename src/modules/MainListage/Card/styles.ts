import styled from "styled-components";

type Props = {
    img: string
}

export const TitleContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StyledTitle = styled.h2 `
    color: #E66767;
    font-size: 18px;
`

export const StyledText = styled.p `
    color: #E66767;
    margin: 16px 0;
`

export const ImageContainer = styled.div<Props> `
    max-width: 470px;
    max-height: 216px;
    min-height: 216px;
    width: 100%;
    height: 100%;
    background-image: url(${({ img }: Props) => img});
    display: flex;
    justify-content: end;
    padding: 16px;
    gap: 8px;
    cursor: pointer;
`

export const Resume = styled.div `
    padding: 8px;
    border: 1px solid #E66767;
    border-top: none;
    max-width: 470px;
    min-height: 200px;
    max-height: 200px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
    line-height: 22px;

    span {
        cursor: pointer;
        max-width: 80px;
        text-align: center;
        font-size: 14px;
    }
`

export const Note = styled.div `
    gap: 8px;
    span {
        color: #E66767;
        font-weight: bold;
    }

    img {
        width: 18px;
        height: 18px;
    }
`