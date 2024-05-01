import { createFile, deleteFile, readFile } from "./cypress/support/task_functions";

const { defineConfig } = require('cypress');
const cypressOnFix = require('cypress-on-fix');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
    watchForFileChanges: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        configFile: 'reporter-config.json',
    },
    e2e: {
        specPattern: 'cypress/e2e/**/*.feature',
        async setupNodeEvents(on, config) {
            // "cypress-on-fix" is required because "cypress-mochawesome-reporter" and "cypress-cucumber-preprocessor" use the same hooks
            on = cypressOnFix(on);

            require('cypress-mochawesome-reporter/plugin')(on);

            await addCucumberPreprocessorPlugin(on, config);

            on('before:browser:launch', (browser, launchOptions) => {
                // start browser at full screen mode
                if (browser.family === 'chromium' && browser.name !== 'electron') {
                    launchOptions.args.push('--start-fullscreen');

                    return launchOptions;
                }
                if (browser.name === 'electron') {
                    launchOptions.preferences.fullscreen = true;

                    return launchOptions;
                }

                return launchOptions;
            });

            on('file:preprocessor',
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                }),
            );

            on('task', {
                readFile: filename => {
                    return readFile(filename);
                },
                deleteFile: filePath => {
                    return deleteFile(filePath);
                },
                createFile: filePath => {
                    return createFile(filePath);
                },
            });

            return config;
        },

        // For test profile
        baseUrl: 'https://docs.cypress.io',
    },
    env: {
        filterSpecs: true,
        defaultPageLoadingTime: 1000,
    },
});
