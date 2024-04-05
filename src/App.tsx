import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Photos from "./Pages/Photos";
import About from "./Pages/About";
import NotFound from "./Pages/404";

import Navbar from "./Templates/Navbar";
import Album from "./Pages/Album";
import Footer from "./Templates/Footer";

class App extends React.Component {
	getLanguage(): "fr" | "en" {
		let lang = localStorage.getItem("lang");
		if (!lang) {
			if (navigator.language.startsWith("fr")) {
				lang = "fr";
			} else {
				lang = "en";
			}
			localStorage.setItem("lang", lang);
		}
		//@ts-ignore
		return localStorage.getItem("lang");
	}
	switchLanguage = () => {
		let lang = localStorage.getItem("lang");
		if (!lang || lang === "en") {
			localStorage.setItem("lang", "fr");
		} else {
			localStorage.setItem("lang", "en");
		}
		window.location.reload();
	};
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar lang={this.getLanguage()} switchLanguage={this.switchLanguage} />
					<div className="content">
						<Routes>
							<Route path="/" element={<Home lang={this.getLanguage()} />} />
							<Route path="/about-me" element={<About lang={this.getLanguage()} />} />
							<Route
								path="/projects"
								element={<Projects lang={this.getLanguage()} />}
							/>
							<Route path="/photos" element={<Photos lang={this.getLanguage()} />} />
							<Route path="/photos/*" element={<Album lang={this.getLanguage()} />} />
							<Route path="*" element={<NotFound lang={this.getLanguage()} />} />
						</Routes>
					</div>
					<Footer lang={this.getLanguage()} />
				</div>
			</Router>
		);
	}
}

export default App;
