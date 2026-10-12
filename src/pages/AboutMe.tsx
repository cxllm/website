import translations from "../translations/About.json";
import { getLanguage } from "../util/language";
export default function AboutMe() {
	const l = getLanguage();
	const whoiam = translations.sections.whoiam;
	const education = translations.sections.education;
	const ts = translations.sections.ts;
	const languages = translations.sections.languages;
	return (
		<div className="about-me">
			<h2 className="title">{translations.title[l]}</h2>
			<hr />
			<div className="justify">
				<h2>{whoiam.title[l]}</h2>
				<p>
					{whoiam.text[l]}
					<br />
					{whoiam.text2[l]}
				</p>
			</div>
			<hr />
			<div className="justify">
				<h2>{education.title[l]}</h2>
				<h3>{education.uni.title[l]}</h3>
				<p dangerouslySetInnerHTML={{ __html: education.uni.text[l] }}></p>
				<h3>{education.sf.title[l]}</h3>
				<p>{education.sf.text[l]}</p>
			</div>
			<hr />
			<div>
				<h2>{ts.title[l]}</h2>
				<p style={{ textAlign: "justify" }}>{ts.text[l]}</p>
				<div className="grid-container skills">
					<div>
						<h3>{ts.titles.languages[l]}</h3>
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
					</div>
					<div>
						<h3>{ts.titles.fal[l]}</h3>
						<ul>
							<li>React (including Hooks & Context API)</li>
							<li>Node.js & Express</li>
							<li>Package Management (NPM/Yarn & Pip)</li>
							<li>Flask</li>
							<li>Jinja2, EJS</li>
						</ul>
					</div>
					<div>
						<h3>{ts.titles.db[l]}</h3>
						<ul>
							<li>PostgreSQL</li>
							<li>SQLite</li>
							<li>MongoDB</li>
							<li>SQL Alchemy</li>
						</ul>
					</div>
					<div>
						<h3>{ts.titles.ott[l]}</h3>
						<ul>
							<li>Git & GitHub</li>
							<li>REST APIs</li>
							<li>Linux & CLI</li>
							<li>DNS Configuration</li>
							<li>SSL</li>
							<li>Nginx (Reverse Proxies)</li>
						</ul>
					</div>
				</div>
				<p>{ts.bottom[l]}</p>
			</div>
			<hr />
			<div className="justify">
				<h2>{languages.title[l]}</h2>
				<p>{languages.text[l]}</p>
				<p>{languages.text2[l]} </p>
			</div>
		</div>
	);
}
