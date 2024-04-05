import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import Time from "./Time";
import Socials from "./Socials";

export default class Footer extends React.Component<{
	lang: "en" | "fr";
}> {
	render() {
		return (
			<>
				<Navbar
					className="footer"
					collapseOnSelect
					expand="lg"
					variant="dark"
					expanded={true}
					style={{
						fontFamily: "inherit",
						backgroundColor: "transparent",
						animation: "none",
						padding: "10px 20px"
					}}
				>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Navbar.Text>
								<Time lang={this.props.lang} />
							</Navbar.Text>
						</Nav>
						<Nav className="no-mobile">
							<Navbar.Text>
								<Socials />
							</Navbar.Text>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</>
		);
	}
}
