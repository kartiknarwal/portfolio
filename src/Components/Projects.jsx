import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../images/Film.png";
import GymImage from "../images/gym.png";
import ColourImage from "../images/colour.png";
import BackpackImage from "../images/backpack.png";
import GeminiImage from "../images/Gemini_clone.png";
import eLearn from "../images/e-learn.png";
import notesSaving from "../images/notes-saving.png";
import webWord from "../images/webWord.png";
 
const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={GeminiImage} projectName="GeminiClone" />
        <ProjectBox projectPhoto={eLearn} projectName="ELearn" />
        <ProjectBox projectPhoto={notesSaving} projectName="notesSaving" />
        <ProjectBox projectPhoto={webWord} projectName="webWord" />
      </div>
    </div>
  );
};

export default Projects;
