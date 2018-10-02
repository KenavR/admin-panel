import {
  Supplier,
  BotMeta,
  Settings,
  ExtensionMeta,
  Consumer
} from "../shared/models";

interface FrictionBridgeApi {
  getBots: Supplier<Promise<BotMeta[]>>;
  getSettings: Supplier<Settings>;
  getExtensions: Supplier<ExtensionMeta[]>;
  addBot: Consumer<BotMeta>;
}

class FrictionBridge implements FrictionBridgeApi {
  private static _INSTANCE: FrictionBridge;

  private constructor() {}

  static get INSTANCE() {
    if (!this._INSTANCE) {
      this._INSTANCE = new FrictionBridge();
    }
    return this._INSTANCE;
  }

  async getBots(): Promise<BotMeta[]> {
    return Promise.resolve([
      {
        name: "Friction",
        discord: {
          servers: ["friction"]
        },
        extensions: [
          {
            name: "friction-ping-pong"
          }
        ]
      },
      {
        name: "Devvit",
        discord: {
          servers: ["devvit"]
        },
        extensions: [
          {
            name: "friction-ping-pong"
          }
        ]
      }
    ]);
  }
  getSettings(): Settings {
    return {};
  }
  getExtensions(): ExtensionMeta[] {
    return [];
  }

  addBot(bot: BotMeta): void {
    // store new bot
  }
}

export const Bridge = FrictionBridge.INSTANCE;
