import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 55rem;
  height: 55rem;
  background: var(--containers-bg);
  border-radius: 0.5em;
  box-shadow: var(--normal-shadow);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  img {
    width: 60%;
    height: 60%;
  }

  h1 {
    font-size: clamp(14px, 2.5rem, 100px);
    color: var(--primary-color);
    position: relative;

    ::before {
      content: "";
      position: absolute;
      height: .4rem;
      width: 50%;
      background: linear-gradient(90deg, var(--error-color) 0%, var(--containers-bg) 100%);
      left: 0;
      bottom: -0.5rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    justify-content: space-evenly;

    @media only screen and (max-width: 768px) {
      width: 90%;
    }

    label {
      font-size: clamp(12px, 1.5rem, 100px);
    }

    input {
      font-size: clamp(12px, 1.5rem, 100px);
    }

    button {
      background: var(--buttons-bg);
      height: 4rem;
      font-size: clamp(16px, 1.3rem, 100px);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-color);
      cursor: pointer;
      border: none;
      border-radius: var(--normal-radius);
      transition: var(--normal-transition);

      :hover {
        background: var(--buttons-bg-hover);
      }
    }
  }
`;

export const alternatives = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: clamp(12px, 1.4rem, 100px);
    color: var(--primary-color);
    transition: all ease 0.5s;

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
