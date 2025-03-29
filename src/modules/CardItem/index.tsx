import * as S from "./styles"
import close from "../../assets/close.png"
import { StyledButton } from "../ProfileListage/ProfileCard/styles"
import { useAppDispatch, useAppSelector } from "../../assets/redux/store"
import { setNotVisible } from "../../assets/redux/slices/modalSlice"

const CardItem = () => {
    const data = useAppSelector(state => state.activeModalSlice)
    const dispatch = useAppDispatch()
    const closeModal = () => {
        dispatch(setNotVisible())
    }
    return (
        <S.StyledDiv>
            <div>
                <S.Image src={data.img} alt="image" />
            </div>
            <S.StyledText>
                <h3>{data.name}</h3>
                <p>
                    {data.desc}
                </p>
                <p>
                    Serve: de {data.porcao}
                </p>
                <StyledButton width="240px">Adicionar ao carrinho - R$ {data.preco}</StyledButton>
            </S.StyledText>
            <S.Close src={close} alt="close icon" onClick={closeModal}/>
        </S.StyledDiv>
    )
}

export default CardItem