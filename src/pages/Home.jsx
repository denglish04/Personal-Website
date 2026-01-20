import { useNavigate } from "react-router-dom";
import Button from "../components/Button"; 
import Card from "../components/Card";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import SkillComponent from "../components/skillComponent";

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
            <div className="grid grid-cols-1 gap-6">
                <div className = "flex justify-center md:col-span-2">
	    	<Card title="About Me" description="Hi, I’m Djasahn — Computer Science student, builder, and researcher. I design and develop software with an eye for detail, adaptability, and real-world problem solving. My background blends technical programming, cognitive science research, and leadership experience across athletics and student organizations. If you'd like to learn more about me check out the 'About Me' section">
	    		<a
 				href="/DEnglish_Resume_[Winter2025].pdf"
	    			target="_blank"
	    			rel="noopener noreferrer"
	    			className="text-sm underline">
	    		Resume
   			</a>

                </Card>
	    	</div>
                <div className="flex justify-center md:col-span-2">
	    	<Card title="Skills & Technologies" description = {"If you're curious about what I'm good at check out the Skills page for a list of technologies, languages, tools, and libraries that Stack-Overflow and I are comfortable with. Or, if you just want to here me talk about what I'm working on check out the Blog page"}>
                <div className="grid grid-cols-4 justify-center gap-3">
	    		<SkillComponent imgPath="icons/python.svg" title="Python" link="https://www.python.org/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/pytorch-icon.svg" title="Pytorch" link="https://pytorch.org/">
	    		</SkillComponent>
 	    		<SkillComponent imgPath="icons/java.svg" title="Java" link="https://www.java.com/en/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/c.webp" title="C" link="https://www.c-language.org/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/c-plusplus.svg" title="C++" link="https://isocpp.org/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/javascript.svg" title="JavaScript" link="https://en.wikipedia.org/wiki/JavaScript">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/typescript-icon.svg" title="TypeScript" link="https://www.typescriptlang.org/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/html-5.svg" title="HTML" link="https://en.wikipedia.org/wiki/HTML">
	    		</SkillComponent>
		    	<SkillComponent imgPath="icons/css-3.svg" title="CSS" link="https://www.w3.org/Style/CSS/Overview.en.html">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/tailwindcss-icon.svg" title="Tailwind CSS" link="https://tailwindcss.com/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/react.svg" title="React" link="https://react.dev/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/nextjs-icon.svg" title="Next.js" link="https://nextjs.org/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/nodejs-icon.svg" title="Node.js" link="https://nodejs.org/en">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/vitejs.svg" title="Vite" link="https://vite.dev/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/godot-icon.svg" title="Godot" link="https://godotengine.org/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/postgresql.svg" title="PostgreSQL" link="https://www.postgresql.org/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/wireshark.webp" title="Wireshark" link="https://www.wireshark.org/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/zsh.svg" title="Zsh" link="https://www.zsh.org/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/bash-icon.svg" title="Bash" link="https://www.gnu.org/software/bash/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/vercel-icon.svg" title="Vercel" link="https://vercel.com/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/vim.svg" title="Vim" link="https://www.vim.org/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/netlify-icon.svg" title="Netlify" link="https://www.netlify.com/">
	    		</SkillComponent>
	    		<SkillComponent imgPath="icons/supabase-icon.svg" title="Supabase" link="https://supabase.com/">
	    		</SkillComponent>
		    	<SkillComponent imgPath="icons/ssh.webp" title="Secure Shell" link="https://en.wikipedia.org/wiki/Secure_Shell">
	    		</SkillComponent>
    			
	    		</div>
                </Card>
	    	</div>
                <div className="flex justify-center md:col-span-2">
                    <Card title="Portfolio" description="Explore my portfolio of software, web apps, and creative experiments."> 
                        <Button onClick={handleClickProjects}> Projects Page </Button>
                    </Card>
                </div>
        </div>
        </Layout>
        </>
    );
}

