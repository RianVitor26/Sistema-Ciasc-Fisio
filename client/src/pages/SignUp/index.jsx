import * as C from "./styles";

export const SignUp = () => {
  return (
    <C.Container>
      <form method="POST" action="">
        <label htmlFor="Nome Completo">Nome completo</label>
        <input
          id="Nome completo"
          type="text"
          placeholder="Insira seu E-mail" />
        <label htmlFor="E-mail">E-mail</label>
        <input
          id="E-mail"
          type="email"
          placeholder="Insira seu E-mail"
        />
        <label htmlFor="Usuário">Senha</label>
        <input
          id="Senha"
          type="password"
          placeholder="Confirme sua senha"
        />
        <label htmlFor="Confirmar senha">Confirmar senha</label>
        <input
          id="Confirmar senha"
          type="text"
          placeholder="Insira sua matrícula"
        />
        <button>Cadastrar</button>
      </form>
    </C.Container>
  );
};
