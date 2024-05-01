@start
Feature: Functions in Search

    Scenario: Check that you can search on Cypress docs page
        Given Go to 'Cypress' page
        When In Cypress page, type 'get' to seach bar
        Then Cypress get command page is displayed
        And Capture screenshot
