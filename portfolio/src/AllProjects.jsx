
import { ProjectDataContext } from './Context.jsx'
import { useContext, useState } from 'react';
import ProjectCard from './components/ProjectCard.jsx'
import './AllProjects.css';
const AllProjects = () => {

    const { projectsData } = useContext(ProjectDataContext);
    const [showProject, setShowProject] = useState(false);
    const [curProjectInfo, setCurProjectInfo] = useState(null);

    function handleProjectShowClick(project) {
        setShowProject(!showProject);
        setCurProjectInfo(project);
    }

    console.log("showProject", showProject);
    console.log("curProjectInfo", curProjectInfo);
    return (
        <div className="all-projects">
            <h2>Projects</h2>

            {showProject ? <ProjectCard project={curProjectInfo != null ? curProjectInfo : {}} />
                :
                <div className="project-list">
                    {projectsData.map((project) => (
                        <article className='pr-article' key={project.id}>
                            <div className="article-wrapper">
                                <figure>
                                    {project.image && (
                                        <img src={`${import.meta.env.BASE_URL}` + project.image} alt={project.title} />
                                    )}

                                </figure>
                                <div className="article-body">
                                    <h2>{project.title}</h2>
                                    <p>
                                        {project.description}
                                    </p>
                                    <button onClick={() => handleProjectShowClick(project)} className="read-more">
                                        Read more <span className="sr-only">about this is some title</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            }





        </div>
    );
};

export default AllProjects;



