import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
export default function Blog(){

    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/');  // Navigate to About page using the navigate hook
    };

    const handleClickAbout = () => {
        navigate('/about');  // Navigate to About page using the navigate hook
    };

    return(
        <>
            <Header />
            <h2>Blog Page</h2>
            <button onClick={handleClickHome}> Home Page </button>
            <button onClick={handleClickAbout}> About Page </button>
        </>
    )
}