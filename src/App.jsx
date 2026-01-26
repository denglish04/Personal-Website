import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Raycaster from './pages/projects/Raycaster';
import MultiplayerDemo from './pages/projects/MultiplayerDemo';
import Skills from './pages/Skills';
import MiniMobileShop from './pages/projects/MiniMobileShop';
import Comps from './pages/Comps';

export default function App() {

	return (
		<BrowserRouter>
		<Routes>
			<Route index element = {<Home/>} />
			<Route path="/blog" element={<Blog />} />
            <Route path="/skills" element={<Skills/>}/>
			<Route path="/projects" element={<Projects />}/>
			<Route path="/comps" element={<Comps/>}/>
            <Route path="/projects/raycaster" element={<Raycaster />}/>
			<Route path="/projects/multiplayerdemo" element={<MultiplayerDemo/>}/>
		    <Route path="/projects/minimobileshop" element={<MiniMobileShop/>}/>
        </Routes>
		</BrowserRouter>
	);
}
