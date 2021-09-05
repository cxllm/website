import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
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
          variant="dark"
          style={{
            fontFamily: "Poppins",
            backgroundColor: "#272727",
          }}
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              Callum
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/experience">
                  {translation.experience}
                </Nav.Link>
                <Nav.Link as={Link} to="/projects">
                  {translation.projects}
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/contact">
                  {translation.contact}
                </Nav.Link>
                <NavDropdown
                  title={translation.links}
                  id="collapsible-nav-dropdown"
                >
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
								<NavDropdown.Item to
="#action/3.4">Separated link</NavDropdown.Item>*/}
                </NavDropdown>
                <Nav.Link onClick={() => this.props.setLang()}>
                  <span className={`flag-icon flag-icon-${translation.lang}`} />
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
