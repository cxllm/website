import React from "react";
import Socials from "../components/Socials";
import Translations from "../translations/Projects";
import parse from "html-react-parser";
type Props = {
	lang: "en" | "fr";
};
class Projects extends React.Component<Props> {
	render() {
		const lang = this.props.lang;
		const translation = Translations[lang];
		return (
			<>
				<div className="about">
					<h1>Callum - {translation.title}</h1>
					<Socials />
					<p>{parse(translation.text)}</p>
				</div>
				<div>
					{translation.projects.map(
						(
							project: {
								name: string;
								description: string;
								created: string;
								end: string;
								url: string;
								image: string;
							},
							i: number
						) => {
							let element = (
								<div className="project">
									<img
										src={project.image}
										style={{
											width: "100px",
											borderRadius: "100%",
										}}
										alt={project.name}
									/>
									<h3>
										<a href={project.url}>{project.name}</a>
									</h3>
									<p>{project.description}</p>
									<i>
										{project.created} - {project.end}
									</i>
								</div>
							);
							return element;
						}
					)}
				</div>
			</>
		);
	}
}
export default Projects;
