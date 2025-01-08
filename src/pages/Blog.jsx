import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Blog(){

    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/');  // Navigate to About page using the navigate hook
    };

    const handleClickAbout = () => {
        navigate('/about');  // Navigate to About page using the navigate hook
    };

    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleSubmit = () =>{
        alert(`You've submitted the topic: ${text}`);
        setText('');  // Clear the input field after submission
    }

    return(
        <>
            <Header />
            <h2>Blog Page</h2>
            <button onClick={handleClickHome}> Home Page </button>
            <button onClick={handleClickAbout}> About Page </button>
            <div>
                <input type="text" value={text} onChange={handleChange} placeholder = "Blog Topic Suggestions or Requests..."/>
                <button onClick={handleSubmit}> Submit </button>
            </div>
        </>
    )
}