import { BotMeta, Consumer } from "./models";

interface FrictionState {
  bots: BotMeta[];
}

interface GlobalStateApi {
  readonly state: FrictionState;
  setState: Consumer<FrictionState>;
}

class GlobalState implements GlobalStateApi {
  private static _INSTANCE: GlobalState;
  private _state: FrictionState;

  private constructor() {
    this._state = { bots: [] };
  }

  static get INSTANCE() {
    if (!this._INSTANCE) {
      this._INSTANCE = new GlobalState();
    }
    return this._INSTANCE;
  }

  get state() {
    return this._state;
  }

  setState(state: FrictionState): void {
    this._state = Object.assign({}, this._state, state);
  }
}

export const AppState = GlobalState.INSTANCE;
