import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // adjust path as needed
import Button from "../components/Button"; 

export default function Home() {
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
    <>
      <Header />
      <h2>Home Page</h2>
   </>
  );
}

