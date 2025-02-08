import React from "react";
import Image from "next/image";
import "../CSS/Projects.css";
const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div>
        <h2>My Projects</h2>
        <p>Check out some of the projects I’ve been working on.</p>
      </div>

      {/* Project Grid */}
      <div className="project-grid">
        {/* Project 1 */}
        <div className="roject-card">
          <Image
            src="/Project1.jpg"
            alt="Project 1"
            width={500}
            height={300}
          />
          <div className="project-overlay">
            <div className="project-overlay-content">
              <h3>Calculator</h3>
              <p>A mini calculator built with Typescript and HTML/CSS.</p>
              <button>View Project</button>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <Image
            src="/Project2.jpg" 
            alt="Project 2"
            width={500}
            height={300}
          />
          <div className="project-overlay">
            <div className="project-overlay-content">
              <h3>ToDo List</h3>
              <p>
                Small todo list web application in which you can organize your
                any work easily.
              </p>
              <button>View Project</button>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <Image
            src="/Project3.jpg" 
            alt="Project 3"
            width={500}
            height={300}
          />
          <div className="project-overlay">
            <div className="project-overlay-content">
              <h3>Signup Form</h3>
              <p>A simple UI Signup form built with HTML/CSS and Typescript</p>
              <button>View Project</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
