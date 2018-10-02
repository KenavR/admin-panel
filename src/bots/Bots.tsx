import * as React from "react";
import { Component, CSSProperties } from "react";
import { BotMeta } from "../shared/models";

interface BotsProps {
  currentBot: BotMeta;
}

export class Bots extends Component<BotsProps, any> {
  render() {
    const sectionStyle: CSSProperties = {};
    const headerStyle: CSSProperties = {
      display: "flex",
      alignItems: "center",

      height: "3rem",
      padding: "0 1rem",
      lineHeight: "3rem",
      borderBottom: "1px solid #202225"
    };
    const h3Style: CSSProperties = {
      flex: 1,
      margin: 0
    };
    const articleStyle: CSSProperties = {
      padding: "1rem",
      borderBottom: "1px solid #202225"
    };
    const h1Style: CSSProperties = {
      marginTop: 0,
      fontWeight: 300
    };

    const { currentBot } = this.props;

    return (
      <section style={sectionStyle}>
        <header style={headerStyle}>
          <h3 style={h3Style}>{currentBot.name}</h3>
          <button className="secondary">&#43;</button>
          <button className="primary">save</button>
        </header>
        <article style={articleStyle}>
          <h1 style={h1Style}>Configuration</h1>
          <div>
            <div>Name</div>
            <input type="text" placeholder="Bot name" value={currentBot.name}/>
          </div>
          <div>
            <span>Discord Servers</span>
            <ul>{currentBot.discord.servers.map(s => <li key={s}>{s}</li>)}</ul>
          </div>
        </article>
        <article style={articleStyle}>
          <h1 style={h1Style}>Extensions</h1>
        </article>
      </section>
    );
  }
}
