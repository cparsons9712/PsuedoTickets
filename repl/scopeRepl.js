const repl = require("repl");

global.globalSentence = "This variable will be accessible anywhere because of the global. suffix"
const explicitVariable = "This variable is being explicitly added to the repl's scope under the name exSentence"
const readOnlyVariable = "Because we set the properties. Configurable = false means we cannot change the properties and enumerable means the properties can be looped over"

const r = repl.start("scope-repl => ") //.context.exSentence = explicitVariable;

Object.defineProperty(r.context, "readOnlyVariable", {
    configurable : false,
    enumerable : true,
    value : readOnlyVariable,
})

//auto close after 5 seconds
setTimeout(()=>{
    r.close();
}, 5000);
