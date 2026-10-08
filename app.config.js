// app.config.js
module.exports = ({ config }) => {
  let name = config.name;
  let scheme = config.scheme;
  let bundleIdentifier = config.ios.bundleIdentifier;
  let androidPackage = config.android.package;

  switch (process.env.APP_VARIANT) {
    case "preview":
      name = config.name + " (preview)";
      scheme = config.scheme + "-preview";
      bundleIdentifier = bundleIdentifier + ".preview";
      androidPackage = androidPackage + ".preview";
      break;
    default: // development : on ne change que le nom
      name = config.name + " (dev)";
  }

  return {
    ...config,
    name: name,
    scheme: scheme,
    ios: { ...config.ios, bundleIdentifier: bundleIdentifier },
    android: { ...config.android, package: androidPackage },
  };
};

