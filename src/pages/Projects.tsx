import { Link } from "react-router";
import translations from "../translations/Projects.json";
import { getLanguage } from "../util/language";
export default function Projects() {
	const l = getLanguage();
	return (
		<>
			<h2>{translations.title[l]}</h2>

			<div className="grid-container">
				{translations.projects.map((project) => (
					<>
						{" "}
						{
							//<hr />
						}
						<div className="flex justify">
							<span style={{ fontSize: "1.5em" }} className="project-name">
								<Link to={project.link}>
									<b>{project.name[l]}</b>
								</Link>
							</span>
							<p className="date">
								{project.start[l]} -{" "}
								{project.end[l] == "" ? translations.present[l] : project.end[l]}
							</p>
							<p>{project.description[l]}</p>
						</div>
					</>
				))}
			</div>
		</>
	);
}
