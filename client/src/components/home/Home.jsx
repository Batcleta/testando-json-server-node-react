import React from "react";
import Main from "../template/Main";

function Home(props) {
  return (
    <Main
      icon="home"
      title="Inicio"
      subtitle="Testando as funcionalidades do JsonServer"
    >
      <div className="display-6">Bem vindo!</div>
      <hr />
      <p className="mb-0">
        Um sistema para exemplificar a construção de um cadastro de usuário
        simples
      </p>
    </Main>
  );
}

export default Home;
