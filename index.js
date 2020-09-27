const config = require("./config/config.json");
const server = require("./src/server.js");
const controller = require("./src/controller.js");

const fs = require("fs");
const path = require("path");

// Load config
// TODO: Clean this loading...
const chosenConfig = config.environments[config.chosenEnvironment];
// TODO: Use an env variable instead of chosenEnvironment.

const configFilePath = path.resolve(path.normalize(__dirname + chosenConfig));
const conf = JSON.parse(fs.readFileSync(configFilePath));

// Initialize controller
// TODO: Abstract finding file paths.
// TODO: Consider using clearer config property names (hint on structure: file path or object or array?)
const dataIndexFilePath = path.resolve(path.normalize(__dirname + conf.data));
const contrlr = controller.create(dataIndexFilePath);

// Start server
// TODO: Consider passing conf.server instead...receiving {hostname, port}
server.start(conf.server.hostname, conf.server.port, contrlr);
