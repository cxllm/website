import { email } from "../config.json";
export default function Socials() {
	return (
		<div className="socials">
			<a href="https://github.com/cxllm" className="front">
				<i className="fab fa-github" />
			</a>
			<a href="https://linkedin.com/in/callumar">
				<i className="fab fa-linkedin" />
			</a>
			<a href={`mailto:${email}`} className="back">
				<i className="fa fa-envelope" />
			</a>
		</div>
	);
}
