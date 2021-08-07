import React from "react";
import Socials from "../components/Socials";

class NotFound extends React.Component {
	render() {
		return (
			<>
				<h1>Callum - 404 Not Found/Page Non Trouvée</h1>
				<Socials />
				<br />
				<table className="not-found">
					<tr>
						<td>
							<p>
								{/*@ts-ignore*/}
								The page "{this.props.location.pathname}" was not found.
								<br /> <a href="/">Back Home</a>
							</p>
						</td>
						<td>
							<p>
								{/*@ts-ignore*/}
								La page « {this.props.location.pathname} » n'a pas été trouvée
								<br /> <a href="/fr">Retour à la Page d'Accueil </a>
							</p>
						</td>
					</tr>
				</table>
			</>
		);
	}
}

export default NotFound;
