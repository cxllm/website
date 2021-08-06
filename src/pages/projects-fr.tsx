import React from "react";
import Socials from "../components/Socials";
const projects = [
	{
		name: "Corynth",
		description: "Un bot discord qui avait beaucoup de fonctionnalités",
		created: "decmebre 2019",
		end: "juin 2021",
		url: "https://github.com/cxllm/corynth",
		image: "/corynth.png",
	},
	{
		name: "Blog",
		description: "Mon site web qui je poste les tutoriels parfois",
		created: "avril 2021",
		end: "aujourd'hui",
		url: "https://notes.cxllm.xyz",
		image: "/avatar.jpg",
	},
];
class Projects extends React.Component {
	render() {
		return (
			<>
				<div className="about">
					<h1>Callum - Projets</h1>
					<Socials />
					<p>
						Sur cette page, vous pouvez trouver mes projets de code. Vous pouvez aussi
						trouver plus de mes projets sur mon{" "}
						<a href="https://github.com/cxllm">GitHub</a>
					</p>
				</div>
				<div>
					{projects.map(
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
