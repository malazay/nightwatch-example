var config = require('../nightwatch.conf.js');
var data = require('../utils/data')

module.exports = {
  'Create a repository': function (client) {
    var github = client.page.github();
    var menu = client.page.menu();
    var home = client.page.home();
    var createRepo = client.page.createRepo();
    var repo = client.page.repo();
    var repoCodeSection = repo.section.code;
    var repoTabsSection = repo.section.tabs;
    var repoSettingsSection = repo.section.settings;
    var loginData = data.getTestData();
    var testData = {
      title: data.getRandomName(),
      description: 'this is an automated repository'
    }
    github.navigate()
      .login(loginData.user, loginData.password)
    home.startNewProject()
    createRepo.create(testData)
    repoTabsSection.waitForElementPresent('@repoName')
    repoTabsSection.assert.containsText('@repoName', testData.title)
    repoCodeSection.assert.containsText('@emptyRepoText', 'git init')
    repoTabsSection.navigateToSettings()
    repoSettingsSection.delete(testData.title)
    menu.logout()
    client.end();
  }
};