export function getLanguage(): "en" | "fr" {
	let lang = localStorage.getItem("lang");
	if (!lang || (lang != "en" && lang != "fr")) {
		if (navigator.language.startsWith("fr")) {
			localStorage.setItem("lang", "fr");
			lang = "fr";
		} else {
			localStorage.setItem("lang", "en");
			lang = "en";
		}
	}
	if (lang == "fr") return "fr";
	else return "en";
}

export function setLanguage(): void {
	let lang = localStorage.getItem("lang");
	if (!lang || (lang != "en" && lang != "fr")) {
		if (navigator.language.startsWith("fr")) {
			localStorage.setItem("lang", "fr");
			lang = "fr";
		} else {
			localStorage.setItem("lang", "en");
			lang = "en";
		}
	} else {
		if (lang == "en") {
			localStorage.setItem("lang", "fr");
		} else {
			localStorage.setItem("lang", "en");
		}
	}
	window.location.reload();
}
