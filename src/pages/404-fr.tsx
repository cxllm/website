import React from "react";
import Socials from "../components/Socials";

class NotFound extends React.Component {
	render() {
		return (
			<>
				<h1>Callum - 404 Page Non Trouvée </h1>
				<Socials />
				<br />
				<p>
					{/*@ts-ignore*/}
					La page « {this.props.location.pathname} » n'a pas été trouvée
					<br /> <a href="/fr">Retour à la Page d'Accueil </a>
				</p>
			</>
		);
	}
}

export default NotFound;
