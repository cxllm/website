import React from "react";
import Translations from "../Translations/About";
import { Helmet } from "react-helmet";

class About extends React.Component<{ lang: "en" | "fr" }> {
	render() {
		const translations = Translations[this.props.lang];
		return (
			<div className="content text">
				<Helmet>
					<title>Callum | {translations.title}</title>
				</Helmet>
				<span>
					<img src="/avatar.png" width="120px" alt="Avatar" />
					<div className="intro">
						<h1>{translations.title}</h1>
						<p>{translations.summary}</p>
					</div>
					<table className="table">
						{translations.info.map((section) => {
							return (
								<div>
									<h1>{section.title}</h1>
									<p>
										{section.description.replace("\n", `${(<br />)}`)}
										{section.subjects?.map((subject) => (
											<>
												<br />
												{">"} {subject}
											</>
										))}
									</p>
								</div>
							);
						})}
					</table>
				</span>
			</div>
		);
	}
}

export default About;
