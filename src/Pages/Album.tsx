import React from "react";
import albums from "../Albums";
import Translations from "../Translations/Album";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Album extends React.Component<{ lang: "en" | "fr" }> {
	render() {
		let translations = Translations[this.props.lang];
		let pathname = window.location.pathname.split("/")[2];
		let album = albums.find((value) => value.url === pathname);
		if (album) {
			let info = album[this.props.lang];
			return (
				<div className="content text">
					<Helmet>
						<title>Callum | {info.name} </title>
					</Helmet>
					<h1>{info.name}</h1>
					<p>
						{info.description}
						<br />
						<Link to="/photos">
							{"<<"} {translations.back}
						</Link>{" "}
						<div className="table photo">
							{album.photos.map((photo) => {
								return (
									<div>
										<img
											/*@ts-ignore*/
											src={"/photo/" + album.url + "/" + photo.image}
											alt={photo.description[this.props.lang]}
										/>
										<p>{photo.description[this.props.lang]}</p>
									</div>
								);
							})}
						</div>
					</p>
				</div>
			);
		} else {
			return (
				<div className="context text">
					<Helmet>
						<title>Callum | {translations.title} </title>
					</Helmet>
					<h1>{translations.title}</h1>
					<p>
						{translations.notfound.replace("[url]", window.location.pathname)}
						<br />
						<Link to="/photos">
							{"<<"} {translations.back}
						</Link>
					</p>
				</div>
			);
		}
	}
}

export default Album;
