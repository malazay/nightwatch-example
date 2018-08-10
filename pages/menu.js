var menuCommands = {
  openMenu: function () {
    return this.waitForElementVisible('@menuButton')
      .click('@menuButton')
      .waitForElementVisible('@logoutButton')
  },
  logout: function () {
    return this.openMenu()
      .click('@logoutButton')
      .waitForElementNotPresent('@logoutButton');
  },
  navigateToSettings: function () {
    return this.openMenu()
      .click('@settingsButton')
      .waitForElementNotVisible('@logoutButton');
  }
};

module.exports = {
  commands: [menuCommands],
  elements: {
    body: {
      selector: 'body'
    },
    menuButton: {
      selector: '.HeaderNavlink.name.mt-1'
    },
    logoutButton: {
      selector: 'form.logout-form button'
    },
    settingsButton: {
      selector: 'a[href="/settings/profile"]'
    }
  }
};