import pizza from "../../../assets/pizza.png"
import * as S from "./styles"

const ProfileCard = () => {
    return (
        <>
            <S.StyledCard>
                <img src={pizza} alt="pizza" />
                <h3>Pizza Marguerita</h3>
                <p>
                    A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                </p>
                <S.StyledButton>Adicionar ao carrinho</S.StyledButton>
            </S.StyledCard>
        </>
    )
}

export default ProfileCard