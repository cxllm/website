import React from "react";
import Translations from "../Translations/Projects";
import albums from "../Albums";

class Projects extends React.Component<{ lang: "en" | "fr" }> {
	render() {
		const translations = Translations[this.props.lang];
		return (
			<div className="content text">
				<span>
					<img src="/avatar.png" width="120px" alt="Avatar" />
					<div className="intro">
						<h1>Projects</h1>
						<p>{translations.description}</p>
					</div>
				</span>
				<table className="table">
					{albums.map((album) => {
						return (
							<div>
								<img src={album.cover} alt="Album cover" />
								<a href={album.url}>{album.name[this.props.lang]}</a>
								<p>{album.description[this.props.lang]}</p>
							</div>
						);
					})}
				</table>
			</div>
		);
	}
}

export default Projects;
