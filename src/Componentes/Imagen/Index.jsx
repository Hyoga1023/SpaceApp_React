import React, { useState } from "react";
import styled from "styled-components";

const Tarjeta = styled.figure`
  display: flex;
  flex-direction: column;
  background: #04244f;
  border-radius: 15px;
  padding: 0;
  margin: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  overflow: hidden;
`;

const ImagenEstilizada = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Contenido = styled.figcaption`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: white;

  h3 {
    font-size: 16px;
    margin: 5px 0;
  }

  p {
    font-size: 14px;
    margin: 5px 0;
    color: #b0b0b0;
  }
`;

const Acciones = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin-top: 10px;

  button {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      color: #1e90ff;
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #04244f;
  position: relative;
  width: 95vw;
  height: 95vh;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
`;

const ModalImage = styled.img`
  width: 100%;
  height: calc(95vh - 100px); 
  object-fit: contain;
  cursor: zoom-out;
  background: #000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 28px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const Imagen = ({ foto }) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [liked, setLiked] = useState(false);

  const activarZoom = () => {
    setMostrarModal(true);
  };

  const cerrarZoom = () => {
    setMostrarModal(false);
  };

  const manejarLike = () => {
    setLiked(!liked);
  };

  return (
    <Tarjeta>
      <ImagenEstilizada
        src={foto.path}
        alt={`Imagen de ${foto.title}`}
        onClick={activarZoom}
      />
      <Contenido>
        <h3>{foto.title}</h3>
        <p>{foto.source}</p>
        <Acciones>
          <button onClick={manejarLike}>
            {liked ? "❤️" : "🤍"}
          </button>
          <button onClick={activarZoom}>⤢</button>
        </Acciones>
      </Contenido>

      {mostrarModal && (
        <Modal onClick={cerrarZoom}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={cerrarZoom}>×</CloseButton>
            <ModalImage
              src={foto.path}
              alt={foto.title}
            />
            <Contenido>
              <h3>{foto.title}</h3>
              <p>{foto.source}</p>
              <Acciones>
                <button onClick={manejarLike}>
                  {liked ? "❤️" : "🤍"}
                </button>
              </Acciones>
            </Contenido>
          </ModalContent>
        </Modal>
      )}
    </Tarjeta>
  );
};

export default Imagen;