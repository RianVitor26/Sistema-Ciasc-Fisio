import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: clamp(14px, 2rem, 100px);
    text-align: center;
    color: var(--dark-text);
  }
`;

export const MenuContainer = styled.nav`
  display: flex;
  width: 30rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  a {
    width: 100%;
    height: 6rem;
    margin: 2rem 0;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: clamp(14px, 1.6rem, 100px);
    background: var(--button-bg);
    transition: var(--normal-transition);

    :hover {
      background: var(--button-bg-hover);
    }

    :last-child {
      background: var(--button-cancel-bg);
    }
    border-radius: var(--normal-radius);
    color: var(--light-text);

    svg {
      font-size: clamp(14px, 2.5rem, 100px);
      color: var(--light-text);
      margin-left: 0.5rem;
    }
  }
`;
