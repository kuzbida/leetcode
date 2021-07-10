// you can do following
module.exports = {a: 'hey!'};
/*
const EventEmitter = require('events');
module.exports = new EventEmitter();
*/

// OR
//module.exports = new UserClass();

// but overriding `exports` cause problems
exports = {a: 'hey!'}; // don't do it
