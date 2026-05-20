import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import yo from '../assets/yo.jpg';

function Cabecera() {
    return (
        <Header>
            <Contenido>
                <Foto
                    src={yo}
                    alt="Christopher Arturo Rajón Polanco"
                />

                <Titulo>
                    Soy Christopher Arturo Rajón Polanco
                </Titulo>

                <Subtitulo>
                    Ingeniero de Software | Frontend Developer
                </Subtitulo>

                <Descripcion>
                    Mi pasión es resolver problemas mediante la tecnología.
                    Cada bug es solo un rompecabezas esperando ser resuelto.
                </Descripcion>

                <Botones>
                    <Boton href="#proyectos">
                        Ver Proyectos
                    </Boton>

                    <BotonSecundario href="#contacto">
                        Contactarme
                    </BotonSecundario>
                </Botones>
                <Flecha href="#sobre-mi">
                    <FontAwesomeIcon icon={faChevronDown} />
                </Flecha>
            </Contenido>
        </Header>
    );
}

export default Cabecera;

const Header = styled.header`
    width: 100%;
    min-height: 100dvh;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 2rem;

    background: linear-gradient(
        135deg,
        #0f172a 0%,
        #1e293b 50%,
        #334155 100%
    );

    color: white;

    overflow: hidden;

    @media (max-width: 768px) {
        padding: 1.2rem;
    }
`;

const Contenido = styled.div`
    width: 100%;
    max-width: 900px;

    display: flex;
    flex-direction: column;

    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
        gap: 0.5rem;
    }
`;

const Foto = styled.img`
    width: 220px;
    height: 220px;

    border-radius: 50%;

    object-fit: cover;

    border: 5px solid white;

    margin-bottom: 2rem;

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);

    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        width: 145px;
        height: 145px;
    }
`;

const Titulo = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;

    line-height: 1.2;

    margin-bottom: 1rem;

    word-break: break-word;

    @media (max-width: 768px) {
        font-size: 1.9rem;
    }
`;

const Subtitulo = styled.h2`
    font-size: 1.6rem;
    font-weight: 500;

    color: #38bdf8;

    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const Descripcion = styled.p`
    max-width: 700px;

    font-size: 1.1rem;

    line-height: 1.8;

    opacity: 0.9;

    margin-bottom: 2.5rem;

    @media (max-width: 768px) {
        font-size: 1.05rem;
        line-height: 1.7;
    }
`;

const Botones = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    gap: 1rem;

    flex-wrap: wrap;
`;

const Boton = styled.a`
    padding: 1rem 2rem;

    background-color: #38bdf8;

    color: white;

    border-radius: 12px;

    text-decoration: none;

    font-weight: bold;

    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-3px);
        background-color: #0ea5e9;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const BotonSecundario = styled.a`
    padding: 1rem 2rem;

    border: 2px solid white;

    color: white;

    border-radius: 12px;

    text-decoration: none;

    font-weight: bold;

    transition: all 0.3s ease;

    &:hover {
        background-color: white;
        color: #0f172a;

        transform: translateY(-3px);
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    
`;
const Flecha = styled.a`
    margin-top: 1rem;

    font-size: 2.5rem;

    color: white;

    text-decoration: none;

    opacity: 0.7;

    animation: bounce 1.5s infinite;

    transition: 0.3s;

    &:hover {
        opacity: 1;
        transform: scale(1.2);
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(10px);
        }
        60% {
            transform: translateY(5px);
        }
    }
`;