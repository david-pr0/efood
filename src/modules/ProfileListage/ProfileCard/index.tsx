import { setActiveItem } from "../../../assets/redux/slices/activeModalSlice"
import { setVisible } from "../../../assets/redux/slices/modalSlice"
import { useAppDispatch } from "../../../assets/redux/store"
import * as S from "./styles"

type Props = {
    img: string,
    name: string,
    desc: string,
    preco: string,
    porcao: string
}

const ProfileCard = ({img, name, desc, preco, porcao}: Props) => {
    const dispatch = useAppDispatch()
    const setIsVisible = () => {
        dispatch(setVisible())
    }
    const setActive = (img: string, name: string, desc: string, preco: string, porcao: string) => {
        dispatch(setActiveItem({img, name, desc, preco, porcao}))
    }

    const changeModal = () => {
        setActive(img, name, desc, preco, porcao)
        setIsVisible()
    }

    const getDesc = (desc:string) => {
        if (desc.length > 135) {
            return desc.slice(0, 120) + '...'
        } else {
            return desc
        }
    }
    return (
        <>
            <S.StyledCard>
                <img src={img} alt="image" onClick={changeModal} />
                <h3>{name}</h3>
                <p>{getDesc(desc)}</p>
                <S.StyledButton width="100%" onClick={changeModal}>Adicionar ao carrinho</S.StyledButton>
            </S.StyledCard>
        </>
    )
}

export default ProfileCard