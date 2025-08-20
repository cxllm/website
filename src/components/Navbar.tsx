import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { getLanguage, setLanguage } from "../util/language";
import translations from "../translations/Navbar.json";
import { Link } from "react-router";
import { email } from "../config.json";

export default function Navigation() {
	const language = getLanguage();
	const translation = translations[language];
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			className="navigation"
			variant="dark"
			id="top"
		>
			<Navbar.Brand to="/" as={Link}>
				<img src="/avatar.png" className="logo" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link to="/about" as={Link}>
						{translation.about}
					</Nav.Link>

					<Nav.Link to="/projects" as={Link}>
						{translation.projects}
					</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href={`mailto:${email}`}>Email</Nav.Link>
					<Nav.Link href="https://github.com/cxllm">GitHub</Nav.Link>
					<Nav.Link onClick={() => setLanguage()}>
						{language == "en" ? "Français" : "English"}
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
