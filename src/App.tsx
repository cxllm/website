import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NavbarFR from "./components/NavbarFr";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/404";
import Projects from "./pages/projects";
import HomeFR from "./pages/home-fr";
import ProjectsFR from "./pages/projects-fr";
import NotFoundFR from "./pages/404-fr";
class App extends React.Component {
	render() {
		//@ts-ignore
		console.log(window.location.pathname);
		return (
			<Router>
				{window.location.pathname.startsWith("/fr") ? <NavbarFR /> : <Navbar />}
				<div className="content">
					<img src="/avatar.jpg" className="avatar" alt="Logo" />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/fr" component={HomeFR} />
						<Route path="/fr/projects" component={ProjectsFR} />
						<Route path="/projects" component={Projects} />
						<Route
							exact
							path="*"
							component={
								window.location.pathname.startsWith("/fr") ? NotFoundFR : NotFound
							}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
