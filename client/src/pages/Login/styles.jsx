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
  box-shadow: 0 0 1em 0.2em var(--secondary-color);

  @media only screen and (max-width: 500px) {
    width: 80%;
    height: 25em;
  }
`;