import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    * {
        color: #fff;
        font-family: Roboto, sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #fff;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
    .flex {
        display: flex;
        align-items: center;
    }
`