// src/components/Header.jsx
import Button from "../components/Button"; 
import { useNavigate } from "react-router-dom";

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








return (
		<header className="bg-gradient-to-r from-[oklch(0.1_0.1_272)] to-[oklch(0.15_0.1_272)] text-white text-center py-10 rounded-b-2xl shadow-lg">
		<h1 className="text-4xl font-bold mb-2">{"Hello, I'm Djasahn English"}</h1>
        <div className="flex justify-center gap-3">
    	    <Button onClick={handleClickHome}> Home Page </Button>
		    <Button onClick={handleClickBlog}> Blog Page </Button>
		    <Button onClick={handleClickAbout}> About Me </Button>
		    <Button onClick={handleClickProjects}> Projects Page </Button>
        </div>
		</header>
	);
}

