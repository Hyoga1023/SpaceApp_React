import styled from "styled-components";
import { useState } from "react";

const CampoTextoEstilizado = styled.input`
  width: 100%;
  max-width: 652px;
  max-height: 56px;
  padding: 16px 12px;
  font-size: 1rem;
  color: #ccc;
  border: 1px solid #C98CF1;
  border-radius: 10px;
  background: url("imagenes/lupa.png") no-repeat right 10px center;
  background-size: 30px 30px;
  box-sizing: border-box;
`;

const CampoTexto = ({ setFotosFiltradas }) => {
  const [filtro, setFiltro] = useState("");

  const manejarCambio = (e) => {
    const texto = e.target.value.toLowerCase();
    setFiltro(texto);
    setFotosFiltradas(texto);
  };

  return (
    <CampoTextoEstilizado
      type="text"
      placeholder="¿Qué estás buscando?"
      value={filtro}
      onChange={manejarCambio}
    />
  );
};

export default CampoTexto;
