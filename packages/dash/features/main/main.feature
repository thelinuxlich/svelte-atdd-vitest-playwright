Feature: Testing Playwright

  Scenario: Entering the Main Page
    Given I launched my browser
    When I navigate to the main page
    Then I should see the main page
