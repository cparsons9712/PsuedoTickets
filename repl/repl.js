const repl = require("repl");

global.globalVariable = "This is a global string";

const name = "Christine Parsons";

const r = repl.start("custom-repl => ");

Object.defineProperty(r.context, "name", {
    configurable: false,
    enumerable: true,
    value: name,
});
