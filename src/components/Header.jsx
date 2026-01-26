// src/components/Header.jsx
import Button from "../components/Button"; 
import { useNavigate } from "react-router-dom";
import ExternalComponent from "../components/ExternalComponent";

export default function Header() {


  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickBlog = () => {
    navigate("/blog");
  };

  const handleClickAbout = () => {
    navigate("/about");
  };

  const handleClickProjects = () => {
    navigate("/projects");
  };

  const handleClickSkills = () => {
    navigate("/skills");
  }








    return (
        <header className=" text-black text-center rounded-b-2xl shadow-lg bg-white">
        <div className="flex flex-col-4 shadow-sm justify-left items-left bg-white mb-2">
        <ExternalComponent imgPath="/icons/linkedin.svg" link="https://www.linkedin.com/in/djasahn-english/"/>
        <ExternalComponent imgPath="/icons/github.svg" link="https://github.com/denglish04"/>

        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        {"DJASAHN ENGLISH".split("").map((letter, idx) =>
            letter === " " ? (
                " " // leave spaces as plain text
            ) : (
                <span
                key={idx}
                className="animate-nameCycle"
                style={{ animationDelay: `${idx * 0.2}s` }}
                >
                {letter}
                </span>
            )
        )}
        </h1>

        <h2 className="text-black"> WEB DEVELOPER & ASPIRING SECURITY RESEARCH ENGINEER </h2>
        <div className="flex justify-center gap-3 mb-3">       
        <Button onClick={handleClickHome}> Home  </Button>
        <h1> | </h1>
        <Button onClick={handleClickBlog}> Blog  </Button>
        <h1> | </h1>
        <Button onClick={handleClickProjects}> Projects  </Button>
        <h1> | </h1>
        <Button onClick={handleClickSkills}> Skills </Button>
        </div>
        </header>
    );
}

