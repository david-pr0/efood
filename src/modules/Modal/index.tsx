import { useAppSelector } from "../../assets/redux/store"
import CardItem from "../CardItem"
import * as S from "./styles"

const Modal = () => {
    const selector = useAppSelector(state => state.modal.isVisible)

    return (
        <S.ModalContainer isvisible={selector}>
            <div className="container">
                <CardItem />
            </div>
        </S.ModalContainer>
    )
}

export default Modal