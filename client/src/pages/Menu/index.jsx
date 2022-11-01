import * as C from "./styles";
import { Link } from 'react-router-dom'
import { BiLogOut } from "react-icons/bi";
import { useState } from 'react'


export const Menu = () => {

    const [acessType, setAcessType] = useState('Recepcionista')

  return (
    <C.Container>
          <h1>Bem-vindo(a) {acessType}(a)</h1>
      <C.MenuContainer>

        {acessType === "Professor" ? (
          <>
            <Link to="/">Lista de pacientes</Link>
            <Link to="/">Registro geral</Link>
            <Link to="/">Lista de alunos</Link>
          </>
              ) : null}
              
        {acessType === "Aluno" ? (
          <>
            <Link to="/">Lista de pacientes</Link>
            <Link to="/">Ver perfil</Link>
          </>
              ) : null}
              
        {acessType === "Recepcionista" ? (
          <>
            <Link to="/">Cadastrar</Link>
            <Link to="/">Lista de alunos</Link>
          </>
        ) : null}

        <Link to="/">
          SAIR <BiLogOut />
        </Link>
      </C.MenuContainer>
    </C.Container>
  );
}
