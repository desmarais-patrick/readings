const path = require("path");
const fs = require("fs");

function create(dataIndexFilePath) {
    const index = JSON.parse(fs.readFileSync(dataIndexFilePath));
    return {
        index
    };
}

module.exports = {
    create
}