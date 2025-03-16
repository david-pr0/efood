import * as S from "./styles"
import Card from "./Card"
import { useAppSelector } from "../../assets/redux/store"

const MainListage = () => {
    const data = useAppSelector(state => state.data)
    const dataArray = Object.values(data)
    console.log("Data no componente:", data)
    return (
        <S.ListContainer className="container">
            <S.List>
                {dataArray.length > 0 ? (
                    dataArray.map(item => (
                        <Card 
                            key={item.id}
                            title={item.titulo}
                            text={item.descricao}
                            image={item.capa}
                            score={Number(item.avaliacao)}
                            tipo={item.tipo}
                            destacado={item.destacado}
                        />
                    ))
                ) : (
                    <p>Carregando dados...</p>  
                )}
            </S.List>
        </S.ListContainer>
    )
}

export default MainListage