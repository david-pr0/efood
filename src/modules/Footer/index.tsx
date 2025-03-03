import * as S from "./styles"
import logo from "../../assets/logo.png"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import twiter from "../../assets/twitter.png"

const Footer = () => {
    return (
        <S.StyledFooter>
            <img src={logo} alt="logo" />
            <S.LinkList>
                <li>
                    <img src={instagram} alt="instagram" />
                </li>
                <li>
                    <img src={facebook} alt="facebook" />
                </li>
                <li>
                    <img src={twiter} alt="twiter" />
                </li>
            </S.LinkList>
            <S.StyledText>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
            </S.StyledText>
        </S.StyledFooter>
    )
}

export default Footer