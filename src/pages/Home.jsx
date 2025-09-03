import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // adjust path as needed
import Button from "../components/Button"; 
import Card from "../components/Card";
import Footer from "../components/Footer";
import Layout from "../components/Layout";



export default function Home() {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate("/");
    };

    const handleClickBlog = () => {
        navigate("/blog");
    };

    const handleClickAbout = () => {
        navigate("/about");
    };

    const handleClickProjects = () => {
        navigate("/projects");
    };

    return (
        <>
        <Layout>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card title="About Me" description="Hi, I’m Djasahn — Computer Science student, builder, and researcher. I design and develop software with an eye for detail, adaptability, and real-world problem solving. My background blends technical programming, cognitive science research, and leadership experience across athletics and student organizations. If you'd like to learn more about me check out the 'About Me' section">
                    <Button onClick ={handleClickAbout}> About Me </Button>
                </Card>
                <Card title="Langueges & Skills" description = {"This is the stuff I'm good at; Python, PyTorch, Java, C, C++, JavaScript, HTML, CSS, React, GDScript. Software & Tools: GitHub (Version Control), Godot Engine, Unity, VS Code, Vim/Neovim, Unix Shells (Bash & Zsh — navigation, custom configs, scripting/automation), Tmux, Chrome/Firefox DevTools."}>
                </Card>
                <Card title="Portfolio" description="Explore my portfolio of software, web apps, and creative experiments."> 
                    <Button onClick={handleClickProjects}> Projects Page </Button>
            </Card>
        </div>
        </Layout>
        </>
    );
}

