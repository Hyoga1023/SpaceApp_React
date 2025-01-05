import styled from "styled-components";
import GlobalStyles from "./Componentes/GlobalStyles/Index";
import Cabecera from "./Componentes/Cabecera/Index";
import BarraLateral from "./Componentes/BarraLateral/Index";
import Banner from "./Componentes/Banner/Index";
import Galeria from "./Componentes/Galeria/Index";
import fotos from "./fotos.json";
import { useState } from "react";
import Footer from "./Componentes/Footer/Index";

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F, 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos);
  const [filtroTexto, setFiltroTexto] = useState("");

  const filtrarFotos = (texto) => {
    const textoMinuscula = texto.toLowerCase();
    const fotosFiltradas = fotos.filter((foto) =>
      foto.title.toLowerCase().includes(textoMinuscula)
    );
    setFotosDeGaleria(fotosFiltradas);
    if (fotosFiltradas.length === 0) {
      console.log("No se encontraron resultados para la búsqueda");
    }
  };

  const filtrarPorTag = (tagId) => {
    if (!tagId) {
      setFotosDeGaleria(fotos);
    } else {
      const fotosFiltradas = fotos.filter((foto) => foto.tagId === tagId);
      setFotosDeGaleria(fotosFiltradas);
    }
  };

  const alAlternarFavorito = (foto) => {
    setFotosDeGaleria(
      fotosDeGaleria.map((fotoDeGaleria) => {
        return {
          ...fotoDeGaleria,
          favorita: fotoDeGaleria.id === foto.id ? !fotoDeGaleria.favorita : fotoDeGaleria.favorita,
        };
      })
    );
  };

  return (
    <FondoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Cabecera setFotosFiltradas={filtrarFotos} />
        <MainContainer>
          <BarraLateral />
          <ContenidoGaleria>
            <Banner />
            <Galeria
              alSeleccionarFoto={(foto) => setFotoSeleccionada(foto)}
              fotos={fotosDeGaleria}
              alAlternarFavorito={alAlternarFavorito}
              filtrarPorTag={filtrarPorTag}
            />
          </ContenidoGaleria>
        </MainContainer>
      </AppContainer>
      <Footer/>
    </FondoGradiente>
  );
};

export default App;
