import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { getLanguage, setLanguage } from "../util/language";
import translations from "../translations/Navbar.json";
import { Link } from "react-router";
import { email } from "../config.json";
import { useState, useCallback } from "react";

export default function Navigation() {
	const language = getLanguage();
	const translation = translations[language];
	const [expanded, setExpanded] = useState(false);

	const handleNavClick = useCallback(() => setExpanded(false), []);

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			className="navigation"
			variant="dark"
			id="top"
			expanded={expanded}
			onToggle={setExpanded}
		>
			<Navbar.Brand to="/" as={Link} onClick={handleNavClick}>
				<img src="/avatar.png" className="logo" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link to="/about" as={Link} onClick={handleNavClick}>
						{translation.about}
					</Nav.Link>
					<Nav.Link to="/projects" as={Link} onClick={handleNavClick}>
						{translation.projects}
					</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href={`mailto:${email}`} onClick={handleNavClick}>
						Email
					</Nav.Link>
					<Nav.Link href="https://github.com/cxllm" onClick={handleNavClick}>
						GitHub
					</Nav.Link>
					<Nav.Link
						onClick={() => {
							setLanguage();
						}}
					>
						{language == "en" ? "Français" : "English"}
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
