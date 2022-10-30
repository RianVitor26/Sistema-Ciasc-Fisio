import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', Sans-Serif;
    }

    :root{
        --normal-radius: 1rem;
        --normal-transition: all ease .5s;
    }

    html{
       font-size: 62.5%;
    }

    body{
        width: 100%;
        height: 100vh;
    }
`;
