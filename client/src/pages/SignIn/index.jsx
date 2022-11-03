import * as C from "./styles";
import { Link } from 'react-router-dom'
import { FaUserAlt, FaLock } from "react-icons/fa";
import api from "../../services/api";
import { useEffect } from 'react'

export const SignIn = () => {
  
  useEffect(() => {
    api.get("api").then((Response) => console.log(Response.data))
  }, [])


  return (
    <C.Container>
      <span>Login</span>
      <form method="POST" action="">
        <label htmlFor="Usuário">
          <FaUserAlt />
          Usuário
        </label>
        <input
          minLength={8}
          maxLength={50}
          required
          type="text"
          placeholder="Insira sua matrícula"
        />  
        <label htmlFor="Senha">
          <FaLock />
          Senha
        </label>
        <input
          minLength={8}
          maxLength={50}
          required
          type="text"
          placeholder="Insira sua senha"
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
