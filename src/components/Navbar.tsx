import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { getLanguage, setLanguage } from "../util/language";
import translations from "../translations/Navbar.json";
import { email } from "../config.json";
import { Link, useLocation } from "react-router";
import { useState, useCallback } from "react";

export default function Navigation() {
	const language = getLanguage();
	const [expanded, setExpanded] = useState(false);
	const { pathname } = useLocation();
	const handleNavClick = useCallback(() => setExpanded(false), []);
	const isActive = (path: string) =>
		path === "/"
			? pathname === "/"
			: pathname === path || pathname.startsWith(`${path}/`);
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
					<Nav.Link to="/" as={Link} active={isActive("/")} onClick={handleNavClick}>
						{translations.home[language]}
					</Nav.Link>
					<Nav.Link
						to="/about"
						as={Link}
						active={isActive("/about")}
						onClick={handleNavClick}
					>
						{translations.about[language]}
					</Nav.Link>
					<Nav.Link
						to="/projects"
						as={Link}
						active={isActive("/projects")}
						onClick={handleNavClick}
					>
						{translations.projects[language]}
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
