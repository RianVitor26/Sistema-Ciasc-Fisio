import * as C from "./styles";
import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import GoogleLogin from "react-google-login";
import { useRef, useLayoutEffect } from "react";

export const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  const containerRef = useRef();

  const checkEmptyfields = () => {
    containerRef.current.value.length < 1
      ? console.log("preencha o campo")
      : console.log("valido!!");
  };

  return (
    <C.Wrapper>
      <C.FormContainer>
        <h1>Bem-vindo ao CIASC</h1>
        <form>
          <label htmlFor="email">
            <MdEmail />
            <p>E-mail</p>
          </label>
          <input
            ref={containerRef}
            type="email"
            placeholder="Insira seu E-mail"
            maxLength={50}
          />

          <label htmlFor="password">
            <AiFillLock />
            <p>Senha</p>
          </label>
          <input
            type="password"
            placeholder="Insira sua senha"
            maxLength={50}
            ref={containerRef}
          />

          <button onClick={checkEmptyfields}>Entrar</button>

          <C.Alternatives>
            <Link to="/forgetpassword">Esqueceu a senha?</Link>
            <Link to="/registeremployees">Criar uma conta</Link>
          </C.Alternatives>

          <GoogleLogin
            clientId="168587184055-sm9net1fl2l2ii75k9kb2o8f79n1bre7.apps.googleusercontent.com"
            buttonText="Continuar com o Google"
            onSuccess={responseGoogle}
          />
        </form>
      </C.FormContainer>
    </C.Wrapper>
  );
};
