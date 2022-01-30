import { useState } from "react";
import './styles.css'

export default function Cadastro() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log("Cadastrou");
  }

  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");
  return (
    <div className="container">
      <form onSubmit={cadastrarUsuario} className="wrap-cadastro">
      <h1>Cadastro</h1>
        <div>
          <label htmlFor="user">Usuário </label>
          <input
            type="text"
            className="input-user"
            placeholder="Digite seu nome de usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha </label>
          <input
            type="password"
            className="input-senha"
            placeholder="Digite uma senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha">Confime sua senha </label>
          <input
            type="password"
            className="input-senha"
            placeholder="Digite sua senha novamente"
            value={senha2}
            onChange={(e) => setSenha2(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" className="input-btn" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}
