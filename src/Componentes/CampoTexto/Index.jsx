import styled from "styled-components";
import { useState } from "react";

const CampoTextoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CampoTextoEstilizado = styled.input`
  width: 100%;
  max-width: 652px;
  max-height: 56px;
  padding: 16px 12px;
  font-size: 1rem;
  color: black;
  border: 1px solid #C98CF1;
  border-radius: 10px;
  background-size: 30px 30px;
  box-sizing: border-box;
`;

const BotonBusqueda = styled.button`
  background-color: #C98CF1;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 10px;
`;

const CampoTexto = ({ filtrarFotos }) => {
  const [filtro, setFiltro] = useState("");

  const manejarCambio = (e) => {
    setFiltro(e.target.value);
  };

  const manejarBusqueda = () => {
    filtrarFotos(filtro);
  };

  return (
    <CampoTextoContainer>
      <CampoTextoEstilizado
        type="text"
        placeholder="¿Qué estás buscando?"
        value={filtro}
        onChange={manejarCambio}
      />
      <BotonBusqueda onClick={manejarBusqueda}>Buscar</BotonBusqueda>
    </CampoTextoContainer>
  );
};

export default CampoTexto;
