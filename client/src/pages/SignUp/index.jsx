import * as C from "./styles";
import { Link } from 'react-router-dom'

export const SignUp = () => {
  return (
    <C.Container>
      <form method="POST" action="">
        <label htmlFor="Nome Completo">Nome completo</label>
        <input
          required
          id="Nome completo"
          type="text"
          placeholder="Insira seu nome Completo"
        />
        <label htmlFor="E-mail">E-mail</label>
        <input
          required
          id="E-mail"
          type="email"
          placeholder="Insira seu E-mail"
        />
        <label htmlFor="Usuário">Senha</label>
        <input
          required
          id="Senha"
          type="password"
          placeholder="Insira sua senha"
        />
        <label htmlFor="Confirmar senha">Confirmar senha</label>
        <input
          required
          id="Confirmar senha"
          type="password"
          placeholder="Confirme sua senha"
        />
        <button>Cadastrar</button>
        <Link to="/">Cancelar</Link>
      </form>
    </C.Container>
  );
};
