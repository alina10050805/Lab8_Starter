# Lab 8 - Starter
Write by Xiangyi Lin

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

    
    I will fit my automated tests within a Github action that runs whenever code is pushed, because we can not make sure if every pushing code is done for testing, and action can reject push if it fail the test.


2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)


    No. End to end test better suited for testing complex interactions rather than simple output of function. It is more suitable for unit test.


3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.


    No. "Messaging" applications involve complex interactions and are more suitable for end to end testing.


4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.


    Yes. This is just a simple test and does not involve complex interactions, so it can be done with unit tests.