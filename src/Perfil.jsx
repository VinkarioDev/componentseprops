import "./App.css";

function Botaonavegacao(props) {
  return (
    <div className="container">
      <h2>{props.nome}</h2>

      <div className="informacoes">
        <p> PROFISSÃO: <span>{props.profissao}</span></p>
        <p> DESCRIÇÃO: <span>{props.descricao}</span> </p>
      </div>
    </div>
  );
}

function Perfil() {
  return (
    <div>
      <Botaonavegacao
        nome="Rogerio"
        profissao="catador de coco babaçu"
        descricao="Agente autônomo de coleta e beneficiamento primário de estruturas oleaginosas perenes, operando sob regime de manejo extrativista de precisão em ecossistemas florestais."
      />
      
    </div>
  );
}

export default Perfil;