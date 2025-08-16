import { email } from "../config.json";
export default function Socials() {
	return (
		<div className="socials">
			<a href="https://github.com/cxllm" className="front">
				<i className="fab fa-github" />
			</a>
			<a href="https://discord.com/users/536949735299219467">
				<i className="fab fa-discord" />
			</a>
			<a href={`mailto:${email}`} className="back">
				<i className="fa fa-envelope" />
			</a>
		</div>
	);
}
