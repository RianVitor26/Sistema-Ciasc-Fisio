import * as C from "./styles";
import { Link } from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";

export const SignUp = () => {

  const onChange = (value) => {
    console.log("Captcha value:", value);
  }

  return (
    <C.Container>
      <form method="POST" action="/api">
        <label htmlFor="Nome Completo">Nome completo</label>
        <input
          maxLength={50}
          required
          id="Nome completo"
          type="text"
          placeholder="Insira seu nome Completo"
        />
        <label htmlFor="CPF">CPF</label>
        <input
          maxLength={11}
          required
          id="CPF"
          type="text"
          placeholder="Insira seu CPF"
        />
        <label htmlFor="E-mail">E-mail</label>
        <input
          maxLength={50}
          required
          id="E-mail"
          type="email"
          placeholder="Insira seu E-mail"
        />
        <label htmlFor="Usuário">Senha</label>
        <input
          minLength={8}
          maxLength={50}
          required
          id="Senha"
          type="password"
          placeholder="Insira sua senha"
        />
        <label htmlFor="Confirmar senha">Confirmar senha</label>
        <input
          minLength={8}
          maxLength={50}
          required
          id="Confirmar senha"
          type="password"
          placeholder="Confirme sua senha"
        />
        <label htmlFor="TipoAcesso">Tipo de acesso</label>
        <select name="acess" id="acess">
          <option value="aluno">Aluno</option>
          <option value="professor">Professor</option>
          <option value="recepçao">Recepcionista</option>
        </select>

        <ReCAPTCHA
          sitekey="6LdYbNYiAAAAADlrTAzr2S7NM0DDw5IQWuuqE_ul"
          onChange={onChange}
        />

        <button>Cadastrar</button>
        <Link to="/">Cancelar</Link>
      </form>
    </C.Container>
  );
};
