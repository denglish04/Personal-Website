import { useNavigate } from "react-router-dom";
import Button from "../components/Button"; 
import Card from "../components/Card";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import SkillComponent from "../components/skillComponent";
import ProjectComponent from "../components/ProjectComponent";


export default function Home() {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate("/");
    };

    const handleClickBlog = () => {
        navigate("/blog");
    };

    const handleClickProjects = () => {
        navigate("/projects");
    };

    const handleClickSkills = () => {
        navigate("/skills");
    };

    return (
        <>
            <Layout>
                 {/* About Me Section */}
                <div className="grid grid-cols-1 gap-6">
                    <div className="flex justify-center md:col-span-2">
                        <AboutCard 
                            title="About Me" 
                            description1="Welcome! I’m a computer scientist studying as a junior at Occidental College in Los Angeles, CA. I consider Chicago home but I’m originally from Philadelphia so it will always be “Fly Eagles Fly!” I'm currently working on my comps and pursuing a computational mathematics theme associated with my major. This theme is concentrated on leveraging graph neural networks (GNNs) for Network Intrusion Detection Systems (NIDS); to analyze, stress-test, and visualize the structure and dynamics of cyber infrastructure."
                            description2=" My background blends technical programming and leadership experience across athletics and student organizations. This site serves as a hub for the things I know, am learning, or working on, with links to documentation and resources I frequently use. I also share thoughts on various topics through my blog. The goal of this content is to hone my own abilities and serve as outreach for professional and collaborative opportunities in the field."
                        >
                            {/* Resume Link inside AboutCard */}
	    		<div className="flex justify-center">
                            <div className="grid grid-cols-2 justify-center gap-4">
                                <a
                                    href="/DEnglish_Resume_[Winter2025].pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm underline"
                                >
                                    Resume
                                </a>
	    			<a
                                    href="/Comps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm underline"
                                >
                                   Comps
                                </a>

                            </div>
	    		</div>
                        </AboutCard>
                    </div>
                </div>
                {/* Skills & Technologies Section */}
                <div className="flex justify-center md:col-span-2">
                    <Card 
                        title="Skills & Technologies" 
                        description="If you're curious about what I'm good at check out the Skills page for a list of technologies, languages, tools, and libraries that Stack-Overflow and I are comfortable with. Or, if you just want to hear me talk about what I'm working on check out the Blog page"
                    >
                        <div className="grid grid-cols-4 justify-center gap-20 pad-10">
                            <SkillComponent imgPath="icons/python.svg" title="Python" link="https://www.python.org/" />
                            <SkillComponent imgPath="icons/pytorch-icon.svg" title="Pytorch" link="https://pytorch.org/" />
                            <SkillComponent imgPath="icons/java.svg" title="Java" link="https://www.java.com/en/" />
                            <SkillComponent imgPath="icons/c.webp" title="C" link="https://www.c-language.org/" />
                            <SkillComponent imgPath="icons/c-plusplus.svg" title="C++" link="https://isocpp.org/" />
                            <SkillComponent imgPath="icons/javascript.svg" title="JavaScript" link="https://en.wikipedia.org/wiki/JavaScript" />
                            <SkillComponent imgPath="icons/typescript-icon.svg" title="TypeScript" link="https://www.typescriptlang.org/" />
                            <SkillComponent imgPath="icons/html-5.svg" title="HTML" link="https://en.wikipedia.org/wiki/HTML" />
                            <SkillComponent imgPath="icons/css-3.svg" title="CSS" link="https://www.w3.org/Style/CSS/Overview.en.html" />
                            <SkillComponent imgPath="icons/tailwindcss-icon.svg" title="Tailwind CSS" link="https://tailwindcss.com/" />
                            <SkillComponent imgPath="icons/react.svg" title="React" link="https://react.dev/" />
                            <SkillComponent imgPath="icons/nextjs-icon.svg" title="Next.js" link="https://nextjs.org/" />
                            <SkillComponent imgPath="icons/nodejs-icon.svg" title="Node.js" link="https://nodejs.org/en" />
                            <SkillComponent imgPath="icons/vitejs.svg" title="Vite" link="https://vite.dev/" />
                            <SkillComponent imgPath="icons/godot-icon.svg" title="Godot" link="https://godotengine.org/" />
                            <SkillComponent imgPath="icons/postgresql.svg" title="PostgreSQL" link="https://www.postgresql.org/" />
                            <SkillComponent imgPath="icons/wireshark.webp" title="Wireshark" link="https://www.wireshark.org/" />
                            <SkillComponent imgPath="icons/zsh.svg" title="Zsh" link="https://www.zsh.org/" />
                            <SkillComponent imgPath="icons/bash-icon.svg" title="Bash" link="https://www.gnu.org/software/bash/" />
                            <SkillComponent imgPath="icons/vercel-icon.svg" title="Vercel" link="https://vercel.com/" />
                            <SkillComponent imgPath="icons/vim.svg" title="Vim" link="https://www.vim.org/" />
                            <SkillComponent imgPath="icons/netlify-icon.svg" title="Netlify" link="https://www.netlify.com/" />
                            <SkillComponent imgPath="icons/supabase-icon.svg" title="Supabase" link="https://supabase.com/" />
                            <SkillComponent imgPath="icons/ssh.webp" title="Secure Shell" link="https://en.wikipedia.org/wiki/Secure_Shell" />
                        </div>
                    </Card>
                </div>

                {/* Portfolio Section */}
                <div className="flex justify-center md:col-span-2">
                    <Card title="Portfolio" description="Explore my portfolio of software, web apps, and creative experiments.">
	    		<ProjectComponent  imgPath="icons/minimobile.png" title="Oxy Theater Department Mini Mobile Shop" link="/projects/minimobileshop" description="A rental management platform designed in collaboration with and actively used by the Occidental College Theater Department. The app simplifies the process of requesting and organizing mobile theater equipment for students and staff, combining a responsive Next.js frontend with Supabase-backed authentication, storage, and database services."/>
                        <ProjectComponent  imgPath="icons/raycaster.png" title="2D to 3D Raycaster Simulation" link="/projects/raycaster" description="A low-level graphics project exploring the origins of 3D game development. Using C++ and OpenGL, the engine raycasts from a 2D grid-based world to produce both a top-down visualization and a real-time 3D projection, illustrating how early engines converted simple 2D maps into immersive 3D environments."/>
			<ProjectComponent  imgPath="icons/multiplayer.png" title="Web Socket Demo" link="/projects/multiplayerdemo" description="A lightweight multiplayer experiment showcasing real-time communication over WebSockets. Multiple connected users can independently control objects in a shared environment, with Socket.IO handling low-latency state synchronization between clients."/>

                    </Card>
                </div>

                {/* Blog Section */}
                <div className="flex justify-center md:col-span-2">
                    <Card title="Blog" description="Explore my portfolio of software, web apps, and creative experiments.">
		    </Card>
                </div>


            </Layout>
        </>
    );
}

