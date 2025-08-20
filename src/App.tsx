import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
export default function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<AboutMe />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</>
	);
}
