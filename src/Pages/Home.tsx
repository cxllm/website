import React from "react";
import { Helmet } from "react-helmet";
import Socials from "../Components/Socials";
import Navbar from "../Components/Navbar";

export default class Home extends React.Component<
  {},
  {
    song?: string;
    artist?: string;
    url?: string;
    playing?: boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      song: "",
      artist: "",
      url: "",
      playing: false,
    };
  }

  componentDidMount() {
    this.updateLastFM();
    setInterval(() => {
      this.updateLastFM();
    }, 30 * 1000);
  }

  updateLastFM() {
    fetch("https://a.cxllm.uk/api/last-fm")
      .then((res) => res.json())
      .catch((e) =>
        this.setState({
          song: "",
          artist: "",
          url: "",
          playing: false,
        })
      )
      .then((res) => {
        if (!res)
          return this.setState({
            song: "",
            url: "",
            artist: "",
            playing: false,
          });
        this.setState(res);
      });
  }

  render() {
    return (
      <>
        <Navbar active={window.location.pathname} />

        <div className="content text">
          <Helmet>
            <title>Callum | Home</title>
            <meta
              name="description"
              content="Full-Stack TypeScript and Python developer from the UK"
            />
            <meta property="og:url" content="https://cxllm.co.uk/" />
            <meta property="og:title" content="Callum - Homepage" />
            <meta
              property="og:description"
              content="Full-Stack TypeScript and Python developer from the UK"
            />
          </Helmet>
          <span>
            <img src="/avatar.png" width="120px" alt="Avatar" />
            <div className="intro">
              <h1>Callum (cxllm)</h1>
              <p>Full-Stack TypeScript and Python developer from the UK.</p>
              <Socials />
              {this.state.song ? (
                <a className="spotify" href={this.state.url}>
                  <i className="fab fa-spotify" />
                  {this.state.playing
                    ? "Now listening to"
                    : "Last listened to"}{" "}
                  <b>{this.state.song}</b> by <b>{this.state.artist}</b>
                </a>
              ) : (
                ""
              )}{" "}
            </div>
          </span>
        </div>
      </>
    );
  }
}
