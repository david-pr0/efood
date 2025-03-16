import pizza from "../../../assets/pizza.png"
import { setVisible, useAppDispatch } from "../../../assets/redux/store"
import * as S from "./styles"

const ProfileCard = () => {
    const dispatch = useAppDispatch()
    const setIsVisible = () => {
        dispatch(setVisible())
    }
    return (
        <>
            <S.StyledCard>
                <img src={pizza} alt="pizza" onClick={setIsVisible} />
                <h3>Pizza Marguerita</h3>
                <p>
                    A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                </p>
                <S.StyledButton width="100%" onClick={setIsVisible}>Adicionar ao carrinho</S.StyledButton>
            </S.StyledCard>
        </>
    )
}

export default ProfileCard