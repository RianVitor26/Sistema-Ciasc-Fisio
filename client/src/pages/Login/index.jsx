import React from 'react'
import * as C from './styles'
import { Link } from 'react-router-dom'
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export const Login = () => {
  return (
    <C.Wrapper>
      <C.FormContainer>
        <h1>Bem-vindo ao CIASC</h1>
        <form action="">
          <label htmlFor="email">
            <MdEmail />
            <p>E-mail</p>
          </label>
          <input type="email" placeholder="Insira seu E-mail" />

          <label htmlFor="password">
            <AiFillLock />
            <p>Password</p>
          </label>
          <input type="password" placeholder="Insira sua senha" />

          <button>Entrar</button>

          <C.Alternatives>
            <Link to="/forgetpassword">Esqueceu a senha?</Link>
            <Link to="/registeremployees">Criar uma conta</Link>
          </C.Alternatives>

          <span>Outros</span>

          <C.LoginWith>
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />
            </a>
            <a href="#">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" />
            </a>
          </C.LoginWith>
        </form>
      </C.FormContainer>
    </C.Wrapper>
  );
}
