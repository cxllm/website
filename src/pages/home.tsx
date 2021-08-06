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
				<h1>Callum - Home</h1>
				<Socials />
				<p className="text">
					14 year old Python and TypeScript developer from the UK. You can find some
					of my previous work (
					<a href="https://github.com/cxllm/website">including this site</a>) on my{" "}
					<a href="https://github.com/cxllm">GitHub</a>. I also made a{" "}
					<a href="https://notes.cxllm.xyz">blog</a> where I post tutorials and other
					random things. To contact me, please email me at{" "}
					<a href="mailto:hello@cxllm.xyz">hello@cxllm.xyz</a>. Alternatively, you
					can send me a message on{" "}
					<a href="https://discord.com/users/536949735299219467">Discord</a> or{" "}
					<a href="https://twitter.com/CX11M">Twitter</a>.
				</p>
				<p className="spotify">
					{this.state.song ? (
						<a href={this.state.url}>
							Listening to {this.state.song} by {this.state.artist}
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
