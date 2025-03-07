import styled from "styled-components";
import ladolcevita from "../../assets/ladolcevita.png"

export const HeroContainer = styled.div `
    height: 380px;
    background-image: url(${ladolcevita});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 32px 0;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 0;
    }
    div {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;

        h2 {
            font-size: 32px;
            font-weight: 900;
        }

        span {
            font-size: 32px;
            font-weight: 100;
        }
    }
`