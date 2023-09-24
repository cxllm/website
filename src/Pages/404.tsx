import React from "react";
import Translations from "../Translations/404";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class NotFound extends React.Component<{ lang: "en" | "fr" }> {
	render() {
		const translations = Translations[this.props.lang];
		return (
			<div className="context text">
				<Helmet>
					<title>Callum | {translations.title}</title>
				</Helmet>
				<h1>{translations.title}</h1>
				<p>
					{translations.notfound.replace("[url]", window.location.pathname)}
					<br />
					<Link to="/">
						{"<<"} {translations.back}
					</Link>
				</p>
			</div>
		);
	}
}

export default NotFound;
