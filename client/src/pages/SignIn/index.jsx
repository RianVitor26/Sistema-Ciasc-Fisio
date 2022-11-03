import * as C from "./styles";
import { Link } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
import api from "../../services/api";
import { useEffect } from "react";


export const SignIn = () => {
  useEffect(() => {
    api.get("api").then((Response) => console.log(Response.data));
  }, []);

  return (
    <C.Container>
      <span>Login</span>
      <form method="POST" action="/api/login">
        <label htmlFor="Usuário">
          <FaUserAlt />
          Usuário
        </label>
        <input
          minLength={8}
          maxLength={50}
          required
          type="text"
          placeholder="Insira seu usuário"
          name="user"
        />
        <label htmlFor="Senha">
          <FaLock />
          Senha
        </label>
        <input
          minLength={8}
          maxLength={50}
          required
          type="password"
          placeholder="Insira sua senha"
          name="password"
        />
        <C.Links>
          <Link to="/signup">Criar uma conta</Link>
          <Link to="/forgetpassword">Esqueci minha senha</Link>
        </C.Links>
        <button>Entrar</button>
      </form>
    </C.Container>
  );
};
