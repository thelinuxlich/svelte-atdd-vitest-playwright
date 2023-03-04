Feature: Calculator

  Scenario: Adding two numbers together
    Given I have entered 40 into the calculator
    And I have entered 70 secondly into the calculator
    When I press add
    Then the result should be 110 on the screen
