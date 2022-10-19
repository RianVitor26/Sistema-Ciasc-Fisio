import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    *{

        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', Sans-Serif;
    }

    :root{
        --body-bg: rgb(2,3,129);
        --primary-bg: #f5f5f5;
        --primary-color: #113188;
        --primary-color-hover: #2452d1;
        --secondary-color: #f0f0f0;
        --terciary-color: #3f3f3f;
        --buttons-bg: #0693F0;
        --buttons-bg-hover: #0020ad;
        --error-color: #cf2e2e;
    }

    html{
       font-size: 62.5%;
    }

    body{
        width: 100%;
        background: var(--body-bg);
    }
`;
