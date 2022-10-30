import * as C from "./styles";

export const ForgetPassword = () => {
  return (
    <C.Container>
      <form action="">
        <label htmlFor="Matrícula">Matrícula</label>
        <input id="Matrícula" type="text" placeholder="Insira sua matrícula"/>
        <label htmlFor="E-mai">E-mail</label>
        <input id="E-mail" type="email" placeholder="Insira seu E-mail" />
        <button>Enviar</button>
      </form>
    </C.Container>
  );
}
