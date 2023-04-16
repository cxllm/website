// might implement in the future but not right now
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const config = require("./config.json");

const app = express();
app.use(cors());
app.set("views", "./build");
app.use(express.static("./build"));
app.engine("html", require("ejs").renderFile);
let lastfm = {};

async function updateLastFM() {
  const { data } = await axios.get(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=cxllm&api_key=${config.lastfm}&format=json`
  );
  const song = data.recenttracks.track[0];
  lastfm = {
    song: song.name,
    artist: song.artist["#text"],
    url: song.url,
    playing: song["@attr"]?.nowplaying === "true",
  };
  return lastfm;
}

updateLastFM();
setInterval(async () => {
  await updateLastFM();
}, 30 * 1000);

app.get("/api/last-fm", (_, res) => {
  return res.json(lastfm);
});

app.get("*", (_, res) => {
  return res.render("index.html");
});

app.listen(9754, () => {
  console.log("Webserver started");
});
