const _ = require("lodash");

const item = [1, [2,3],[4,5,6]];
const newItems = _.flattenDeep(item);

console.log(newItems);