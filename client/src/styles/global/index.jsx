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
        --form-bg: blue;
        --primary-text: white;
        --secondary-text: gray;
    }

    body{
        width: 100%;
        height: 100vh;
        background: var(--body-bg);
    }
`;
