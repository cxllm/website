import React from "react";
import Socials from "../components/Socials";

class NotFound extends React.Component {
	render() {
		return (
			<>
				<h1>Callum - 404 Not Found</h1>
				<Socials />
				<br />
				<p>
					{/*@ts-ignore*/}
					The location you are trying to access ({this.props.location.pathname}) was
					not found.
					<br /> <a href="/">Back Home</a>
				</p>
			</>
		);
	}
}

export default NotFound;
