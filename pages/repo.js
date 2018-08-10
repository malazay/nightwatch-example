var codeCommands = {

}

var tabsCommands = {
  navigateToSettings: function () {
    return this.click("@settingsOption")
  }
}

var settingsCommands = {
  delete: function (repo) {
    this.waitForElementVisible('@title')
      .click('@deleteRepoButton')
    return this.section.deleteDialog.confirm(repo)
  },
  editProjectName: function (repo) {
    return this.waitForElementVisible('@title')
      .clearValue('@repoNameInput')
      .setValue('@repoNameInput', repo)
      .waitForElementVisible('@renameButton')
      .click('@renameButton')
      .waitForElementNotPresent('@renameButton')
  },
}

var deleteRepoDialogCommands = {
  confirm: function (repo) {
    return this.waitForElementVisible('@verifyDeleteInput')
      .setValue('@verifyDeleteInput', repo)
      .click('@verifyDeleteButton')
      .waitForElementNotPresent('@verifyDeleteButton')
  }
}

module.exports = {
  sections: {
    tabs: {
      selector: '.pagehead.experiment-repo-nav',
      commands: [tabsCommands],
      elements: {
        codeOption: {
          selector: '[data-selected-links*="repo_source"]'
        },
        settingsOption: {
          selector: '[data-selected-links*="settings"]'
        },
        authorText: {
          selector: '.author'
        },
        repoName: {
          selector: '.public [itemprop="name"]'
        },
      }
    },
    code: {
      selector: '.repository-content',
      commands: [codeCommands],
      elements: {
        body: {
          selector: 'body'
        },
        submitButton: {
          selector: 'input[name="commit"]'
        },
        emptyRepoText: {
          selector: '#empty-setup-new-repo-echo'
        }
      }
    },
    settings: {
      selector: '.repository-content',
      commands: [settingsCommands],
      elements: {
        title: {
          selector: '//div[@class="Subhead"]/h2',
          locateStrategy: 'xpath'
        },
        repoNameInput: {
          selector: '[name="new_name"]'
        },
        renameButton: {
          selector: '.js-rename-repository-button:not([disabled])'
        },
        deleteRepoButton: {
          selector: '//summary[contains(text(),"Delete this repository")]',
          locateStrategy: 'xpath'
        }
      },
      sections: {
        deleteDialog: {
          selector: '[aria-label="Delete repository"]',
          commands: [deleteRepoDialogCommands],
          elements: {
            verifyDeleteInput: {
              selector: 'form[action*="delete"] [name="verify"]'
            },
            verifyDeleteButton: {
              selector: 'form[action*="delete"] button'
            }
          }
        }
      }
    }
  },
};