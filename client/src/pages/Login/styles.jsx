import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 50rem;
  height: 50rem;
  background: var(--primary-bg);
  border-radius: 0.5em;
  box-shadow: 0 0 1rem 0.1rem gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  h1 {
    font-size: clamp(16px, 3rem, 100px);
    color: var(--primary-color);
    padding-top: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    justify-content: space-evenly;

    label {
      font-size: clamp(16px, 1.3rem, 100px);
    }

    input {
      font-size: clamp(16px, 1rem, 100px);
    }

    button {
      background: var(--buttons-bg);
      height: 4rem;
      font-size: clamp(16px, 1.3rem, 100px);
    }
  }
`;

export const alternatives = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 1.6rem;
    color: var(--primary-color);
    transition: all ease .5s;

    :hover {
      color: var(--primary-color-hover);
    }
  }

  a:nth-child(1) {
    margin-right: 2rem;
  }
  a:nth-child(2) {
    margin-left: 2rem;
  }
`;