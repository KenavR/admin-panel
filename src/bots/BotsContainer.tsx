import * as React from "react";
import { Component, Fragment, CSSProperties } from "react";
import { withRouter, RouteComponentProps } from "react-router";

import { BotsNav } from "./BotsNav";
import { Bots } from "./Bots";
import { AppState } from "../shared/state";
import { BotMeta } from "../shared/models";

interface BotsContainerProps extends RouteComponentProps<any> {}

interface BotsContainerState {
  bots: BotMeta[];
  currentBot: BotMeta;
}

class BotsContainer extends Component<BotsContainerProps, BotsContainerState> {
  constructor(props: BotsContainerProps) {
    super(props);

    const emptyBot: BotMeta = {
      name: "No Bots Available",
      discord: {
        servers: []
      },
      extensions: []
    };

    this.state = {
      bots: [],
      currentBot: emptyBot
    };
  }

  componentDidMount() {
    const bots = AppState.state.bots;
    this.setState(prevState => ({
      bots: bots.length > 0 ? bots : prevState.bots,
      currentBot: bots.length > 0 ? bots[0] : prevState.currentBot
    }));
  }

  static getDerivedStateFromProps(
    props: BotsContainerProps,
    state: BotsContainerState
  ) {
    const pathSections = props.location
      ? props.location.pathname.split("/")
      : [];
    const botName =
      pathSections.length > 0 ? pathSections[pathSections.length - 1] : "";
    if (state.currentBot && state.currentBot.name !== botName) {
      const bot = state.bots.find(b => b.name === botName);
      const newCurrentBot = bot ? bot : state.currentBot;
      return Object.assign({}, state, { currentBot: newCurrentBot });
    }
    return state;
  }

  render() {
    const sidebarStyle: CSSProperties = {
      width: "15rem",
      height: "100%",
      backgroundColor: "#2f3136"
    };

    const mainStyle: CSSProperties = {
      flex: 1
    };

    const { bots, currentBot } = this.state;

    return (
      <Fragment>
        <aside style={sidebarStyle}>
          <BotsNav bots={bots} currentBot={currentBot} />
        </aside>
        <main style={mainStyle}>
          <Bots currentBot={currentBot} />
        </main>
      </Fragment>
    );
  }
}

export default withRouter(BotsContainer);
