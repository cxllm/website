import { Link } from "react-router";
import translations from "../translations/Projects.json";
import { getLanguage } from "../util/language";
const projects: {
	name?: string;
	link: string;
	start: string;
	end: string;
	description?: string;
}[] = [
	{ link: "https://github.com/cxllm/website", start: "09/21", end: "" },
	{
		link: "https://github.com/cxllm/boltpass",
		start: "09/24",
		end: "03/25"
	},
	{
		link: "https://github.com/cxllm/tfl-status-api",
		start: "05/22",
		end: "07/24"
	},
	{
		link: "https://github.com/cxllm/mastermind",
		start: "12/23",
		end: "01/24"
	},
	{
		link: "https://github.com/cxllm/corynth",
		start: "12/19",
		end: "04/23"
	}
];
export default function Projects() {
	const language = getLanguage();
	const translation = translations[language];
	for (const i in projects) {
		projects[i].name = translation.projects[i].name;
		projects[i].description = translation.projects[i].description;
	}
	return (
		<>
			<h2>{translation.title}</h2>
			{projects.map((project) => (
				<>
					{" "}
					<hr />
					<div className="flex justify">
						<span style={{ fontSize: "1.5em" }}>
							<Link to={project.link}>
								<b>{project.name}</b>
							</Link>
							<i
								style={{
									float: "right",
									fontStyle: "italic"
								}}
							>
								{project.start} - {project.end}
							</i>
						</span>
						<p>{project.description}</p>
					</div>
				</>
			))}
		</>
	);
}
