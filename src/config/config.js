const dotenv = require("dotenv");
const program = require("../utils/commander.js");

const {mode} = program.opts(); 

dotenv.config({
    path: mode === "produccion" ? "./.env.produccion" : "./.env.desarrollo"
});

const configObject = {
    mongo_url: process.env.MONGO_URL
}

// const configObject = {
//     node_env: process.env.NODE_ENV
// }

module.exports = configObject;