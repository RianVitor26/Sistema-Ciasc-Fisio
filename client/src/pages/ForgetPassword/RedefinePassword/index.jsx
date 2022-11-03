import * as C from "./styles";
import { Link } from "react-router-dom";

export const RedefinePassword = () => {
  return (
    <C.Container>
      <form method="PUT" action="/api">
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
        <Link to="/forgetpassword">Cancelar</Link>
      </form>
    </C.Container>
  );
};
