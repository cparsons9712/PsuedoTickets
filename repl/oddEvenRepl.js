const repl = require("repl");
const colors = require("colors");

const r = repl.start({ prompt: "custom-repl => ", eval: isEven, writer: modifyOutput })

function isEven(uInput, context, filename, callback) {
    callback(null, uInput % 2 == 0 ? "Even Number" : "Odd Number");
}

function modifyOutput(output) {
    return output.toUpperCase().red;
}
