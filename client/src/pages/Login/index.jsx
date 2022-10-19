import * as C from "./styles";
import { Link } from "react-router-dom";
import { Inputs } from "../../components/Inputs";
import { Buttons } from "../../components/Buttons";

export const Login = () => {

  return (
    <C.Wrapper>
      <C.FormContainer>
        <h1>Bem vindo ao CIASC</h1>
        <form action="">
          <Inputs label="Matrícula" color="primary" variant="outlined" />
          <Inputs label="Senha" color="primary" variant="outlined" />

          <C.alternatives>
            <Link to="/signup">Criar uma conta</Link>
            <Link to="/forgetpassword">Esqueceu a senha?</Link>
          </C.alternatives>
          <Buttons variant="contained" />
        </form>
      </C.FormContainer>
    </C.Wrapper>
  );
};
