import styled from 'styled-components';
import yo from '../assets/yo.jpg';

function Sobremi() {
    return (
        <Container id="sobre-mi">
            <Contenido>
                <Texto>
                    <Titulo>Sobre mí</Titulo>

                    <Descripcion>
                        Soy Ingeniero de Software enfocado en el desarrollo frontend moderno con React.
                        Me apasiona construir interfaces limpias, responsivas y orientadas a resolver problemas reales.
                    </Descripcion>

                    <Descripcion>
                        Actualmente trabajo con tecnologías como JavaScript, React, Styled Components y herramientas modernas del ecosistema frontend.
                        Siempre busco mejorar mis habilidades y crear experiencias de usuario eficientes y atractivas.
                    </Descripcion>
                </Texto>

                <ImagenContainer>
                    <Imagen src={yo} alt="Christopher" />
                </ImagenContainer>
            </Contenido>
        </Container>
    );
}

export default Sobremi;


const Container = styled.section`
    width: 100%;
    padding: 5rem 2rem;
    background-color: #020617;
    color: white;
`;

const Contenido = styled.div`
    max-width: 1100px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 3rem;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

const Texto = styled.div`
    flex: 1;
`;

const Titulo = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Descripcion = styled.p`
    font-size: 1.1rem;
    line-height: 1.8;
    opacity: 0.9;

    margin-bottom: 1.2rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const ImagenContainer = styled.div`
    flex: 1;

    display: flex;
    justify-content: center;
`;

const Imagen = styled.img`
    width: 280px;
    height: 280px;

    object-fit: cover;

    border-radius: 20px;

    box-shadow: 0 10px 30px rgba(0,0,0,0.4);

    @media (max-width: 768px) {
        width: 220px;
        height: 220px;
    }
`;