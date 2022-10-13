import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    *{
        //Reset the global style

        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', Sans-Serif;
    }

    :root{
        // Color palette
        --body-bg: white;
        --primary-bg: #000055;
        --primary-color: white;
        --secondary-color: gray;
    }

    body{
        width: 100%;
        height: 100vh;
        background: var(--body-bg);
    }
`;
