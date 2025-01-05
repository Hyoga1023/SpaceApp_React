import styled from "styled-components";

const FooterEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    background-color: #04244F;
    color: #ccc;
    margin-top: 20px;
    align-items: center;
`;

const LogosRedes = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 35px 20px;
    align-items: center;
    gap: 30px;
    width: auto;
    height: 30%;
`;

const LogoDesarrollador = styled.div`
    display: flex;
    width: auto;
    height: 90px;
    margin-top: 5px;
`;

const Texto = styled.p`
    display: flex;
    align-items: center;
    padding: 0 20px;
`;

const Footer = () => {
    return (
        <FooterEstilizado>
            <LogosRedes>
                <img src="https://github.com/Hyoga1023/SpaceApp_React/blob/main/public/Otros/facebook.png" alt="Logo Facebook" />
                <img src="/otros/twitter.png" alt="Logo Twitter" />
                <img src="/otros/instagram.png" alt="Logo Instagram" />
            </LogosRedes>
            <LogoDesarrollador>
                <img src="/otros/logo_letra_blanca_sin_fondo.png" alt="Logo Desarrollador" />
            </LogoDesarrollador>
            <Texto>© 2025 Todos los derechos reservados.</Texto>
        </FooterEstilizado>
    );
};

export default Footer;

