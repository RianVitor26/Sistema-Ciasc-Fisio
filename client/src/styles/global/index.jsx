import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', Sans-Serif;

        button{
            border: none;
            background: var( --button-bg);
            color: var( --light-text);
            border-radius: var( --normal-radius);

            :hover{
                 background: var( --button-bg-hover);
                 transition: var(--normal-transition);
            }
        }

        input{
             border-radius: var( --normal-radius);
             border: 1px solid var(--border);

             :focus{
                outline: 1px solid var(--normal-outline);
             }
        }

        label{
            font-weight: bold;
            color: #616161;
            display: flex;
            align-items: center;
        }

        svg{
            margin-right: .5rem;
            color: var(--button-bg)
        }
        select{
            border: 1px solid var(--border);
        }
    }

    :root{
        --normal-radius: .5rem;
        --normal-transition: all ease .5s;
        --light-text: #eeeeee;
        --button-bg: #225cb4;
        --button-bg-hover: #1e519e;
        --border: #bdbdbd;
        --normal-outline: #757575;
        --button-cancel-bg: #cf2e2e;
        --dark-text: #263238;
    }

    html{
       font-size: 62.5%;
    }

    body{
        width: 100%;
        height: 100vh;
        background: #fafafa;
    }
`;
