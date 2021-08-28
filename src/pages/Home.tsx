import React from "react";
import Socials from "../components/Socials";
import Translations from "../translations/Home";
import parse from "html-react-parser";
type Props = {
	lang: "en" | "fr";
};
class Home extends React.Component<Props> {
	state: {
		song: string;
		url: string;
		artist: string;
		age: string;
	};
	constructor(props: Props) {
		super(props);
		this.state = {
			song: "",
			url: "",
			artist: "",
			age: "",
		};
	}
	age() {
		fetch("http://localhost:9754/api/age")
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				this.setState({ age: res });
			});
	}
	componentDidMount() {
		this.updateLastFM();
		this.age();
		setInterval(() => {
			this.updateLastFM();
			this.age();
		}, 30 * 1000);
	}
	updateLastFM() {
		fetch("https://cxllm.xyz/api/last-fm")
			.then((res) => res.json())
			.then((res) => {
				if (!res)
					return this.setState({
						song: "",
						url: "",
						artist: "",
					});
				this.setState({ song: res.song, url: res.url, artist: res.artist });
			});
	}
	render() {
		const lang = this.props.lang;
		const translation = Translations[lang];
		return (
			<>
				<h1>Callum - {translation.title}</h1>
				<Socials />
				<p className="text">
					{parse(translation.text.replace("[age]", this.state.age))}
				</p>
				<p className="spotify">
					{this.state.song ? (
						<a href={this.state.url}>
							{translation.song
								.replace("[song]", this.state.song)
								.replace("[artist]", this.state.artist)}
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
