import React from "react";
import Translations from "../Translations/Projects";
import { Helmet } from "react-helmet";

class Projects extends React.Component<{ lang: "en" | "fr" }> {
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
						<p>{translations.description}</p>
					</div>
				</span>
				<table className="table">
					{translations.projects.map((project, i) => {
						return (
							<div className={i % 2 === 1 ? "edge" : ""}>
								<a href={project.url}>{project.name}</a>
								<p>{project.description}</p>
								<p className="time">
									{project.start} - {project.end}
								</p>
							</div>
						);
					})}
				</table>
			</div>
		);
	}
}

export default Projects;
