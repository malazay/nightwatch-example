var githubCommands = {
  login: function (username, password) {
    return this.waitForElementVisible('@body', 5000)
      .setValue('@usernameInput', username)
      .setValue('@passwordInput', password)
      .click('@submitButton')
      .waitForElementNotPresent('@submitButton');
  },
};

module.exports = {
  url: "https://github.com/login",
  commands: [githubCommands],
  elements: {
    body: {
      selector: 'body'
    },
    usernameInput: {
      selector: '#login_field'
    },
    passwordInput: {
      selector: '#password'
    },
    submitButton: {
      selector: 'input[name="commit"]'
    }
  }
};