const index = require('./index.js');
var _ = require('lodash'); /* This is a package with lot of built in functions *//* here the _ after var stands for function name it can be anything
var age = index.age; */
console.log(age);

/* creating an array  */

var data = ["person","person",1,2,3,3];
var filter = _.uniq(data); /* built in function 1 of lodash */
console.log(filter);

console.log(_.isString(true));