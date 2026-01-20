import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button"; 
import Layout from "../components/Layout";
import Card from "../components/Card";

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
            <div className="flex justify-center gap-3">
                <Card title="Skills" description="Programming & Development: Python, PyTorch, Java, C, C++, JavaScript, HTML, CSS, React, GDScript. Software & Tools: GitHub (Version Control), Godot Engine, Unity, VS Code, Vim/Neovim, Unix Shells (Bash & Zsh — navigation, custom configs, scripting/automation), Tmux, Chrome/Firefox DevTools. Data & Documentation: Excel, Google Workspace, LaTeX, Typst Hobbies:  Losing track of time in philosophy, history, or fiction books, exploring new hiking trails, tracking down the classic songs sampled in modern music, and treating Catan, or any card game, like a contact sport.">
                <div className="flex justify-center">
                    <Card title="Programming and Development">
                    </Card>
                    <Card title="Software & Tools">
                    </Card>
                    <Card title="Data & Documentation">
                    </Card>
                </div>
                
                </Card>
            </div>
        </Layout>
        </>
    )
}
