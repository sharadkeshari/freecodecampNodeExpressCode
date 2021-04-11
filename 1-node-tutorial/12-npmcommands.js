//npm - global command comes with node
// npm --version
// local dependency - use it in this particular project
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)


//package.json - manifest file that (stores important info about project/package)'
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, process enter to skip)

// npm init -y (everything default)

const lodash = require('lodash')

const items = [1, [2, 3, [4, 5], 6], 7]
console.log(lodash.flattenDeep(items));