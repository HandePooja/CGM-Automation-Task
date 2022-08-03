Feature: The CompuGroup Medical

  Scenario Outline: As a user, I can search doctor online
    Given I open the browser and load the url <urlname>
    When I click on cookies accept button
    And I click on doctor search button
    And I enter doctor's name <doctorname> in search field
    And I click on search button
    Then I validate Title <title>

    Examples: 
      | urlname                         | doctorname | title                                 |
      | https://demo.clickdoc.de/cd-de/ | Peter Test | https://demo.clickdoc.de/cd-de/search |
