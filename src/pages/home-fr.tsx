import React from "react";
import Socials from "../components/Socials";
class Home extends React.Component {
	state: {
		song: string | undefined;
		url: string | undefined;
		artist: string | undefined;
	};
	//@ts-ignore
	constructor(props) {
		super(props);
		this.state = {
			song: undefined,
			url: undefined,
			artist: undefined,
		};
	}
	componentDidMount() {
		this.updateLastFM();
		setInterval(() => {
			this.updateLastFM();
		}, 30 * 1000);
	}
	updateLastFM() {
		fetch("https://cxllm.xyz/api/last-fm")
			.then((res) => res.json())
			.then((res) => {
				if (!res)
					return this.setState({
						song: undefined,
						url: undefined,
						artist: undefined,
					});
				this.setState({ song: res.song, url: res.url, artist: res.artist });
			});
	}
	render() {
		return (
			<>
				<h1>Callum - Page d'Accueil</h1>
				<Socials />
				<p className="text">
					Programmeur britannique de 14 ans. Vous pouvez trouver une partie de mon
					code sur mon <a href="https://github.com/cxllm">GitHub</a>. J'ai aussi fait{" "}
					<a href="https://notes.cxllm.xyz">un blog</a> où je poste parfois. Pour me
					contacter, veuillez m'envoyer un email à{" "}
					<a href="mailto:hello@cxllm.xyz">hello@cxllm.xyz</a> ou m'enovyer un
					message sur{" "}
					<a href="https://discord.com/users/536949735299219467">Discord</a> ou{" "}
					<a href="https://twitter.com/CX11M">Twitter</a>.
				</p>
				<p className="spotify">
					{this.state.song ? (
						<a href={this.state.url}>
							J'écoute « {this.state.song} » par {this.state.artist}
						</a>
					) : (
						""
					)}
				</p>
			</>
		);
	}
}

export default Home;
