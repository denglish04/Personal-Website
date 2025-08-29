import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Raycaster from './pages/projects/Raycaster';
import MultiplayerDemo from './pages/projects/2DMultiplayerDemo';

export default function App() {

	return (
		<BrowserRouter>
		<Routes>
			<Route index element = {<Home/>} />
			<Route path="/about" element={<About />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/projects" element={<Projects />}/>
			<Route path="/raycaster" element={<Raycaster />}/>
			<Route path="/multiplayerdemo" element={<MultiplayerDemo/>}/>
		</Routes>
		</BrowserRouter>
	);
}
