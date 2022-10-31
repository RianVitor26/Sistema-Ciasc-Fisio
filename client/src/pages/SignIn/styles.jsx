import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: clamp(16px, 2rem, 100px);
    font-weight: bold;
    color: var(--button-bg);
    margin-bottom: 5rem;
    position: relative;
    padding-bottom: .5rem;

    :before{
      content: '';
      width: 50%;
      height: .4rem;
      background: var(--button-bg);
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

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
    }
  }
`;
export const Links = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 300px) {
    justify-content: center;
  }

  a {
    font-size: clamp(12px, 1.4rem, 100px);
    margin-bottom: 2rem;
    color: #607d8b;

    :nth-child(1) {
      margin-right: 1rem;
    }
    :nth-child(2) {
      margin-left: 1rem;
    }
  }
`;