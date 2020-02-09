Feature: Todos
  As a user
  I want to update a list of todos

  @unit
  Scenario: I can see a todo
    Given the following todo is defined:
      | id | text | due |
      | 1 | my todo | 2020-02-12 |
    Then it renders correctly

  @ignore
  Scenario: I can mark a todo as complete
    Given the following todo is defined:
      | id | text | due |
      | 1 | my todo | 2020-02-12 |
    When I check the todo
    Then the todo is marked as complete

  @integration
  Scenario: I can see a list of todos when the app loads
    Given Given the following todos are defined:
      | id | text | due |
      | 1 | my todo | 2020-02-12 |
      | 2 | another todo | 2020-02-14 |
    Then I can see "2" todos on the page