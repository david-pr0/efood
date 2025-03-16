import * as S from "./styles"
import pizza from "../../assets/pizza.png"
import close from "../../assets/close.png"
import { StyledButton } from "../ProfileListage/ProfileCard/styles"
import { useAppDispatch } from "../../assets/redux/store"
import { setNotVisible } from "../../assets/redux/slices/modalSlice"

const CardItem = () => {
    const dispatch = useAppDispatch()
    const closeModal = () => {
        dispatch(setNotVisible())
    }
    return (
        <S.StyledDiv>
            <div>
                <S.Image src={pizza} alt="pizza" />
            </div>
            <S.StyledText>
                <h3>Pizza Marguerita</h3>
                <p>
                    A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
                </p>
                <p>
                    Serve: de 2 a 3 pessoas
                </p>
                <StyledButton width="240px">Adicionar ao carrinho - R$ 60,90</StyledButton>
            </S.StyledText>
            <S.Close src={close} alt="close icon" onClick={closeModal}/>
        </S.StyledDiv>
    )
}

export default CardItem