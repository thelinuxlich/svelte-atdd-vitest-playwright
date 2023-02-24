Feature: Authentication

  Scenario: Guest user access the main page
    Given I am a guest user
    When I visit the homepage
    Then I should see the login form

  Scenario: Guest user tries to access another page
    Given I am a guest user
    When I try to visit any other page
    Then I should be redirected to the login form

  Scenario: Guest user enters an existing phone number in the login form
    Given I am a guest user
    And I am on the main page
    When I enter a valid phone number in the login form
    Then I should see the OTP input field, a "Send Code", a "Login" and a "Resend Code" button

  Scenario: Guest user enters an invalid phone number in the login form
    Given I am a guest user
    And I am on the main page
    When I enter an invalid phone number in the login form
    And I click "Send Code"
    Then I should see an error message: "User not found."

  Scenario: Guest user enters an invalid OTP
    Given I am a guest user
    And I am on the main page
    When I enter a valid phone number in the login form
    And I enter an invalid OTP in the OTP input field
    And I click "Login"
    Then I should see an error message: "Invalid code."

  Scenario: Guest user enters a valid OTP
    Given I am a guest user
    And I am on the main page
    When I enter a valid phone number in the login form
    And I enter a valid OTP in the OTP input field
    And I click "Login"
    Then I should be redirected to the dashboard

  Scenario: Logged user access the main page
    Given I am a logged user
    When I visit the homepage
    Then I should be redirected to the dashboard

  Scenario: Logged user tries to access the login form
    Given I am a logged user
    When I try to visit the login form
    Then I should be redirected to the dashboard

  Scenario: Logged user with expired OTP
    Given I am a logged user
    And I have an expired OTP
    When I try to visit any other page
    Then I should be redirected to the login form

  Scenario: Logged user wants to disconnect
    Given I am a logged user
    And I am on the dashboard
    When I click "Disconnect"
    Then I should be redirected to the login form

  Scenario: Guest user tries to reset the OTP too many times in a short period of time
    Given I am a guest user
    And I am on the main page
    When I enter a valid phone number in the login form
    And I click "Resend Code" 2 times
    Then I should see an error message: "Too many attempts. Try again later."
    And the "Resend Code" button should be disabled
