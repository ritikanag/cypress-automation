Feature: End to end saucelabs flow

    Scenario: Product Purchase
    Given I am on the saucelabspage
    When I login into the application
    And I add items to the cart and do a checkout
    And fill the checkout form
    And validate the total price , click finish
    Then verify thank you
`