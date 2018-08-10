var data = require("../testData.json");
var utils = require("./utils")

module.exports = {
  getTestData: function () {
    return data;
  },
  getRandomName: function () {
    return 'test' + utils.getcurrentTimeStamp();
  }

}