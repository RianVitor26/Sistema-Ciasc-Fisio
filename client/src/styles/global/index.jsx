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
        --containers-bg: #f5f5f5;
        --primary-color: #113188;
        --primary-color-hover: #2452d1;
        --secondary-color: #f0f0f0;
        --buttons-bg: rgb(2,3,129);
        --buttons-bg-hover: #0000a7;
        --error-color: #cf2e2e;

        --normal-radius: 1rem;
        --normal-transition: all ease .5s;
        --normal-shadow: 0 0 1rem #303030ed;
    }

    html{
       font-size: 62.5%;
    }

    body{
        width: 100%;
        background: var(--body-bg);
    }
`;
