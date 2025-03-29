import styled from "styled-components";

type Props = {
    isvisible: boolean
}

export const ModalContainer = styled.div <Props> `
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${({isvisible}) => (isvisible === true ? "flex" : "none")};
    justify-content: center;
    align-items: center;
`