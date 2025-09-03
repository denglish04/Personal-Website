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
		</header>
	);
}

