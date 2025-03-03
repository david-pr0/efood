import styled from "styled-components";
import sushi from "../../../assets/sushi.png"
import ladolcevita from "../../../assets/ladolcevita.png"

type Props = {
    imgType: number
}

export const TitleContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StyledTitle = styled.h2 `
    color: #E66767;
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
    background-image: url(${({ imgType }: Props) => (imgType === 1 ? sushi : ladolcevita)});
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

    span {
        cursor: pointer;
        max-width: 80px;
        text-align: center;
    }
`

export const Note = styled.div `
    gap: 8px;
    span {
        color: #E66767;
        font-weight: bold;
    }
`