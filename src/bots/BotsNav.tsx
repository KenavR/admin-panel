import * as React from "react";
import { Component, CSSProperties, Fragment } from "react";
import { NavLink } from "react-router-dom";

import { BotMeta } from "../shared/models";

interface BotsNavProps {
  currentBot: BotMeta;
  bots: BotMeta[];
}

export class BotsNav extends Component<BotsNavProps, any> {
  constructor(props: BotsNavProps) {
    super(props);
  }

  render() {
    const { bots } = this.props;

    const headerStyle: CSSProperties = {
      height: "3rem",
      lineHeight: "3rem",
      padding: "0 1rem",
      borderBottom: "1px solid #202225",
      marginBottom: "1rem"
    };
    const h3Style: CSSProperties = {
      margin: 0
    };
    const navStyle: CSSProperties = {
      display: "flex",
      flexDirection: "column",
      padding: "0 0.5rem"
    };

    const linkStyle: CSSProperties = {
      display: "flex",
      alignItems: "center",
      height: "2rem",
      lineHeight: "2rem",
      marginBottom: "0.125rem",
      padding: "0 0.5rem",
      fontWeight: 300
    }

    const imgStyle: CSSProperties = {
      height: "1.8rem",
      width: "1.8rem",
      marginRight: "0.5rem"
    }

    const linkActiveStyle: CSSProperties = {
      backgroundColor: "#36393f",
      borderRadius: "0.3rem",
      color: "white"
    };

    return (
      <Fragment>
        <header style={headerStyle}>
          <h3 style={h3Style}>Bots</h3>
        </header>
        <nav style={navStyle}>
          {bots.map(b => (
            <NavLink
              to={`/bots/${b.name}`}
              key={b.name}
              style={linkStyle}
              activeStyle={linkActiveStyle}
            >
              <img src="/img/logo.png" alt="" style={imgStyle}/>
              {b.name}
            </NavLink>
          ))}
        </nav>
      </Fragment>
    );
  }
}
