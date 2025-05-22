import "./Projects.scss";

import { projectData } from "../../assets/data";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Our Projects</h2>

      <div className="projects-cards">
        {projectData.map((item, index) => (
          <div className="projects-card">
            <img src={item.img} alt="" />

            <div className="projects-card-desc">
              <h3>{item.title}</h3>
              <p>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;