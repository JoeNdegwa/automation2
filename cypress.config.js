const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jntxfs",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
