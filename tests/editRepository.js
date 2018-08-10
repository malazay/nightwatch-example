var config = require('../nightwatch.conf.js');
var data = require('../utils/data')

module.exports = {
  'Create a repository': function (client) {
    var github = client.page.github();
    var menu = client.page.menu();
    var home = client.page.home();
    var createRepo = client.page.createRepo();
    var repo = client.page.repo();
    var repoTabsSection = repo.section.tabs;
    var repoSettingsSection = repo.section.settings;
    var loginData = data.getTestData();
    var testData = {
      title: data.getRandomName(),
      description: 'this is an automated repository'
    }
    var newTitle = testData.title + 'edit'
    github.navigate()
      .login(loginData.user, loginData.password)
    home.startNewProject()
    createRepo.create(testData)
    repoTabsSection.waitForElementPresent('@repoName')
    repoTabsSection.assert.containsText('@repoName', testData.title)
    repoTabsSection.navigateToSettings()
    repoSettingsSection.editProjectName(newTitle)
    repoTabsSection.assert.containsText('@repoName', newTitle)
    repoTabsSection.navigateToSettings()
    repoSettingsSection.delete(newTitle)
    menu.logout()
    client.end();
  }
};