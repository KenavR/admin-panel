import * as React from "react";
import { Component, CSSProperties } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component<any, any, any> {
  render() {
    const navStyle: CSSProperties = {
      position: "fixed",
      left: "0",
      bottom: "0",
      top: "0",
      width: "60px",

      display: "flex",
      flexDirection: "column",

      backgroundColor: "#202225"
    };

    const aStyle: CSSProperties = {
      height: "60px",
      lineHeight: "60px",
      width: "100%",
      textAlign: "center",
      fontSize: "2rem",
      color: "#36393f"
    };

    const aActiveStyle: CSSProperties = {
      color: "darkorange"
    };

    return (
      <nav style={navStyle}>
        <NavLink to="/bots" style={aStyle} activeStyle={aActiveStyle}>
          <div className="fab fa-discord" />
        </NavLink>
        <NavLink to="/extensions" style={aStyle} activeStyle={aActiveStyle}>
          <div className="fas fa-layer-group" />
        </NavLink>
        <NavLink to="/settings" style={aStyle} activeStyle={aActiveStyle}>
          <div className="fas fa-cog" />
        </NavLink>
      </nav>
    );
  }
}
