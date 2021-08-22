import React from "react";
import Socials from "../components/Socials";
import Translations from "../translations/Contact";
type Props = {
	lang: "en" | "fr";
};
class Contact extends React.Component<Props> {
	render() {
		const lang = this.props.lang;
		const translation = Translations[lang];
		return (
			<>
				<h1>Callum - {translation.title}</h1>
				<Socials />
				<p className="text">{translation.text}</p>
				<ul
					style={{
						listStyle: "none",
					}}
				>
					<li>
						<a href="https://discord.com/users/536949735299219467">Discord</a>
					</li>
					<li>
						<a href="https://twitter.com/CX11M">Twitter</a>
					</li>
					<li>
						<a href="mailto:hello@cxllm.xyz?subject=Contact%20From%20Website">
							E-Mail
						</a>
					</li>
				</ul>
			</>
		);
	}
}

export default Contact;
