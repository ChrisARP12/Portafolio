import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contacto() {
    return (
        <Container id="contacto">
            <Contenido>

                <Titulo>Trabajemos juntos 🚀</Titulo>

                <Descripcion>
                    Estoy disponible para desarrollar soluciones web modernas,
                    escalables y enfocadas en resultados.
                    <br /><br />
                    Si tienes una idea, proyecto o necesitas mejorar tu producto actual,
                    podemos trabajar juntos para llevarlo al siguiente nivel.
                </Descripcion>

                <BotonPrincipal href="mailto:christopherpolanco402@gmail.com">
                    Enviar mensaje
                </BotonPrincipal>

                <Subtexto>
                    o encuéntrame en:
                </Subtexto>

                <Redes>
                    <a href="https://github.com/ChrisARP12">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>

                    <a href="https://www.linkedin.com/in/carp-755775236/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a href="mailto:christopherpolanco402@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </Redes>

            </Contenido>
        </Container>
    );
}

export default Contacto;


const Container = styled.section`
    width: 100%;
    padding: 6rem 2rem;

    background: linear-gradient(
        135deg,
        #0f172a,
        #020617
    );

    color: white;
    text-align: center;
`;

const Contenido = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const Titulo = styled.h1`
    font-size: 2.8rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Descripcion = styled.p`
    font-size: 1.1rem;
    line-height: 1.8;
    opacity: 0.9;

    margin-bottom: 2.5rem;
`;

const BotonPrincipal = styled.a`
    display: inline-block;

    background: #38bdf8;
    color: #020617;

    padding: 1rem 2.5rem;

    border-radius: 12px;

    font-weight: bold;
    text-decoration: none;

    margin-bottom: 2rem;

    transition: 0.3s;

    &:hover {
        transform: translateY(-3px);
        background: #0ea5e9;
    }
`;

const Subtexto = styled.p`
    margin-bottom: 1rem;
    opacity: 0.7;
`;

const Redes = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;

    font-size: 1.8rem;

    a {
        color: white;
        transition: 0.3s;

        &:hover {
            color: #38bdf8;
            transform: translateY(-3px);
        }
    }
`;