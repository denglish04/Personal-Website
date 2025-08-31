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
		<header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-10 rounded-b-2xl shadow-lg">
		<h1 className="text-4xl font-bold mb-2">Djasahn English</h1>
		<h3 className="text-lg opacity-90">
		🚧 This page is under construction. For contact info visit{" "}
		<a
		href="https://www.linkedin.com/in/djasahn-english"
		target="_blank"
		rel="noopener noreferrer"
		className="underline font-semibold hover:text-yellow-300 transition-colors"
		>
		LinkedIn
		</a>
		</h3>
		<Button onClick={handleClickHome}> Home Page </Button>
		<Button onClick={handleClickBlog}> Blog Page </Button>
		<Button onClick={handleClickAbout}> About Page </Button>
		<Button onClick={handleClickProjects}> Projects Page </Button>

		</header>
	);
}

