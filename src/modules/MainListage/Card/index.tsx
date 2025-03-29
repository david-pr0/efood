import Tag from "../../Tag";
import * as S from "./styles";
import star from "../../../assets/Star.png";
import { useNavigate } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  text: string;
  image: string;
  score: number;
  tipo: string;
  destacado: boolean;
};

const Card = ({ id, title, text, image, score, tipo, destacado }: Props) => {
  const navigate = useNavigate();

  return (
    <li>
      <S.ImageContainer img={image} onClick={() => navigate(`/profile/${id}`)}>
        {destacado && <Tag text="Destaques da semana" />}
        <Tag text={tipo} />
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
        <div onClick={() => navigate(`/profile/${id}`)}>
          <Tag text="Saiba mais" />
        </div>
      </S.Resume>
    </li>
  );
};

export default Card;
