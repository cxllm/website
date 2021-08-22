import React from "react";
import Socials from "../components/Socials";
import Translations from "../translations/Experience";
import parse from "html-react-parser";
type Props = {
	lang: "en" | "fr";
};
const skills = {
	code: [
		{
			name: "TypeScript",
			logo: "/typescript.png",
			url: "https://www.typescriptlang.org",
		},
		{
			name: "JavaScript",
			logo: "/javascript.png",
			url: "https://javascript.com",
		},
		{
			name: "Python",
			logo: "/python.png",
			url: "https://python.org",
		},
		{
			name: "HTML",
			logo: "/html.png",
			url: "https://www.w3.org/html/",
		},
		{
			name: "CSS",
			logo: "/css.png",
			url: "https://www.w3.org/Style/CSS/Overview.en.html",
		},
	],
	frameworks: [
		{
			name: "React",
			logo: "/react.png",
			url: "https://reactjs.org/",
		},
		{
			name: "Node.js",
			logo: "/nodejs.png",
			url: "https://nodejs.org",
		},
		{
			name: "Flask",
			logo: "/flask.png",
			url: "https://flask.palletsprojects.com/en/2.0.x/",
		},
		{
			name: "Express",
			logo: "/express.png",
			url: "https://expressjs.com",
		},
	],
	os: [
		{
			name: "Linux",
			logo: "/linux.png",
			url: "https://linux.org/",
		},
		{
			name: "Windows",
			logo: "/windows.png",
			url: "https://www.microsoft.com/en-gb/windows",
		},
		{
			name: "Ubuntu",
			logo: "/ubuntu.png",
			url: "https://ubuntu.com",
		},
		{
			name: "Arch Linux",
			logo: "/arch.png",
			url: "https://archlinux.org",
		},
	],
	devops: [
		{
			name: "Nginx",
			logo: "/nginx.png",
			url: "https://nginx.com",
		},
		{
			name: "Git",
			logo: "/git.png",
			url: "https://git-scm.com/",
		},
		{
			name: "PM2",
			logo: "/pm2.png",
			url: "https://pm2.keymetrics.io/",
		},
	],
};
class Experience extends React.Component<Props> {
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
				<table className="split">
					<td>
						<h2>{translation.skills}</h2>
						<table className="skills">
							{Object.keys(skills).map((key: string) => {
								return (
									<>
										<tr className="table-content">
											{/*@ts-ignore*/}
											<h3>{translation[key]}</h3>
											<table>
												<tr>
													{
														//@ts-ignore
														skills[key].map(
															(
																obj: { name: string; logo: string; url: string },
																i: number
															) => {
																return (
																	<td className="skill">
																		<a href={obj.url}>
																			<img src={obj.logo} alt={obj.name} />
																			{obj.name}
																		</a>
																	</td>
																);
															}
														)
													}
												</tr>
											</table>
										</tr>
									</>
								);
							})}
						</table>
					</td>
					<td>
						<h2>{translation.position}</h2>
						{translation.positions.map(
							(
								position: {
									name: string;
									description: string;
									start: string;
									end: string;
									involved: string;
								},
								i: number
							) => {
								let element = (
									<div className="table-content">
										<h3>{position.name}</h3>
										<p>{position.description}</p>
										<i>
											{position.start} - {position.end}
										</i>
									</div>
								);
								return element;
							}
						)}
					</td>
				</table>
			</>
		);
	}
}
export default Experience;
