import { Restaurant } from "../../assets/redux/slices/dataSlice"
import * as S from "./styles"

type Data = {
    data: Restaurant[]
}

const ProfileHero = (data :Data) => {
    return (
        <>
            <S.HeroContainer image={String(data.data[0].capa)}>
                <div className="container">
                    <span>{data.data[0].tipo}</span>
                    <h2>{data.data[0].titulo}</h2>
                </div>
            </S.HeroContainer>
        </>
    )
}

export default ProfileHero