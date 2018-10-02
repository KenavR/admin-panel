export interface ExtensionMeta {
  name: string;
}

export interface BotMeta {
  name: string;
  discord: {
    servers: string[];
  };
  extensions: ExtensionMeta[];
}
