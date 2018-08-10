var config = require('../nightwatch.conf.js');
var data = require('../utils/data')

module.exports = {
  'Edit Profile': function (client) {
    var github = client.page.github();
    var menu = client.page.menu();
    var settings = client.page.settings();
    var bioValue = 'This is a test bio';
    var loginData = data.getTestData();
    github.navigate()
      .login(loginData.user, loginData.password)
    menu.navigateToSettings()
    settings.editProfile(bioValue)
    settings.assert.containsText('@bioTextInput', bioValue)
    settings.cleanUp()
    settings.assert.containsText('@bioTextInput', '')
    client.end();
  },
  'Create reporistory': function (client) {
    var github = client.page.github();
    var menu = client.page.menu();
    var settings = client.page.settings();
    var bioValue = 'This is a test bio';
    github.navigate()
      .login('nwtester', 'n16h7w47ch')
    menu.navigateToSettings()
    settings.editProfile(bioValue)
    settings.assert.containsText('@bioTextInput', bioValue)
    settings.cleanUp()
    settings.assert.containsText('@bioTextInput', '')
    client.end();
  }
};