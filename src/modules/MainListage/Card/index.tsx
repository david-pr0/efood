import Tag from "../../Tag"
import * as S from "./styles"
import star from "../../../assets/Star.png"
import { useNavigate } from "react-router-dom"

type Props = {
    title: string,
    text: string,
    image: number,
    score: number,
    card: number
}

const Card = ({title, text, image, score, card}: Props) => {
    const navigate = useNavigate()
    return (
        <li>
            <S.ImageContainer imgType={image} onClick={() => navigate("/profile")}>
            {
                card === 1 ?
                (
                    <>
                        <Tag text="Destaques da semana" />
                        <Tag text="Japonesa" />
                    </>
                ) :
                <Tag text="Italiana"/>
            }
            </S.ImageContainer>
            <S.Resume>
                <S.TitleContainer>
                    <S.StyledTitle>{title}</S.StyledTitle>
                    <S.Note className="flex">
                        <span>{score}</span>
                        <img src={star} alt="star" />
                    </S.Note>
                </S.TitleContainer>
                <S.StyledText>{text}</S.StyledText>
                <div onClick={() => navigate("/profile")}>
                    <Tag text="Saiba mais"/>
                </div>
            </S.Resume>
        </li>
    )
}

export default Card