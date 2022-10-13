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
        --body-bg: #9bc0e2;
        --primary-bg: #ffffff;
        --primary-color: #1f1f1f;
        --secondary-color: #f0f0f0;
        --terciary-color: #3f3f3f;
        --buttons-bg: #001b94;
        --buttons-bg-hover: #0020ad;
    }

    body{
        width: 100%;
        background: var(--body-bg);
    }
`;
