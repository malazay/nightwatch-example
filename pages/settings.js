var settingsCommands = {
  editProfile: function (bio) {
    return this.waitForElementVisible('@body', 5000)
      .clearValue('@bioTextInput')
      .setValue('@bioTextInput', bio)
      .click('@updateProfileButton')
      .waitForElementVisible('@successMessage');
  },
  cleanUp: function () {
    return this.editProfile('', '')
  }
};

module.exports = {
  commands: [settingsCommands],
  elements: {
    body: {
      selector: 'body'
    },
    bioTextInput: {
      selector: '#user_profile_bio'
    },
    updateProfileButton: {
      selector: '//button[text()="Update profile"]',
      locateStrategy: 'xpath'
    },
    successMessage: {
      selector: '.flash-full'
    }

  }
};