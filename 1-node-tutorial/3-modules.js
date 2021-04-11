// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const { items, singlePerson } = require('./6-alternative-flavor')
const data = require('./6-alternative-flavor')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
sayHi(items[1]);
sayHi(singlePerson.name);
sayHi(data.items);
//if we have a function inside of a module
//the method will invoke
require('./7-mind-grenade')
