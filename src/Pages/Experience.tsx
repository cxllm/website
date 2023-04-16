import React from "react";
import { Helmet } from "react-helmet";
import Socials from "../Components/Socials";
import Navbar from "../Components/Navbar";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar active={window.location.pathname} />

        <div className="content text">
          <Helmet>
            <title>Callum | Experience</title>
            <meta
              name="description"
              content="Full-Stack TypeScript and Python developer from the UK"
            />
            <meta property="og:url" content="https://cxllm.co.uk/" />
            <meta property="og:title" content="Callum - Experience" />
            <meta
              property="og:description"
              content="Full-Stack TypeScript and Python developer from the UK"
            />
          </Helmet>
          <span>
            <img src="/avatar.png" width="120px" alt="Avatar" />
            <div className="intro">
              <h1>Experience</h1>
              <p>
                Below you can find a list of the languages, frameworks and Linux
                distros/softwares I am comfortable using
              </p>

              <Socials />
            </div>
            <div className="table">
              <div>
                <h3>JavaScript/TypeScript</h3>
                <p>
                  JS/TS are languages I use very frequently and am very
                  confident with, and within that I mainly use{" "}
                  <a href={"https://nodejs.org"}>NodeJS</a> and its various
                  frameworks/packages, namely:
                  <br />- <a href={"https://react.dev"}>React</a>, e.g.{" "}
                  <a href={"/"}>this website</a>,{" "}
                  <a href={"https://tfl.cxllm.uk"}>TfL Status Page</a>
                  <br />- <a href={"https://discord.js.org"}>
                    Discord.js
                  </a> e.g.{" "}
                  <a href={"https://github.com/cxllm/corynth"}>Corynth</a>
                </p>
              </div>
              <div className="edge">
                <h3>Python</h3>
                <p>
                  Python is a language I also use frequently, mainly for backend
                  instead of for frontend like I do with JavaScript. I use many
                  Python frameworks, namely:
                  <br />-{" "}
                  <a href={"https://flask.palletsprojects.com/"}>Flask</a>, e.g.{" "}
                  <a href={"https://tfl.cxllm.uk"}>TfL Status Page</a>
                </p>
              </div>
              <div>
                <h3>Linux (Desktop)</h3>
                <p>
                  I have been using Linux on desktop since 2020, and have been
                  switching between a lot of various Linux distros during that
                  time, including:
                  <br />
                  Fedora (current), Arch Linux, openSUSE Tumbleweed, Ubuntu,
                  PopOS, Debian and more.
                </p>
              </div>
              <div>
                <h3>Linux (Server)</h3>
                <p>
                  I have been using Linux on server for a while now too, and I
                  am confident with a number of Linux operating systems on
                  server, and a lot of server software along with that. The
                  operating systems I have used on a server are:
                  <br />
                  Ubuntu (current), Debian, Fedora
                </p>
              </div>
            </div>
          </span>
        </div>
      </>
    );
  }
}
