import styled from 'styled-components';
import certificaciones from '../data/certificaciones.json';
import { useState } from 'react';

const logros = [
    "Más de 20 proyectos desarrollados",
    "Experiencia en desarrollo frontend moderno",
    "Enfoque en UI/UX y rendimiento",
    "Aprendizaje continuo en nuevas tecnologías"
];

const images = import.meta.glob('../assets/certs/*', {
    eager: true,
    import: 'default'
});

const getImage = (name) => {
    const path = `../assets/certs/${name}`;
    return images[path];
};

function Certificaciones() {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const abrirModal = (imagen) => {
        setSelectedImage(imagen);
        setModalOpen(true);
    };

    const cerrarModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <Container id="certificaciones">

            <Titulo>Certificaciones & Logros</Titulo>

            <Subtitulo>Certificaciones</Subtitulo>

            <Grid>
                {certificaciones.map((c, i) => (

                    <Card key={i}>

                        <Imagen
                            src={getImage(c.imagen)}
                            alt={c.titulo}
                        />

                        <Overlay>
                            <h4>{c.titulo}</h4>

                            <Boton
                                onClick={() =>
                                    abrirModal(getImage(c.imagen))
                                }
                            >
                                Ver certificado
                            </Boton>

                        </Overlay>

                    </Card>

                ))}
            </Grid>

            <Subtitulo>Logros</Subtitulo>

            <LogrosGrid>
                {logros.map((l, i) => (
                    <Logro key={i}>
                        {l}
                    </Logro>
                ))}
            </LogrosGrid>

            {/* MODAL */}

            {modalOpen && (
                <ModalBackground onClick={cerrarModal}>

                    <ModalContenido
                        onClick={(e) => e.stopPropagation()}
                    >

                        <Cerrar onClick={cerrarModal}>
                            ✕
                        </Cerrar>

                        <ImagenModal
                            src={selectedImage}
                            alt="Certificado"
                        />

                    </ModalContenido>

                </ModalBackground>
            )}

        </Container>
    );
}

export default Certificaciones;

const ModalBackground = styled.div`
    position: fixed;

    inset: 0;

    background: rgba(0,0,0,0.85);

    backdrop-filter: blur(5px);

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 999;
    
    padding: 1rem;
`;

const ModalContenido = styled.div`
    position: relative;

    max-width: 900px;
    width: 100%;

    animation: aparecer 0.3s ease;

    @keyframes aparecer {
        from {
            opacity: 0;
            transform: scale(0.9);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

const ImagenModal = styled.img`
    width: 100%;

    max-height: 90vh;

    object-fit: contain;

    border-radius: 15px;
`;

const Cerrar = styled.button`
    position: absolute;

    top: -15px;
    right: -15px;

    width: 40px;
    height: 40px;

    border: none;

    border-radius: 50%;

    background: #38bdf8;
    color: #020617;

    font-size: 1.2rem;
    font-weight: bold;

    cursor: pointer;

    transition: 0.3s;

    &:hover {
        transform: scale(1.1);
    }
`;

const Container = styled.section`
    width: 100%;
    padding: 5rem 2rem;
    background: #0f172a;
    color: white;
`;

const Titulo = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
`;

const Subtitulo = styled.h2`
    margin: 2rem 0;
    color: #38bdf8;
    text-align: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-bottom: 3rem;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const Card = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    cursor: pointer;
`;

const Imagen = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const Overlay = styled.div`
    position: absolute;
    inset: 0;

    background: rgba(0,0,0,0.85);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    opacity: 0;
    transition: 0.3s;

    ${Card}:hover & {
        opacity: 1;
    }
`;

const Boton = styled.a`
    margin-top: 1rem;

    background: #38bdf8;
    color: #020617;

    padding: 0.5rem 1rem;
    border-radius: 8px;

    text-decoration: none;
    font-weight: bold;
`;

const LogrosGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    max-width: 800px;
    margin: 0 auto;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const Logro = styled.div`
    background: #1e293b;
    padding: 1.2rem;
    border-radius: 12px;

    text-align: center;

    font-size: 1rem;

    transition: 0.3s;

    &:hover {
        transform: translateY(-5px);
        background: #334155;
    }
`;