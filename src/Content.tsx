import * as React from "react";
import { Component, CSSProperties } from "react";
import { Switch, Route } from "react-router-dom";

import { BotsContainer } from "./bots";

export class Content extends Component<any, any> {
  render() {
    const contentStyle: CSSProperties = {
      display: "flex",

      height: "inherit",
      marginLeft: "3.75rem"
    };

    return (
      <div style={contentStyle}>
        <Switch>
          <Route path="/bots" component={BotsContainer} />
        </Switch>
      </div>
    );
  }
}
