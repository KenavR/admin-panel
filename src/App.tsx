import * as React from "react";
import { Fragment, Component } from "react";

import { Nav } from "./Nav";
import { Content } from "./Content";
import { Bridge as FrictionBridge } from "./bridge/FrictionBridge";
import { AppState } from "./shared/state";
import { BotMeta } from "./shared/models";

interface AppState {
  loading: boolean;
  bots: BotMeta[];
}

class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      loading: true,
      bots: []
    };
  }

  async componentDidMount() {
    const bots = await FrictionBridge.getBots();
    AppState.setState({ bots });
    this.setState({ bots, loading: false });
  }

  public render() {
    const { loading } = this.state;

    return (
      <Fragment>
        <Nav />
        {!loading ? <Content /> : null}
      </Fragment>
    );
  }
}

export default App;
