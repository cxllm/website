import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter,
} from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/404";
import Projects from "./pages/projects";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Navbar />
				<div className="content">
					<img src="/avatar.jpg" className="avatar" alt="Logo" />
					<Switch>
						<Route exact path="/" component={Home} />

						<Route path="/projects" component={Projects} />
						<Route
							exact
							path="*"
							//@ts-ignore
							component={withRouter(NotFound)}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
