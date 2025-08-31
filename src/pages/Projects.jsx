import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button"; 
import { Outlet } from "react-router-dom"; 

export default function Projects(){
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/');  // Navigate to About page using the navigate hook
    };

    const handleClickBlog = () => {
        navigate('/blog');  // Navigate to About page using the navigate hook
    };

    const handleClickAbout = () => {
	navigate('/about');
    };

    const handleClickRaycaster = () => {
	navigate('/projects/raycaster');
    }

    const handleClick2DMultiplayerDemo = () => {
	navigate('/projects/multiplayerdemo');
    }
return(
        <>
            <Header />
            <h2>Projects</h2>
            <p> Here are the personal projects I have selected as a part of my portfolio </p>
      
	    <Button onClick={handleClickRaycaster}> Raycaster Project </Button>
	    <Button onClick={handleClick2DMultiplayerDemo}> 2D Multiplayer Demo Project </Button>
	    </>
    )
}
