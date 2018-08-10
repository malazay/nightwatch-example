var homeCommands = {
  startNewProject: function () {
    return this.click('@startAProjectButton')
      .waitForElementNotPresent('@startAProjectButton');
  },
};

module.exports = {
  commands: [homeCommands],
  elements: {
    body: {
      selector: 'body'
    },
    title: {
      selector: '.shelf-title'
    },
    startAProjectButton: {
      selector: '.shelf-content a[href="/new"]'
    },
    passwordInput: {
      selector: '#password'
    },
    submitButton: {
      selector: 'input[name="commit"]'
    }
  }
};