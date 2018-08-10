var config = require('../nightwatch.conf.js');
var data = require('../utils/data')

module.exports = {
  'This is a expected fail: Login/Logout': function (client) {
    var github = client.page.github();
    var home = client.page.home();
    var menu = client.page.menu();
    github.navigate()
      .login('nochanceThisUserExist', data.getTestData().password)
    home.assert.containsText('@title', 'this is going to fail')
    menu.logout()
    client.end();
  }
};