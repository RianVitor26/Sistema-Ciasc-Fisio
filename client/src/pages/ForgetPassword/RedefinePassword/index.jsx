import * as C from "./styles";

export const RedefinePassword = () => {
  return (
    <C.Container>
      <form action="">
        <label htmlFor="Password">Nova senha</label>
        <input
          id="Password"
          type="password"
          placeholder="Insira uma nova senha"
        />
        <label htmlFor="Confirmar senha">Confirmar senha</label>
        <input
          id="Confirmar senha"
          type="password"
          placeholder="Confirme sua senha"
        />
        <button>Enviar</button>
      </form>
    </C.Container>
  );
};
