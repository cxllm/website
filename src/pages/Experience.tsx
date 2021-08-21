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
		},
		{
			name: "JavaScript",
			logo: "/javascript.png",
		},
		{
			name: "Python",
			logo: "/python.png",
		},
		{
			name: "HTML",
			logo: "/html.png",
			url: "https",
		},
		{
			name: "CSS",
			logo: "/css.png",
		},
	],
	frameworks: [
		{
			name: "React",
			logo: "/react.png",
		},
		{
			name: "Node.js",
			logo: "/nodejs.png",
		},
	],
	os: [
		{
			name: "Linux",
			logo: "/linux.png",
		},
		{
			name: "Windows",
			logo: "/windows.png",
		},
	],
	devops: [
		{
			name: "Nginx",
			logo: "/nginx.png",
		},
		{
			name: "Git",
			logo: "/git.png",
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
											{
												//@ts-ignore
												skills[key].map((obj: { name: string; logo: string }) => {
													return <img src={obj.logo} alt={obj.name} />;
												})
											}
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
