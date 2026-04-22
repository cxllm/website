import translations from "../translations/About.json";
import { getLanguage } from "../util/language";
export default function AboutMe() {
	const language = getLanguage();
	const translation = translations[language];
	const whoiam = translation.sections.whoiam;
	const education = translation.sections.education;
	const ts = translation.sections.ts;
	const languages = translation.sections.languages;
	return (
		<>
			<h2>{translation.title}</h2>
			<hr />
			<div className="justify">
				<h2>{whoiam.title}</h2>
				<p>
					{whoiam.text}
					<br />
					{whoiam.text2}
				</p>
			</div>
			<hr />
			<div className="justify">
				<h2>{education.title}</h2>
				<h3>{education.uni.title}</h3>
				<p>{education.uni.text}</p>
				<h3>{education.sf.title}</h3>
				<p>{education.sf.text}</p>
			</div>
			<hr />
			<div className="justify">
				<h2>{ts.title}</h2>
				<p>{ts.text}</p>
				<h3>{ts.titles.languages}</h3>
				<ul>
					<li>TypeScript & JavaScript</li>
					<li>Python</li>
					<li>Java</li>
					<li>R</li>
					<li>SQL</li>
					<li>Haskell</li>
					<li>HTML5 & CSS3</li>
					<li>SASS/SCSS</li>
				</ul>
				<h3>{ts.titles.fal}</h3>
				<ul>
					<li>React (including Hooks & Context API)</li>
					<li>Node.js & Express</li>
					<li>Package Management (NPM/Yarn & Pip)</li>
					<li>Flask</li>
					<li>Jinja2, EJS</li>
				</ul>
				<h3>{ts.titles.db}</h3>
				<ul>
					<li>PostgreSQL</li>
					<li>SQLite</li>
					<li>MongoDB</li>
					<li>SQL Alchemy</li>
				</ul>
				<h3>{ts.titles.ott}</h3>
				<ul>
					<li>Git & GitHub</li>
					<li>REST APIs</li>
					<li>Linux & CLI</li>
					<li>DNS Configuration</li>
					<li>SSL</li>
					<li>Nginx (Reverse Proxies)</li>
				</ul>
				<p>{ts.bottom}</p>
			</div>
			<hr />
			<div className="justify">
				<h2>{languages.title}</h2>
				<p>{languages.text}</p>
				<p>{languages.text2} </p>
			</div>
		</>
	);
}
