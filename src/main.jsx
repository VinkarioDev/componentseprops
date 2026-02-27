import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Perfil from "./Perfil.jsx";
import { imagens } from "./assets/images/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Perfil
      nome="Satoru Gojo"
      profissao="Catador de Coco Babaçu"
      descricao="Especialista em extração manual sustentável de recursos bioenergéticos oriundos de palmeiras nativas do bioma tropical, com atuação estratégica na cadeia produtiva do endocarpo lignificado e seus derivados de alto valor socioeconômico."
      imagem={imagens.satoru}
    />
    <Perfil
      nome="Nego Burro"
      profissao="Transportes de Computadores entre Estados do Brasil"
      descricao="Responsável por planejar e executar a mudança de hadware entre Ceará e Bahia, utilizando técnicas avançadas de “cabe na mala sim” e confiança absoluta de que nada vai quebrar."
      imagem={imagens.mamaco}
    />
    <Perfil
      nome="Vovozona"
      profissao="Gordo"
      descricao="Ser Imensamente gordo a ponto de ter a própria órbita"
      imagem={imagens.vovozona}
    />
  </StrictMode>,
);
