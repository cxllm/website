import React from "react";
import { TypeAnimation } from "react-type-animation";
import translations from "../Translations/Home";
import Socials from "../Templates/Socials";

export default class Home extends React.Component<{ lang: "en" | "fr" }> {
	render() {
		return (
			<div className="content text">
				<span>
					<img src="/avatar.png" width="120px" alt="Avatar" />
					<div className="intro">
						<h1>Callum</h1>
						<TypeAnimation
							sequence={translations[this.props.lang].phrases}
							wrapper="span"
							speed={60}
							style={{ fontSize: "large", display: "inline-block" }}
							repeat={Infinity}
						/>{" "}
						<Socials />
					</div>
				</span>
			</div>
		);
	}
}
