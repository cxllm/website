import React from "react";
import Socials from "../Components/Socials";
import { Helmet } from "react-helmet";
import translations from "../Translations/projects.json";
export default class Projects extends React.Component<{
	lang: "en" | "fr";
}> {
	render() {
		const translation = translations[this.props.lang];

		return (
			<div className="content anim">
				<Helmet>
					<title>{translation.title}</title>
				</Helmet>
				<h1>My Projects</h1>
				<p>{translation.title}</p>
				<Socials />
				<div className="table">
					{translation.projects.map((project) => {
						return (
							<div>
								<a href={project.url}>{project.name}</a>
								<p>{project.description}</p>
								<p>
									{project.start} - {project.finish}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
