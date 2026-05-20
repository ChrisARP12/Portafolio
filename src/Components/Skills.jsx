import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faNpm,
    faAndroid,
    faReact,
    faHtml5,
    faCss3Alt,
    faJs,
    faNodeJs,
    faGitAlt,
    faGithub
} from '@fortawesome/free-brands-svg-icons';

import {
    faGear,
    faDatabase,
    faMobileScreen,
    faMagnifyingGlassChart,
    faCode,
    faScrewdriverWrench,
    faPeopleGroup,
    faPalette
} from '@fortawesome/free-solid-svg-icons';

function Skills() {
    return (
        <Container id="skills">

            <Titulo>Skills & Tecnologías</Titulo>

            <Descripcion>
                Tecnologías y herramientas que utilizo para construir
                aplicaciones modernas, escalables y enfocadas en la
                experiencia de usuario.
            </Descripcion>

            <Grid>

                {/* FRONTEND */}
                <Card>
                    <h3>
                        <FontAwesomeIcon icon={faCode} />
                        Frontend
                    </h3>

                    <Tecnologias>

                        <Tech>
                            <FontAwesomeIcon icon={faJs} />
                            JavaScript
                        </Tech>

                        <Tech>
                            <FontAwesomeIcon icon={faReact} />
                            React
                        </Tech>

                        <Tech>
                            <FontAwesomeIcon icon={faHtml5} />
                            HTML5
                        </Tech>

                        <Tech>
                            <FontAwesomeIcon icon={faCss3Alt} />
                            CSS3
                        </Tech>

                        <Tech>
                            Responsive Design
                        </Tech>

                    </Tecnologias>
                </Card>

                {/* UI / STYLING */}
                <Card>
                    <h3>
                        <FontAwesomeIcon icon={faPalette} />
                        UI / Styling
                    </h3>

                    <Tecnologias>

                        <Tech>
                            Styled Components
                        </Tech>

                        <Tech>
                            Tailwind CSS
                        </Tech>

                        <Tech>
                            Flexbox
                        </Tech>

                        <Tech>
                            CSS Grid
                        </Tech>

                        <Tech>
                            UI / UX
                        </Tech>

                        <Tech>
                            <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                            SEO & Optimización Web
                        </Tech>

                    </Tecnologias>
                </Card>

                {/* BACKEND */}
                <Card>
                    <h3>
                        <FontAwesomeIcon icon={faDatabase} />
                        Backend
                    </h3>

                    <Tecnologias>

                        <Tech>
                            <FontAwesomeIcon icon={faNodeJs} />
                            Node.js
                        </Tech>

                        <Tech>
                            <FontAwesomeIcon icon={faJs} />
                            Express
                        </Tech>

                        <Tech>
                            <FontAwesomeIcon icon={faGear} />
                            REST APIs
                        </Tech>

                        <Tech>
                            <FontAwesomeIcon icon={faDatabase} />
                            SQL
                        </Tech>

                    </Tecnologias>
                </Card>

                {/* MOBILE */}
                <Card>
                    <h3>
                        <FontAwesomeIcon icon={faMobileScreen} />
                        Mobile
                    </h3>

                    <Tecnologias>

                        <Tech>
                            <FontAwesomeIcon icon={faReact} />
                            React Native
                        </Tech>

                        <Tech>
                            <FontAwesomeIcon icon={faAndroid} />
                            Android Studio
                        </Tech>

                    </Tecnologias>
                </Card>

                {/* TOOLS */}
                <Card>
                    <h3>
                        <FontAwesomeIcon icon={faScrewdriverWrench} />
                        Tools
                    </h3>

                    <Tecnologias>

                        <Tech>
                            <FontAwesomeIcon icon={faGitAlt} />
                            Git
                        </Tech>

                        <Tech>
                            <FontAwesomeIcon icon={faGithub} />
                            GitHub
                        </Tech>

                        <Tech>
                            <Logo src="/favicon.svg" alt="Vite" />
                            Vite
                        </Tech>

                        <Tech>
                            <FontAwesomeIcon icon={faNpm} />
                            npm
                        </Tech>

                    </Tecnologias>
                </Card>

                {/* SOFT SKILLS */}
                <Card>
                    <h3>
                        <FontAwesomeIcon icon={faPeopleGroup} />
                        Soft Skills
                    </h3>

                    <Tecnologias>

                        <Tech>
                            Resolución de problemas
                        </Tech>

                        <Tech>
                            Trabajo en equipo
                        </Tech>

                        <Tech>
                            Comunicación
                        </Tech>

                        <Tech>
                            Gestión de proyectos
                        </Tech>

                    </Tecnologias>
                </Card>

            </Grid>
        </Container>
    );
}

export default Skills;



const Container = styled.section`
    width: 100%;
    padding: 5rem 2rem;

    background: #020617;
    color: white;
`;
const Logo = styled.img`
    width: 18px;
    height: 18px;
    object-fit: contain;
`;

const Titulo = styled.h1`
    text-align: center;

    font-size: 2.8rem;

    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
`;

const Descripcion = styled.p`
    text-align: center;

    max-width: 700px;

    margin: 0 auto 4rem;

    line-height: 1.7;

    opacity: 0.8;

    font-size: 1.05rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const Grid = styled.div`
    max-width: 1200px;

    margin: 0 auto;

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 2rem;

    @media (max-width: 950px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 650px) {
        grid-template-columns: 1fr;
    }
`;

const Card = styled.div`
    background: #1e293b;

    padding: 2rem;

    border-radius: 20px;

    border: 1px solid transparent;

    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-8px);
        border-color: #38bdf8;
    }

    h3 {
        display: flex;
        align-items: center;
        gap: 0.7rem;

        color: #38bdf8;

        margin-bottom: 1.5rem;

        font-size: 1.3rem;
    }

    h3 svg {
        font-size: 1.2rem;
    }
`;

const Tecnologias = styled.div`
    display: flex;

    flex-wrap: wrap;

    gap: 1rem;
`;

const Tech = styled.div`
    display: flex;

    align-items: center;

    gap: 0.6rem;

    background: #0f172a;

    padding: 0.8rem 1rem;

    border-radius: 12px;

    font-size: 0.95rem;

    transition: all 0.3s ease;

    cursor: default;

    svg {
        color: #38bdf8;
        font-size: 1.1rem;
    }

    &:hover {
        background: #334155;

        transform: scale(1.05);
    }
`;