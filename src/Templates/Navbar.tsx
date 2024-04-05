import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import Translations from "../Translations/Navbar";

export default class Navigation extends React.Component<
	{
		lang: "en" | "fr";
		switchLanguage: any;
	},
	{ pathname: string }
> {
	constructor(props: any) {
		super(props);
		this.state = {
			pathname: ""
		};
	}
	render() {
		this.setState({ pathname: window.location.pathname });

		const translations = Translations[this.props.lang];
		return (
			<>
				<Navbar
					collapseOnSelect
					expand="lg"
					variant="dark"
					style={{
						fontFamily: "inherit",
						backgroundColor: "transparent",
						animation: "none",
						padding: "10px 20px"
					}}
					className="nav"
				>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link
								as={Link}
								to="/"
								className={this.state.pathname === "/" ? "active" : ""}
							>
								{translations.home}
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="/about-me"
								className={this.state.pathname === "/about-me" ? "active" : ""}
							>
								{translations.about}
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="/projects"
								className={this.state.pathname === "/projects" ? "active" : ""}
							>
								{translations.projects}
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="/photos"
								className={this.state.pathname === "/photos" ? "active" : ""}
							>
								{translations.photos}
							</Nav.Link>
						</Nav>
						<Nav defaultActiveKey="/">
							<Nav.Link href="https://github.com/cxllm">GitHub</Nav.Link>
							<Nav.Link href="https://twitter.com/CX11M">Twitter (X)</Nav.Link>
							<Nav.Link onClick={this.props.switchLanguage}>
								{translations.language}
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</>
		);
	}
}
