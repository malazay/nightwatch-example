require

var createRepoCommands = {
  verifyOwner: function (owner) {
    return this.waitForElementVisible('@body', 5000)
      .containsText('@ownerSelector', owner)
  },
  create: function (testData) {
    return this.waitForElementVisible('@title')
      .setValue('@repositoryNameInput', testData.title)
      .setValue('@repositoryDescription', testData.description)
      .click('@submitButton')
      .waitForElementNotPresent('@submitButton')
  }

};

module.exports = {
  commands: [createRepoCommands],
  elements: {
    body: {
      selector: 'body'
    },
    title: {
      selector: '.Subhead-heading'
    },
    ownerSelector: {
      selector: '.js-owner-container summary'
    },
    repositoryNameInput: {
      selector: '#repository_name'
    },
    repositoryDescription: {
      selector: '#repository_description'
    },
    submitButton: {
      selector: '[data-disable-with*="Creating repository"]'
    }
  }
};