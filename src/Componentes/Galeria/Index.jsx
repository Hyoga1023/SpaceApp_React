import styled from "styled-components";
import Tags from "../Tags/Index";
import Titulo from "../Titulo/Index";
import Populares from "../Populares/Index";
import Imagen from "../Imagen/Index";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SeccionFluida = styled.section`
  flex-grow: 1;
`;

const GridGaleria = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 5px;
`;

const Galeria = ({ alSeleccionarFoto, alAlternarFavorito, fotos, filtrarPorTag }) => {
  return (
    <>
      <Tags filtrarPorTag={filtrarPorTag} />
      <GaleriaContainer>
        <SeccionFluida>
          <Titulo>Navegue por la Galeria</Titulo>
          <GridGaleria>
            {fotos.map((foto) => (
              <Imagen
                alAlternarFavorito={alAlternarFavorito}
                alSolicitarZoom={alSeleccionarFoto}
                key={foto.id}
                foto={foto}
              />
            ))}
          </GridGaleria>
        </SeccionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
