import { Link } from "react-router";
import translations from "../translations/Projects.json";
import { getLanguage } from "../util/language";
export default function Projects() {
	const language = getLanguage();
	const translation = translations[language];
	const projects = translations["en"].projects.map((project, i) => {
		if (language != "en") {
			project.name = translation.projects[i].name;
			project.description = translation.projects[i].description;
		}
		if (project.end == "") {
			project.end = translation.present;
		}
		return project;
	});
	return (
		<>
			<h2>{translation.title}</h2>

			<div className="grid-container">
				{projects.map((project) => (
					<>
						{" "}
						{
							//<hr />
						}
						<div className="flex justify">
							<span style={{ fontSize: "1.5em" }} className="project-name">
								<Link to={project.link}>
									<b>{project.name}</b>
								</Link>
								<i
									style={{
										float: "right"
									}}
									className="date"
								>
									{project.start} - {project.end}
								</i>
							</span>
							<p>{project.description}</p>
						</div>
					</>
				))}
			</div>
		</>
	);
}
