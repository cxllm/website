import React from "react";
import { TypeAnimation } from "react-type-animation";
import Translations from "../Translations/Home";
import Socials from "../Templates/Socials";
import { Helmet } from "react-helmet";

export default class Home extends React.Component<
	{ lang: "en" | "fr" },
	{ time: string }
> {
	interval: any;
	constructor(props: any) {
		super(props);
		this.state = {
			time: ""
		};
	}
	componentDidMount(): void {
		this.updateTime();
		this.interval = setInterval(() => {
			this.updateTime();
		}, 1000);
	}
	updateTime() {
		this.setState({
			time: new Date(Date.now())
				.toLocaleString("en-GB", {
					timeZone: "Europe/London"
				})
				.split(",")[1]
				.split(":")
				.splice(0, 2)
				.join(this.props.lang === "fr" ? "h" : ":")
				.trim()
		});
	}
	componentWillUnmount(): void {
		clearInterval(this.interval);
	}
	render() {
		const translations = Translations[this.props.lang];
		return (
			<div className="content text">
				<Helmet>
					<title>Callum | {translations.title}</title>
				</Helmet>
				<span>
					<img src="/avatar.png" width="120px" alt="Avatar" />
					<div className="intro">
						<h1>Callum</h1>
						<TypeAnimation
							sequence={translations.phrases}
							wrapper="span"
							speed={60}
							style={{ fontSize: "20px", display: "inline-block" }}
							repeat={Infinity}
						/>{" "}
						<br />
						<Socials />
					</div>
				</span>
			</div>
		);
	}
}
