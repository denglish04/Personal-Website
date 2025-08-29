import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom';

export default function Projects(){
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/');  // Navigate to home page using the navigate hook
    };

    const handleClickProjects = () => {
	navigate("/projects")
    }
return(
        <>
            <Header />
            <h2>2D Multiplayer</h2>
	    <p> this is the 2D Multiplayer project, check it out this netlify hosted site:</p>
	    <a href="https://blickxel.netlify.app/" target="_blank" rel="noopener noreferrer"> Click Here</a>
            <p> Here are the personal projects I have selected as a part of my portfolio </p>
            <button onClick={handleClickHome}> Home Page </button>
	    <button onClick={handleClickProjects}> Projects Page </button>

	</>
    )
}
