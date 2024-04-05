import React from "react";
const Translations = {
	fr: "Pour moi, il est actuellement",
	en: "For me, it is currently"
};

export default class Time extends React.Component<
	{
		lang: "en" | "fr";
	},
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
		const translation = Translations[this.props.lang];
		return (
			<span style={{ fontSize: "17.5px" }}>
				{translation}
				<b style={{ fontSize: "20px" }}> {this.state.time} </b>
			</span>
		);
	}
}
