import styled from "styled-components";
import hero from "../../assets/hero.png"

export const HeroContainer = styled.div `
    height: 380px;
    background-image: url(${hero});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 32px 0;
`