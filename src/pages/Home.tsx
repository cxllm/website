import { Link } from "react-router";
import Socials from "../components/Socials";
import translations from "../translations/Home.json";
import { getLanguage } from "../util/language";
export default function Home() {
	const l = getLanguage();

	return (
		<>
			<div className="intro">
				<div>
					<img src="/avatar.png" className="logo" />
					<h2>Callum Rynne</h2>
					<Socials />
					<p>{translations.intro[l]}</p>
					<Link to="/about">{translations.aboutme[l]}</Link> |{" "}
					<Link to="/projects">{translations.projects[l]}</Link> |{" "}
					<Link to="https://github.com/cxllm/website">{translations.source[l]}</Link>
				</div>
			</div>
			<p></p>
		</>
	);
}
