import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;

  form {
    display: flex;
    flex-direction: column;
    width: 30rem;

    @media only screen and (max-width: 320px) {
      width: 95%;
    }

    label {
      font-size: clamp(14px, 1.6rem, 100px);
    }

    input {
      font-size: clamp(12px, 1.4rem, 100px);
      padding: 0.5rem;
      margin-bottom: 2rem;
    }

  

    button {
      cursor: pointer;
      font-size: clamp(12px, 1.4rem, 100px);
      padding: 0.5rem;
      margin-bottom: 1rem;
      color: var(--light-text);
    }

    a {
      font-size: clamp(12px, 1.4rem, 100px);
      text-align: center;
      background: #cf2e2e;
      height: 3.3rem;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--light-text);
      border-radius: 0.5rem;
      margin-bottom: 4rem;
    }

    select {
      margin-bottom: 2rem;
      height: 3.3rem;
    }
  }
`;

export const Perfil = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  border: 1px solid var(--border);
  margin: 0 auto;
  background: var(--button-bg);
  border: 1px solid var(--button-bg);
  margin-bottom: 0.5em;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
