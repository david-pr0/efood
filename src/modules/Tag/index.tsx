import * as S from "./styles"

type Props = {
    text: string
}

const Tag = ({text}: Props) => {
    return (
        <S.Tag>
            {text}
        </S.Tag>
    )
}

export default Tag