var path = require("path");
var mymodule = require("./mymodule");
var dir = process.argv[2];
var filter = process.argv[3];

var callback = function (err, filtred) {
  if (err) {
    console.log("err");
  }
  for (var i in filtred) {
    console.log(filtred[i]);
  }
};
mymodule(directory, filter, callback);
