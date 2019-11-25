const os = require("os");
const editJsonFile = require("edit-json-file");

const constants = editJsonFile(`${__dirname}/main/src/constants.json`);
const ip = Object.values(os.networkInterfaces())[1][0].address;

constants.set("deviceIp", ip);

constants.save();

console.log(`Device ip was successfuly seted (${constants.get("deviceIp")})`);
