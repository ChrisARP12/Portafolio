import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <Contenido>

                <Marca>
                    <h2>Christopher A. Rajón Polanco</h2>
                    <p>Construyendo soluciones con tecnología</p>
                </Marca>

                <Links>
                    <a href="#sobre-mi">Sobre mí</a>
                    <a href="#skills">Skills</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#contacto">Contacto</a>
                </Links>

            </Contenido>

            <Copy>
                © {new Date().getFullYear()} Christopher — Todos los derechos reservados
            </Copy>
        </Container>
    );
}

export default Footer;

const Container = styled.footer`
    font-size: 1rem;
    width: 100%;
    background: #020617;
    color: white;
    padding: 3rem 2rem 1rem;
`;

const Contenido = styled.div`
    max-width: 1100px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-wrap: wrap;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

const Marca = styled.div`
    h2 {
        margin-bottom: 0.5rem;
    }

    p {
        opacity: 0.7;
        font-size: 0.9rem;
    }
`;

const Links = styled.div`
    display: flex;
    gap: 1.5rem;

    a {
        text-decoration: none;
        color: #94a3b8;

        transition: 0.3s;

        &:hover {
            color: #38bdf8;
        }
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;


const Copy = styled.p`
    text-align: center;
    margin-top: 2rem;
    font-size: 0.8rem;
    opacity: 0.6;
`;