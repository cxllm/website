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
						<Navbar.Brand href="/">
							<img src="/avatar.jpg" className="logo" alt="Logo"></img>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="/">Home</Nav.Link>
								<Nav.Link href="/projects">Projects</Nav.Link>
							</Nav>
							<Nav>
								<NavDropdown title="Links" id="collasible-nav-dropdown">
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
								<NavDropdown title="Language" id="collasible-nav-dropdown">
									<NavDropdown.Item href="/">English</NavDropdown.Item>
									<NavDropdown.Item href="/fr">Français</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</>
		);
	}
}
export default Navigation;
