import * as S from "./styles"
import Card from "./Card"

const MainListage = () => {
    return (
        <S.ListContainer className="container">
            <S.List>
                <Card title="Hioki Sushi" text="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!" image={1} score={4.9} card={1}/>
                <Card title="La Dolce Vita Trattoria" text="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!" image={2} score={4.6} card={2}/>
                <Card title="La Dolce Vita Trattoria" text="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!" image={2} score={4.6} card={2}/>
                <Card title="La Dolce Vita Trattoria" text="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!" image={2} score={4.6} card={2}/>
            </S.List>
        </S.ListContainer>
    )
}

export default MainListage