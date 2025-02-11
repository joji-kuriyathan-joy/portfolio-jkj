import { useContext } from 'react';
import Card from './components/Card.jsx';
import { ProjectContext } from './Context.jsx'


export const handleCardClick = (e, link) => {
    e.preventDefault();
    window.open(link, '_blank', 'noopener,noreferrer');
}

const Projects = ({ sendData }) => {

    const { projectList } = useContext(ProjectContext);


    return (
        <section className="projects-wrapper">
            <div className='project-head'>
                <h1 className='ubuntu-medium'>Projects</h1>
                {projectList.length > 2 && (
                    <button className='btn-custom' type="button" onClick={() => sendData()}>
                        See all
                    </button>
                )}

            </div>

            <Card cardData={projectList} onCardClick={handleCardClick} cardType="projects" />
        </section>
    );
}

export default Projects;