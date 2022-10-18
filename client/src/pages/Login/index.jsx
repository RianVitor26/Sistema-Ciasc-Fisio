import * as C from "./styles";
import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import { Input } from "../../components/Input";

export const Login = () => {

  const handleSubmit = () => {
    checkEmptyfields()
    handlePassword()
  };

  const inputRef = useRef();

  const checkEmptyfields = () => {
    inputRef.current.value.length < 1
      ? alert("Preencha todos os campos!")
      : console.log("Input preenchido")
  };

  const handleForm = (event) => {
   inputRef.current.value.length > 0
     ? console.log("Enviando dados para o backend")
     : event.preventDefault()
  }

  return (
    <C.Wrapper>
      <C.FormContainer>
        <h1>Bem-vindo ao CIASC</h1>
        <form method="post" action="/urlbackend" onSubmit={handleForm}>
          <label htmlFor="email">
            <MdEmail />
            <p>Matrícula</p>
          </label>
          <input
            id="email"
            ref={inputRef}
            type="email"
            placeholder="Insira seu E-mail"
            maxLength={50}
          />
          <label htmlFor="password">
            <AiFillLock />
            <p>Senha</p>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Insira sua senha"
            maxLength={50}
            ref={inputRef}
            minLength={8}
          />
          <Input />
          <button onClick={handleSubmit}>Entrar</button>
          <C.Alternatives>
            <Link to="/forgetpassword">Esqueceu a senha?</Link>
            <Link to="/signup">Criar uma conta</Link>
          </C.Alternatives>
        </form>
      </C.FormContainer>
    </C.Wrapper>
  );
};
