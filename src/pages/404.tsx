import React from "react";
import Socials from "../components/Socials";
import Translations from "../translations/404";
type Props = {
	lang: "en" | "fr";
};
class NotFound extends React.Component<Props> {
	render() {
		const lang = this.props.lang;
		const translation = Translations[lang];
		return (
			<>
				<h1>Callum - {translation.title}</h1>
				<Socials />
				<br />
				<p>
					{translation.text.replace("[page]", window.location.pathname)}
					<br /> <a href="/">{translation.link}</a>
				</p>
			</>
		);
	}
}

export default NotFound;
