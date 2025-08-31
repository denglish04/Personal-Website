import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Raycaster from './pages/projects/Raycaster';
import MultiplayerDemo from './pages/projects/MultiplayerDemo';
export default function App() {

	return (
		<BrowserRouter>
		<Routes>
			<Route index element = {<Home/>} />
			<Route path="/about" element={<About />} />
			<Route path="/blog" element={<Blog />} />

			<Route path="/projects" element={<Projects />}/>
			<Route path="/projects/raycaster" element={<Raycaster />}/>
			<Route path="/projects/multiplayerdemo" element={<MultiplayerDemo/>}/>
		</Routes>
		</BrowserRouter>
	);
}
