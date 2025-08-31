import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from "../components/Button"; 

export default function Blog(){

    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/');  // Navigate to About page using the navigate hook
    };

    const handleClickAbout = () => {
        navigate('/about');  // Navigate to About page using the navigate hook
    };

	
    const handleClickProjects = () => {
    	navigate('/projects')
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleSubmit = () =>{
        alert(`You've submitted the topic: ${text}`);
        console.log("The topic you submited was: " + text);
        setText('');  // Clear the input field after submission
    }

    return(
        <>
            <Header />
            <h2>Blog Page</h2>
	    <div>
                <input type="text" value={text} onChange={handleChange} placeholder = "Blog Topic Suggestions or Requests..."/>
                <Button onClick={handleSubmit}> Submit </Button>
            </div>
        </>
    )
}
