import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FormContainer = styled.div`
  width: 30em;
  height: 30em;
  background: var(--primary-bg);
  border-radius: 0.5em;
  box-shadow: 0 0 1em 0.1em gray;

  @media only screen and (max-width: 500px) {
    width: 80%;
    height: 25em;
  }

  h1 {
    font-size: clamp(14px, 2vw, 50px);
    color: var(--primary-color);
    text-align: center;
    padding: 1em;
  }

  form {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    height: 100%;

    label {
      width: 70%;
      color: var(--terciary-color);
      padding: 0.5em 0;
      font-weight: 700;
    }

    button {
      width: 70%;
      height: 5vh;
      color: var(--secondary-color);
      background: var(--buttons-bg);
      cursor: pointer;
      border: none;
      border-radius: 0.5em;
      margin-bottom: 1em;
      transition: all 0.5s ease;

      :hover {
        background: var(--buttons-bg-hover);
      }
    }

    input {
      width: 70%;
      height: 2.5em;
      padding: 0.5em;
      margin-bottom: 1em;
      border: 1px solid gray;
      border-radius: 0.5em;
    }

    span {
      color: var(--terciary-color);
      position: relative;
      height: 1em;
      padding: 0 1em;
      font-weight: 700;

      ::before {
        position: absolute;
        content: "";
        height: 1px;
        width: 50%;
        background-color: var(--primary-color);
        bottom: 50%;
        right: 100%;
      }

      ::after {
        position: absolute;
        content: "";
        height: 1px;
        width: 50%;
        background-color: var(--primary-color);
        bottom: 50%;
        left: 100%;
      }
    }
  }
`;

export const Alternatives = styled.div`
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5vh;

    a{
        font-size: clamp(12px, .5em, 50px);
        :nth-child(1){
            color: red;
            padding-right: 1vw;
        }
        :nth-child(2){
            padding-left: 1vw;
        }
    }
`;