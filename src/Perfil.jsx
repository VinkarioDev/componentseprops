import "./App.css";

function Perfil(props) {
  return (
    <div className="container">
      <h2>{props.nome}</h2>

      <div className="informacoes">
        <p>
          {" "}
          PROFISSÃO: <span>{props.profissao}</span>
        </p>
        <p>
          {" "}
          DESCRIÇÃO: <span>{props.descricao}</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Perfil;
