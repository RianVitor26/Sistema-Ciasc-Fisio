import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
      margin: 1rem 0;
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
    }

    select {
      margin-bottom: 2rem;
    }
  }
`;
