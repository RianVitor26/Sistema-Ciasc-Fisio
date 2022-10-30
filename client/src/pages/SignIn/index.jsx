import * as C from "./styles";
import { Link } from 'react-router-dom'

export const SignIn = () => {
  return (
    <C.Container>
      <form method="POST" action="">
        <label htmlFor="Usuário">Usuário</label>
        <input type="text" placeholder="Insira sua matrícula"/>
        <label htmlFor="Senha">Senha</label>
        <input type="text" placeholder="Insira sua senha"/>
        <C.Links>
          <Link to="/signup">Criar uma conta</Link>
          <Link to="/forgetpassword">Esqueci minha senha</Link>
        </C.Links>
        <button>Entrar</button>
      </form>
    </C.Container>
  );
};
