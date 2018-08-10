var config = require('../nightwatch.conf.js');
var data = require('../utils/data')

module.exports = {
  'Login/Logout': function (client) {
    var github = client.page.github();
    var home = client.page.home();
    var menu = client.page.menu();
    var testData = data.getTestData();
    github.navigate()
      .login(testData.user, testData.password)
    home.assert.containsText('@title', 'Learn Git and GitHub without any code!')
    menu.logout()
    client.end();
  }
};