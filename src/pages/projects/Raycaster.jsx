import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';

export default function Projects(){
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/');  // Navigate to About page using the navigate hook
    };

    const handleClickProjects = () => {
	navigate("/projects")
    }
return(
        <>
            <Header />
            <h2>Raycaster</h2>
	    <p> this is the raycaster project, see more at this repo:</p>
	    <a href="https://github.com/denglish04/raycasterDemo"> Click Here</a>
            <p> Here are the personal projects I have selected as a part of my portfolio </p>
            <button onClick={handleClickHome}> Home Page </button>
        </>
    )
}
