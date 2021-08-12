import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import React from "react";
import Translations from "../translations/Navbar";
type Props = {
	lang: "en" | "fr";
	setLang: Function;
};
class Navigation extends React.Component<Props> {
	render() {
		const lang = this.props.lang;
		const translation = Translations[lang];
		return (
			<>
				<Navbar
					collapseOnSelect
					expand="lg"
					bg="dark"
					variant="dark"
					style={{
						fontFamily: "Poppins",
					}}
				>
					<Container>
						<Navbar.Brand href="/">
							<img src="/avatar.jpg" className="logo" alt="Logo"></img>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="/">{translation.home}</Nav.Link>
								<Nav.Link href="/projects">{translation.projects}</Nav.Link>
							</Nav>
							<Nav>
								<NavDropdown title={translation.links} id="collasible-nav-dropdown">
									<NavDropdown.Item href="https://github.com/cxllm">
										GitHub
									</NavDropdown.Item>
									<NavDropdown.Item href="https://twitter.com/CX11M">
										Twitter
									</NavDropdown.Item>
									<NavDropdown.Item href="mailto:hello@cxllm.xyz">
										Email
									</NavDropdown.Item>
									<NavDropdown.Item href="https://notes.cxllm.xyz">
										Blog
									</NavDropdown.Item>

									{/*<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
								</NavDropdown>
								<Nav.Link onClick={() => this.props.setLang()}>
									{translation.lang}
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</>
		);
	}
}
export default Navigation;
