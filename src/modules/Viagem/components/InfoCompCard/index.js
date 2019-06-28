import "./index.css";

import React from "react";

const InfoCompCard = ({ viagem }) => (
  <div className="container_info">
    <div classeName="two">
      A competição de{" "}
      <span className="text_color">{viagem.modalidade_comp}</span> ocorrerá
      entre os dias <span className="text_color">{viagem.data_ida}</span> e{" "}
      <span className="text_color">{viagem.data_volta}</span>, na cidade de{" "}
      <span className="text_color">{viagem.destino}</span>.
    </div>
  </div>
);
export default InfoCompCard;