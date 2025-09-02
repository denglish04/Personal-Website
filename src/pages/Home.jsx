import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // adjust path as needed
import Button from "../components/Button"; 
import Card from "../components/Card";

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
        <Header />
        <h2>Hi, I’m Djasahn — Computer Science student, builder, and researcher.
I design and develop software with an eye for detail, adaptability, and real-world problem solving. My background blends technical programming, cognitive science research, and leadership experience across athletics and student organizations.</h2>


        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="First Card" description="This is the first card." />
            <Card title="Second Card" description="This is the second card." />
            <Card title="Portfolio" description="Explore my portfolio of software, web apps, and creative experiments."> 
                <Button onClick={handleClickProjects}> Projects Page </Button>
            </Card>
        </div>
        </>
    );
}

