import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button"; 
import { Outlet } from "react-router-dom"; 
import Card from "../components/Card";
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
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 flex justify-center">
         <Card title="2D Multiplayer Demo" description="A 2D multiplayer demo where players interact in real-time within a shared environment, showcasing movement, basic mechanics, and networked gameplay.">
            <Button onClick={handleClick2DMultiplayerDemo}> 2D Multiplayer Demo Project </Button>
        </Card>
        <Card title="Raycaster" description="A 3D-style raycasting demo that renders a first-person perspective in a 2D environment, simulating 3D walls and spaces with real-time player movement."> 
            <Button onClick={handleClickRaycaster}> Raycaster Project </Button>
        </Card>
    </div>
    </>
);
}
