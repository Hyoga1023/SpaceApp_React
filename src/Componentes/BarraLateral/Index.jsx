import styled from "styled-components";
import ItemNavegacion from "../BarraNavegacion/Index.jsx";


const ListaEstilizada = styled.ul`
    margin:0;
    padding: 0;
    list-style: none;

`

const BarraLateral = () => {
    return(
    <aside>
        <nav>
            <ListaEstilizada>
                <ItemNavegacion iconoActivo ="iconos/home-activo.png" iconoInactivo="iconos/home-inactivo.png" activo>
                    Inicio
                </ItemNavegacion>
                <ItemNavegacion iconoActivo ="iconos/mas-vistas-activo.png" iconoInactivo="iconos/mas-vistas-inactivo.png" activo>
                    Mas Visitados
                </ItemNavegacion>
                <ItemNavegacion iconoActivo ="iconos/me-gusta-activo.png" iconoInactivo="iconos/me-gusta-inactivo.png" activo>
                    Mas Me Gusta
                </ItemNavegacion>
                <ItemNavegacion iconoActivo ="iconos/nuevas-activo.png" iconoInactivo="nuevas-vistas-inactivo.png" activo>
                    Nuevas
                </ItemNavegacion>
                <ItemNavegacion iconoActivo ="iconos/sorprendeme-activo.png" iconoInactivo="iconos/sorprendeme-inactivo.png" activo>
                    Sorpréndame
                </ItemNavegacion>
            </ListaEstilizada>
        </nav>
    </aside>

    )
}
export default BarraLateral
