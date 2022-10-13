import React from 'react'
import * as C from './styles'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <C.Wrapper>
      <C.FormContainer>
        <h1>Bem-vindo ao CIASC</h1>
        <form action="">
          <label htmlFor="">E-mail</label>
          <input type="email" placeholder="Insira seu E-mail" />

          <label htmlFor="password">Senha</label>
          <input type="password" placeholder="Insira sua senha" />

          <button>Entrar</button>

          <C.Alternatives>
            <Link to="/forgetpassword">Esqueceu a senha?</Link>
            <Link to="/registeremployeed">Criar uma conta</Link>
          </C.Alternatives>

          <span>Outros</span>
        </form>
      </C.FormContainer>
    </C.Wrapper>
  );
}
