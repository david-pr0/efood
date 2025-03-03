import logo from "../../assets/logo.png"
import * as S from "./styles"

const MainHeader = () => {
    return (
        <>
            <S.HeaderContainer>
                <img src={logo} alt="logo" />
                <S.StyledText>Viva experiências gastronômicas no conforto da sua casa</ S.StyledText>
            </S.HeaderContainer>
        </>
    )
}

export default MainHeader