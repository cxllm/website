import React from "react";
import "./App.css";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import Projects from "./pages/Projects";
type Props = {
	cookies: Cookies;
};
class App extends React.Component<Props> {
	static propTypes = {
		cookies: instanceOf(Cookies).isRequired,
	};
	getLang() {
		const { cookies } = this.props;
		let cookie = cookies.get("lang");
		if (!cookie) {
			cookies.set("lang", "en");
			cookie = "en";
		}
		return cookie;
	}
	setLang() {
		const { cookies } = this.props;
		let cookie = this.getLang();
		console.log(cookie);
		cookies.set("lang", cookie === "en" ? "fr" : "en");
	}
	render() {
		return (
			<Router>
				<Navbar lang={this.getLang()} setLang={() => this.setLang()} />
				<div className="content">
					<img src="/avatar.jpg" className="avatar" alt="Logo" />
					<Switch>
						<Route
							exact
							path="/"
							render={(props) => <Home {...props} lang={this.getLang()} />}
						/>
						<Route
							path="/projects"
							render={(props) => <Projects {...props} lang={this.getLang()} />}
						/>
						<Route
							exact
							path="*"
							render={(props) => <NotFound {...props} lang={this.getLang()} />}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default withCookies(App);
