const { i18n } = require("./next-i18next.config");
const { withSentryConfig } = require("@sentry/nextjs");

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// module.exports = withSentryConfig(
//   {
//     i18n,
//     // target: "experimental-serverless-trace",
//   },
//   sentryWebpackPluginOptions
// );

module.exports = {
  i18n,
};
