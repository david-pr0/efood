import * as S from "./styles"
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom"

const ProfileHeader = () => {
    const navigate = useNavigate()
    return (
        <>
            <S.HeaderContainer>
                <S.HeaderElements className="flex container">
                    <h3>Restaurantes</h3>
                    <img src={logo} alt="logo" onClick={() => navigate("/")} />
                    <h3>0 Produto(s) no carrinho</h3>
                </S.HeaderElements>
            </S.HeaderContainer>
        </>
    )
}

export default ProfileHeader