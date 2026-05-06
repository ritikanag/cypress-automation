const { defineConfig } = require("cypress");
const path = require('path');

module.exports = defineConfig({
  projectId: "nps94r",
  experimentalStudio: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    //reportDir: "cypress/results",
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/grep/src/plugin')(config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    // baseUrl: 'https://reqres.in/'
    // baseUrl: 'http://localhost:3000/'
  },
  env: {
    apiKey: process.env.API_KEY
  },
  webpack: {
    resolve: {
      alias: {
        '@pages': path.resolve(__dirname, 'cypress/pages'),
      },
    },
  },
});
