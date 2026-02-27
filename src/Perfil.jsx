import "./App.css";
import image from "./assets/images/satoru-catador-de-coco.png";

function Perfil(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.imagem})`,
      }}
      className="container"
    >
      <h2>{props.nome}</h2>

      <div className="informacoes">
        <p>
          PROFISSÃO: <span>{props.profissao}</span>
        </p>
        <p>
          DESCRIÇÃO: <span>{props.descricao}</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Perfil;
