Feature: Ebay checkout Verification
  As a user on navigates to ebay site
  I want to be able to add 2 items to the cart/trolley and go to checkout


  Scenario Outline: Verify the checkouts items on ebay
    Given the user is on ebay home page
    When the user enters first Product as '<PRODUCT>' and Click on serach button
    Then the user should see the product added in the cart

  @env:uat
    Examples:
      | PRODUCT                                                      |
      | GERMANY 50 REICHSPFENNIG WWII-NAZI SWASTIKA -CIRCULATED      |

  Scenario Outline: Verify the checkouts items on ebay
    Given the user is on ebay home page
    When the user enters second Product as '<PRODUCT>' and Click on serach button
    Then the user should see the product added in the cart

  @env:uat
    Examples:
      | PRODUCT                                                      |
      | 1939 Germany 2 Mark .625 Silver Coin                         |
