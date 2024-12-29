import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    GeminiCloneDesc:
      "This website is a for a local gym to help with their sales.This helped me understand React better and more clearly. I also leaned how to use openAI Api more clearly and take a deep understanding of it through this Project.",
    GeminiCloneGithub: "https://github.com/kartiknarwal/Gemin_clone",
    GeminiCloneWebsite: "https://gemini-bot-clone-by-narwal.netlify.app/",

    ELearnDesc:
      "This web app  is basically designed for Students this is a e-learning Platform Where Students Will be Able To Purchase Their Desired Courses .The project helped me with understanding the working of API.I also learned new CSS properties and tricks.",
    ELearnGithub: "https://github.com/kartiknarwal/elearning-frontend",
    ELearnWebsite: "https://elearning-kartiknarwal.vercel.app/",


    RealTimeCodeEditorDesc:
    "This is a real time code editor which helps you to write code on differnt screens and also to execute the code ",
    RealTimeCodeEditorGithub:"https://github.com/kartiknarwal/realtime_code_editor",
    RealTimeCodeEditorWebsite:"https://realtime-code-editor-3-zw8e.onrender.com/",



    webWordDesc:
      "This webpage is made for educational purposes, This behaves like  a dictionary this webapp can also spaek the word for us If we are facing Difficulty in prouncing it..",
    webWordGithub: "https://github.com/kartiknarwal/dictionaryWebapp",
    webWordWebsite: "https://webword.netlify.app/",

    githubProfileDesc:
     "This website is made to search Gihub Profile of users and also their available github repositories",
     githubProfileGithub:"https://github.com/kartiknarwal/github_profile_searcher",
     githubProfileWebsite: "https://gitghub-searcher-profile.netlify.app/",

     textvoiceDesc:
     "This website is made to prounce english vocubalry in different languages",
     textvoiceGithub:"https://github.com/kartiknarwal/text_to_speech",
     textvoiceWebsite:"https://voice-aplhabet.netlify.app/",

     toDoWebDesc:
     "This website is Manage Your Tasks You can Write down daily task and and then delete them once they are completed .No Worry if You close Your Pc your taks are saved in Your Browser local memory",
     toDoWebGithub:"https://github.com/kartiknarwal/toDoWebApp",
     toDoWebWebsite:"https://hustlemanager.netlify.app/",

     gymDesc:
      "This is Gym Website You can Check Your Bmi Here or If You Want than You can Contact the owner also.",
      gymGithub:"https://github.com/kartiknarwal/gym-frontend",
      gymWebsite:"https://narwal-desi-fitness.netlify.app/",

      HostelMediaDesc:
        "This is a social newtorking website made on mern stack You can chat,post reels and pics ",
        HostelMediaGithub:"https://github.com/kartiknarwal/hostel_media",
        HostelMediaWebsite:"https://hostel-media.onrender.com/",

        notesSavingDesc:
        "This website helps you save You Thoughts in form of notes  and save your notes.The project helped me understand Javascript more deeply using advance techniques",
      notesSavingGithub: "https://github.com/kartiknarwal/notes_app",
      notesSavingWebsite: "https://notes-saving.netlify.app/",
  



  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
