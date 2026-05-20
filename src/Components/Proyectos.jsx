import styled from 'styled-components';
import projects from '../data/proyects.json';
const images = import.meta.glob('../assets/projects/*', {
    eager: true,
    import: 'default'
});

const getImage = (name) => {
    const path = `../assets/projects/${name}`;
    return images[path];
};

function Proyectos() {
    const destacados = projects.filter(p => p.featured);
    const otros = projects.filter(p => !p.featured);

    return (
        <Container id="proyectos">
            <Titulo>Proyectos</Titulo>

            {/* 🔥 DESTACADOS */}
            <Subtitulo>Proyectos Destacados</Subtitulo>
            <Grid>
                {destacados.map(p => (
                    <Card key={p.id}>
                        <Imagen src={getImage(p.image)} alt={p.name} />

                        <Overlay>
                            <h3>{p.name}</h3>
                            <p>{p.description}</p>

                            <Tags>
                                {p.tech.map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </Tags>

                            <Estado $status={p.status}>
                                {p.status}
                            </Estado>

                            <Botones>
                                <a href={p.demo} target="_blank">Demo</a>
                                <a href={p.github} target="_blank">GitHub</a>
                            </Botones>
                        </Overlay>
                    </Card>
                ))}
            </Grid>

            {/* ⚡ OTROS PROYECTOS */}
            <Subtitulo>Otros proyectos</Subtitulo>
            <Lista>
                {otros.map(p => (
                    <li key={p.id}>
                        <a href={p.github} target="_blank">
                            {p.name}
                        </a>
                    </li>
                ))}
            </Lista>
        </Container>
    );
}

export default Proyectos;



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
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

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
    height: 250px;
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
    padding: 1rem;

    text-align: center;

    ${Card}:hover & {
        opacity: 1;
    }
`;

const Tags = styled.div`
    margin: 1rem 0;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;

    span {
        background: #1e293b;
        padding: 0.3rem 0.6rem;
        border-radius: 8px;
        font-size: 0.8rem;
    }
`;

const Estado = styled.span`
    margin-bottom: 1rem;
    font-size: 0.9rem;

    color: ${({ $status }) =>
        $status === "Producción" ? "#22c55e" :
        $status === "En desarrollo" ? "#facc15" :
        "#94a3b8"};
`;

const Botones = styled.div`
    display: flex;
    gap: 1rem;

    a {
        background: #38bdf8;
        color: #020617;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        text-decoration: none;
        font-weight: bold;
    }
`;

const Lista = styled.ul`
    margin-top: 1rem;

    li {
        margin-bottom: 0.5rem;
    }

    a {
        color: #94a3b8;
        text-decoration: none;

        &:hover {
            color: #38bdf8;
        }
    }
`;