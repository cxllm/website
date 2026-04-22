import { Navbar, Nav } from "react-bootstrap";
import { getLanguage } from "../util/language";
import translations from "../translations/Footer.json";
export default function Footer() {
	const year = new Date().getFullYear();
	const language = getLanguage();
	return (
		<>
			<Navbar collapseOnSelect expand="lg" className="footer" variant="dark">
				<Nav className="me-auto" style={{ width: "fit-content" }}>
					<Nav.Link href="#top">{translations[language].back}</Nav.Link>
				</Nav>
				<Nav className="no-mobile">
					<Navbar.Text>© {year} Callum Rynne</Navbar.Text>
				</Nav>
			</Navbar>
		</>
	);
}
