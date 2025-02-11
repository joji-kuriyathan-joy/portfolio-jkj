const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            {/* Project Title */}
            <h3 className="project-title">{project.title}</h3>

            {/* Description */}
            <p className="project-description">{project.description}</p>

            {/* Subheading */}
            {project.subheading && <h4 className="project-subheading">{project.subheading}</h4>}

            {/* Technologies Used */}
            <div className="project-technologies">
                <strong>Technologies Used:</strong>
                <ul>
                    {project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>

            {/* Project Structure */}
            {project.projectStructure && (
                <div className="project-structure">
                    <h4>🔧 Project Structure</h4>
                    <ul>
                        {Object.entries(project.projectStructure).map(([key, value], index) => (
                            <li key={index}>
                                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && (
                <div className="project-features">
                    <h4>🚀 Key Features</h4>
                    <ul>
                        {project.keyFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Project Challenges */}
            {project.projectChallenges && (
                <div className="project-challenges">
                    <h4>⚠️ Challenges & Solutions</h4>
                    <ul>
                        {project.projectChallenges.map((challenge, index) => (
                            <li key={index}>{challenge}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Code Snippet */}
            {project.codeSnippet && (
                <div className="project-code">
                    <h4>🖥️ {project.importantCodeSnippet}</h4>
                    <pre>
                        <code>{project.codeSnippet}</code>
                    </pre>
                </div>
            )}

            {/* Future Enhancements */}
            {project.futureEnhancements && (
                <div className="project-future">
                    <h4>🔮 Future Enhancements</h4>
                    <ul>
                        {project.futureEnhancements.map((enhancement, index) => (
                            <li key={index}>{enhancement}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Impact */}
            {project.impact && (
                <div className="project-impact">
                    <h4>🌟 Impact</h4>
                    <p>{project.impact}</p>
                </div>
            )}

            {/* Reference Link */}
            {project.reference && (
                <p className="project-reference">
                    <strong>🔗 Reference:</strong>{" "}
                    <a href={project.reference} target="_blank" rel="noopener noreferrer">
                        View Project Repository
                    </a>
                </p>
            )}

            {/* Project Image */}
            {project.image && (
                <div className="project-image">
                    <img src={`${import.meta.env.BASE_URL}` + project.image} alt={project.title} />
                </div>
            )}
        </div>
    );
};

export default ProjectCard;