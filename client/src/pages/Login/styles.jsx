import styled, { keyframes } from 'styled-components'

const appear = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${appear} 1s ease;
`;

export const FormContainer = styled.div`
  width: 30em;
  height: 30em;
  background: var(--primary-bg);
  border-radius: 0.5em;
  box-shadow: 0 0 1em 0.1em gray;

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }

  h1 {
    font-size: clamp(28px, 2vw, 50px);
    color: var(--buttons-bg);
    text-align: center;
    padding: 1em;
  }

  form {
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    img {
      width: 2em;
      height: 2em;
    }

    label {
      width: 70%;
      display: flex;
      align-items: center;

      @media only screen and (max-width: 500px) {
        width: 90%;
        height: 3em;
      }

      p {
        color: var(--terciary-color);
        padding: 0.5em 0;
        font-weight: 700;
        padding-left: 0.5em;
      }
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

      @media only screen and (max-width: 500px) {
        width: 90%;
        height: 3.5em;
      }
    }

    input {
      width: 70%;
      height: 2.5em;
      padding: 0.5em;
      margin-bottom: 1em;
      border: 1px solid gray;
      border-radius: 0.5em;
      position: relative;

      :focus {
        background-color: #f1f1f1;
      }

      @media only screen and (max-width: 500px) {
        width: 90%;
        height: 3.5em;
      }
    }

    span {
      color: var(--buttons-bg);
      position: relative;
      height: 1em;
      width: 100%;
      padding: 0 1em;
      font-weight: 700;
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
        color: var(--buttons-bg);
        transition: all .5s ease;
        :hover{
            color: blue;
        }
        :nth-child(1){
            padding-right: 1vw;
        }
        :nth-child(2){
            padding-left: 1vw;
        }
    }
`;
export const LoginWith = styled.div`
  width: 100%;
  height: 5em;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  a {
    :nth-child(1) {
      padding-right: 1vw;
    }
    :nth-child(2) {
      padding-left: 1vw;
    }
  }
`;