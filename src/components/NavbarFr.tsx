import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import React from "react";
class Navigation extends React.Component {
	render() {
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
						<Navbar.Brand href="/fr">
							<img src="/avatar.jpg" className="logo" alt="Logo"></img>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="/fr">Page d'Accueil</Nav.Link>
								<Nav.Link href="/fr/projects">Projets</Nav.Link>
							</Nav>
							<Nav>
								<NavDropdown title="Liens" id="collasible-nav-dropdown">
									<NavDropdown.Item href="https://github.com/cxllm">
										GitHub
									</NavDropdown.Item>
									<NavDropdown.Item href="https://twitter.com/CX11M">
										Twitter
									</NavDropdown.Item>
									<NavDropdown.Item href="mailto:hello@cxllm.xyz">
										E-mail
									</NavDropdown.Item>
									<NavDropdown.Item href="https://notes.cxllm.xyz">
										Blog
									</NavDropdown.Item>

									{/*<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
								</NavDropdown>
								<Nav.Link href="/">English</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</>
		);
	}
}
export default Navigation;
