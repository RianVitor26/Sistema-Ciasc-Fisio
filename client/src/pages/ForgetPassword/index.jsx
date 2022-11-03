import * as C from "./styles";
import { Link } from "react-router-dom"

export const ForgetPassword = () => {
  return (
    <C.Container>
      <form method="POST" action="/api">
        <label htmlFor="Matrícula">Usuário</label>
        <input id="Matrícula" type="text" placeholder="Insira seu usuário"/>
        <label htmlFor="E-mai">E-mail</label>
        <input id="E-mail" type="email" placeholder="Insira seu E-mail" />
        <button>Enviar</button>
        <Link to="/">Cancelar</Link>
      </form>
    </C.Container>
  );
}
