import React from "react";
import albums from "../Albums";
import Translations from "../Translations/Photos";
import Socials from "../Templates/Socials";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Photos extends React.Component<{ lang: "en" | "fr" }> {
	render() {
		const translations = Translations[this.props.lang];
		return (
			<div className="content text">
				<Helmet>
					<title>Callum | Photos</title>
				</Helmet>
				<span>
					<img src="/avatar.png" width="120px" alt="Avatar" />
					<div className="intro">
						<h1>Photos</h1>
						<p>{translations.description}</p>
						<Socials />
					</div>
				</span>
				<table className="table photo albums">
					{albums.map((album) => {
						let info = album[this.props.lang];
						return (
							<div>
								<Link to={"/photos/" + album.url}>
									<img
										src={"/photo/" + album.url + "/" + album.cover}
										alt="Album cover"
									/>
								</Link>
								<p>
									<Link to={"/photos/" + album.url}>{info.name}</Link>
									<br />
									{info.description}
								</p>
							</div>
						);
					})}
				</table>
			</div>
		);
	}
}

export default Photos;
