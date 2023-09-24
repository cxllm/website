import React from "react";
import albums from "../Albums";
import Translations from "../Translations/Album";
import { Link } from "react-router-dom";

class Album extends React.Component<{ lang: "en" | "fr" }> {
	render() {
		let translations = Translations[this.props.lang];
		let pathname = window.location.pathname.split("/")[2];
		let album = albums.find((value) => value.url === pathname);
		if (album) {
			return (
				<div className="content text">
					<h1>{album.name[this.props.lang]}</h1>
					<p>
						{album.description[this.props.lang]}
						<br />
						<a href="/photos">{"<<"} Back to Photos</a>
						<div className="table photo">
							{album.photos.map((photo, i) => {
								return (
									<div>
										<img src={photo.image} alt={photo.description[this.props.lang]} />
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
