import * as C from "./styles";
import { Link } from "react-router-dom";
import { Inputs } from "../../components/Inputs";
import { useRef } from "react";

export const Login = () => {

  const inputRef = useRef();

  const handleSubmit = (e) => {
    verifyEmptyFields()
    handlePassword()
  };

  const handleForm = (e) => {
    e.preventDefault()
  }

  const handlePassword = () => {
    inputRef.current.password < 0
      ? alert('senha curta')
      : alert('senha aceita')
  }

  const verifyEmptyFields = () => {
    inputRef.current.value.length < 0 ? handleForm() : alert("Válido");
  };

  return (
    <C.Wrapper>
      <C.FormContainer>
        <img src="unisales.png" alt="" />
        <h1>Login CIASC</h1>
        <form method="post" action="/apibackend" onSubmit={handleSubmit}>
          <Inputs
            label="Matrícula"
            color="primary"
            variant="outlined"
            type="number"
            maxLength={6}
          />
          <Inputs
            label="Senha"
            color="primary"
            variant="outlined"
            type="password"
          />

          <C.alternatives>
            <Link to="/signup">Criar uma conta</Link>
            <Link to="/forgetpassword">Esqueceu a senha?</Link>
          </C.alternatives>
          <button>Entrar</button>
        </form>
      </C.FormContainer>
    </C.Wrapper>
  );
};
