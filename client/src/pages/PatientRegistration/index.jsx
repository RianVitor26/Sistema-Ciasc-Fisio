import * as C from "./styles";
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const PatientRegistration = () => {

  const [photo, setPhoto] = useState("Rian.png");

  const handleChangePhoto = (e) => {
    const urlImage = e.target.value
    console.log(urlImage)
  }


  return (
    <C.Container>
      <form method="POST" action="">
        <C.Perfil>
          <img src={photo} />
        </C.Perfil>

        <input onChange={handleChangePhoto} type="file" />
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
        <label htmlFor="Telefone">Telefone</label>
        <input
          maxLength={50}
          required
          id="Telefone"
          type="phone"
          placeholder="Insira seu telefone"
        />
        <label htmlFor="CEP">CEP</label>
        <input required id="CEP" type="text" placeholder="Insira seu CEP" />
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
