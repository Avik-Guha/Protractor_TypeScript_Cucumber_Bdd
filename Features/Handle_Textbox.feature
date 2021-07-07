@Feature_Handle_Textbox
Feature: Handle Textbox
    Feature To Handle Textbox

@Scenario_Enter_Text_In_Textbox
Scenario: Enter Text In Textbox
    Given Launch Application
    When User enters First Name in Registration page
    Then Verify label in Name field
    When User enters Last Name in Registration page