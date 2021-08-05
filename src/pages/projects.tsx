import React from "react";
import Socials from "../components/Socials";
const projects = [
	{
		name: "Corynth",
		description:
			"Slash command based discord bot with a lot of features. Based on discord.js master (v13), coded in TypeScript",
		created: "December 2019",
		end: "June 2021",
		url: "https://github.com/cxllm/corynth",
		image: "/corynth.png",
	},
	{
		name: "Blog",
		description:
			"Site where I post articles, guides and other things. Coded in Python, utilising Markdown parsing and jinja2 templating",
		created: "April 2021",
		end: "Present",
		url: "https://notes.cxllm.xyz",
		image: "/avatar.jpg",
	},
];
class Projects extends React.Component {
	render() {
		console.log(this.props);
		return (
			<>
				<div className="about">
					<h1>Callum - Projects</h1>
					<Socials />
					<p>
						Below you can find some of the projects I have worked on and links to
						their home pages or source code. Some projects I haven't listed here are
						on my <a href="https://github.com/cxllm">GitHub</a> so you can check them
						out there
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
