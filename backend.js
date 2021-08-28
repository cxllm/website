const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const axios = require("axios").default;
const config = require("./config.json");

let lastfm = null;

async function updateLastFM() {
	const { data } = await axios.get(
		`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=cxllm&api_key=${config.lastfm}&format=json`
	);
	const song = data.recenttracks.track[0];
	if (song["@attr"] && song["@attr"].nowplaying === "true")
		lastfm = { song: song.name, artist: song.artist["#text"], url: song.url };
	else lastfm = null;
}
updateLastFM();
setInterval(async () => {
	await updateLastFM();
}, 30 * 1000);

app.get("/api/last-fm", (_, res) => {
	return res.json(lastfm);
});
/*app.get("/api/age", (_, res) => {
	const age = Math.floor((Date.now() - new Date(config.dob)) / 31536000000);
	return res.json(age);
});*/
app.get("*", (_, res) => {
	return res.redirect("https://cxllm.xyz/API");
});

app.listen(9754, () => {
	console.log("Webserver started");
});
