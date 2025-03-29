import { CardapioItem } from "../../assets/redux/slices/dataSlice"
import ProfileCard from "./ProfileCard"
import * as S from "./styles"

type Data = {
    data: CardapioItem[]
}

const ProfileListage = ({data}:Data) => {
    return (
        <>
            <S.ListContainer>
                <S.List className="container">
                    {
                        data.length > 0 ? (
                            data.map(item => (
                                <li key={item.id}>
                                    <ProfileCard desc={item.descricao} img={item.foto} name={item.nome} porcao={item.porcao} preco={String(item.preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}))}/>
                                </li>
                            ))
                        ) : (
                            <p>loading</p>
                        )
                    }
                </S.List>
            </S.ListContainer>
        </>
    )
}

export default ProfileListage