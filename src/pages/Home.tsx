import { Link } from "react-router";
import Socials from "../components/Socials";
import translations from "../translations/Home.json";
import { getLanguage } from "../util/language";
export default function Home() {
	const language = getLanguage();
	const translation = translations[language];

	return (
		<>
			<div className="intro">
				<div>
					<img src="/avatar.png" className="logo" />
					<h2>Callum Rynne</h2>
					<Socials />
					<p>{translation.intro}</p>
					<Link to="/about">{translation.aboutme}</Link> |{" "}
					<Link to="/projects">{translation.projects}</Link> |{" "}
					<Link to="https://github.com/cxllm/website">{translation.source}</Link>
				</div>
			</div>
			<p></p>
		</>
	);
}
