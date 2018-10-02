interface FrictionGUIConfig {
  path: string;
}

export function install(
  frictionCoreApi: any,
  config: FrictionGUIConfig = { path: "/friction" }
) {
  const { registerStatic } = frictionCoreApi.extensions["friction-express"];
  console.log(" register static ");
  registerStatic("/", "d:/projects/friction/extensions/gui/build");
}
