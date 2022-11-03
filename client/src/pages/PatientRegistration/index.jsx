import * as C from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";

export const PatientRegistration = () => {
  const defaultImg = "avatar.png";
  const [photo, setPhoto] = useState("");

  return (
    <C.Container>
      <form method="POST" action="/api">
        <C.Perfil>
          {photo ? (
            <img src={URL.createObjectURL(photo)} alt="Foto do paciente" />
          ) : (
            <img src={defaultImg} alt="default image" />
          )}
        </C.Perfil>

        <input
          name="photo"
          type="file"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
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
          minLength={11}
          required
          id="CPF"
          name="cpf"
          type="text"
          placeholder="000.000.000-00"
        />
        <label htmlFor="E-mail">E-mail</label>
        <input
          maxLength={50}
          required
          id="E-mail"
          type="email"
          placeholder="seuemail@exemplo.com"
        />
        <label htmlFor="Telefone">Telefone</label>
        <input
          maxLength={50}
          required
          id="Telefone"
          type="phone"
          placeholder="Insira seu telefone"
        />
        <label htmlFor="CEP">CEP</label>
        <input required id="CEP" type="text" placeholder="00000-000" />
        <label htmlFor="Rua">Rua</label>
        <input required id="Rua" type="text" placeholder="Insira sua Rua" />
        <label htmlFor="Cidade">Cidade</label>
        <input
          required
          id="Cidade"
          type="text"
          placeholder="Insira sua Cidade"
        />
        <label htmlFor="Estado">Estado</label>
        <select name="Estados" id="Estado">
          <option value="ES">ES</option>
          <option value="RJ">RJ</option>
          <option value="SP">SP</option>
        </select>
        <label htmlFor="Número">Número</label>
        <input
          required
          id="Número"
          type="number"
          placeholder="Insira o número da sua residência"
        />

        <label htmlFor="Sexo">Sexo</label>
        <select name="Sexo" id="Sexo">
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>

        <label htmlFor="Data de nascimento">Data de nascimento</label>
        <input
          required
          id="Data de nascimento"
          type="date"
          placeholder="Insira a sua Data de nascimento"
        />

        <button>Cadastrar</button>
        <Link to="/menu">Cancelar</Link>
      </form>
    </C.Container>
  );
};
