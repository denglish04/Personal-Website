import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';

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
	navigate('/raycaster');
    }

    return(
        <>
            <Header />
            <h2>Projects</h2>
            <p> Here are the personal projects I have selected as a part of my portfolio </p>
            <div>
	    	<button onClick={handleClickHome}> Home Page </button>
            	<button onClick={handleClickBlog}> Blog Page </button>
            	<button onClick={handleClickAbout}> About Page </button>
	    </div>
	    
	    <button onClick={handleClickRaycaster}> Raycaster Project </button>
	    
	    </>
    )
}
