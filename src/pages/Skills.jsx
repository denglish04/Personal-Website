import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button"; 
import Layout from "../components/Layout";

export default function About(){
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/');  // Navigate to About page using the navigate hook
    };

    const handleClickBlog = () => {
        navigate('/blog');  // Navigate to About page using the navigate hook
    };

    const handleClickProjects = () => {
    	navigate('/projects')
    }

    return(
        <>
        <Layout>
            <h2>About Page</h2>
            <p>I am a driven computer science major and student athlete at Occidental College, passionate about combining technology with insights into human cognition. </p>
        </Layout>
        </>
    )
}
