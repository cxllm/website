import React from "react";
import Translations from "../Translations/About";
import { Helmet } from "react-helmet";
import Socials from "../Templates/Socials";
import { Link } from "react-router-dom";

class About extends React.Component<{ lang: "en" | "fr" }> {
	render() {
		const translations = Translations[this.props.lang];
		let { studies, programming, about, photography } = translations;
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
						<Socials />
					</div>
					<table className="table">
						<div>
							<h2>{about.title}</h2>
							<p>{about.info}</p>
						</div>
						<div>
							<h2>{studies.title}</h2>
							<p>
								{studies.info}
								<table className="table subject">
									{studies.subjects.map((subject, i) => (
										<div>
											{">"} {subject}
										</div>
									))}
								</table>
							</p>
						</div>

						<div>
							<h2>{programming.title}</h2>
							<p>{programming.info}</p>
							<table>
								<tr>
									<td>
										<i className="fab fa-react" id="language" /> React
									</td>
									<td>
										<i className="fab fa-node-js" id="language" /> Node.js
									</td>
									<td>
										<i className="fab fa-python" /> Python
									</td>
								</tr>
								<tr>
									<td>
										<i className="fab fa-html5" /> HTML/CSS
									</td>
									<td>
										<i className="fab fa-js" /> JS/TS
									</td>
									<td>
										<i className="fas fa-database" /> MongoDB
									</td>
								</tr>
							</table>
						</div>
						<div>
							<h2>{photography.title}</h2>
							<p>
								{photography.info} <Link to="/photos">{photography.here}</Link>
							</p>
						</div>
					</table>
				</span>
			</div>
		);
	}
}

export default About;
