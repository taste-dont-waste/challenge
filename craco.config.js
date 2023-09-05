// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const cracoAlias = require("craco-alias");

// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: "./src",
        // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
  ],
};
