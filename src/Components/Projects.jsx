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
import github from "../images/github.png";
import textvoice from "../images/textvoice.png"
import toDoweb from "../images/toDoweb.png";
import gym_Mern from "../images/gym-mern.png";
import Hostel from "../images/HostelMedia.jpg";
import RealTimeCode from "../images/real-time.png";

 
const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={GeminiImage} projectName="GeminiClone" />
        <ProjectBox projectPhoto={eLearn} projectName="ELearn" />
        <ProjectBox projectPhoto={RealTimeCode} projectName="RealTimeCodeEditor"/>

        <ProjectBox projectPhoto={webWord} projectName="webWord" />
        <ProjectBox projectPhoto={github} projectName="githubProfile"/>
        <ProjectBox projectPhoto={textvoice} projectName="textvoice"/>
        <ProjectBox projectPhoto={toDoweb} projectName="toDoWeb"/>
        <ProjectBox projectPhoto={gym_Mern} projectName="gym"/>
        <ProjectBox projectPhoto={Hostel} projectName="HostelMedia"/>
        <ProjectBox projectPhoto={notesSaving} projectName="notesSaving" />




      </div>
    </div>
  );
};

export default Projects;
