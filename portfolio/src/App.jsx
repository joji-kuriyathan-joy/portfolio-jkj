import { useState } from "react";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import { ProjectContext, ProjectDataContext } from "./Context.jsx";
import { projectList, projectsData } from "./data.js";
import AllProjects from "./AllProjects.jsx";

const Portfolio = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const toggleProjects = (value) => {
    setShowAllProjects(value);
  };

  return (
    <>
      {showAllProjects ? (
        <div className="wrapper wrapper-allproj ">
          <ProjectDataContext.Provider value={{ projectsData }}>
            <AllProjects />
          </ProjectDataContext.Provider>
        </div>
      ) : (
        <div className="wrapper wrapper-home">
          <About />
          <ProjectContext.Provider value={{ projectList }}>
            <Projects sendData={toggleProjects} />
          </ProjectContext.Provider>

          <Experience />
          <Skills />
        </div>
      )}
    </>
  );
};

export default Portfolio;
