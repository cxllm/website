import { getLanguage } from "../util/language";
import translations from "../translations/NotFound.json";
import { Link } from "react-router";
export default function NotFound() {
	const l = getLanguage();
	return (
		<>
			<h2>{translations.title[l]}</h2>
			<p>{translations.text[l]}</p>
			<Link to="/">{translations.back[l]}</Link>
		</>
	);
}
