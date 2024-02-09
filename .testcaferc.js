let os = require("os");

module.exports = {
    src: "./tests/",
    browsers: ["chrome", "firefox"],
    baseUrl: "https://todomvc.com/examples/react/dist/",
    skipJsErrors: true,
    hostname: os.hostname()
}