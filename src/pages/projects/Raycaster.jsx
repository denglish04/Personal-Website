import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom';
import react from "react";
import myVideo from "../../assets/screenrecording.mp4";

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
	    <video src={myVideo} controls autoPlay={true} loop muted classname="rounded-xl shadow-lg w-[600px]"/>
	</>
    )
}
