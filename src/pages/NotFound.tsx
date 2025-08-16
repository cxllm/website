import { getLanguage } from "../util/language";
import translations from "../translations/NotFound.json";
import { Link } from "react-router";
export default function NotFound() {
	const language = getLanguage();
	const translation = translations[language];
	return (
		<>
			<h2>{translation.title}</h2>
			<p>{translation.text}</p>
			<Link to="/">{translation.back}</Link>
		</>
	);
}
