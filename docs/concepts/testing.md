# Software Testing

In the world of software development, there are many different forms of testing, but they all seek to accomplish the same goal. That is, verify that a program has the correct behavior. In practical terms, that takes many forms. You might be testing that:

- A function produces the correct output given a certain input
- A user interface renders the correct page, or the correct elements on a page
- A tool either doesn't throw unexpected errors, or does throw errors when it should
- and many more situations!

Testing is one of many tools that can be used to catch bugs early in the development cycle. It also helps catch **regressions**, where a change might have broken something else.

**General Resources**

- https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing

## Concepts

### Test cases

A test case is a description of what is being tested, along with examples of expected output given an input.

### Test harnesses (stubs, mocks, drivers)

A test harness includes all things required to simulate an environment for a test to run. Oftentimes production code depends on external services, like databases or APIs. In a testing environment, it's desirable to provide a fake version of the components that the thing being tested depends on. This helps reduce test runtime, simplifies the test implementation, and allows us to further control the test inputs.

[Test Harness | Wikipedia](https://en.wikipedia.org/wiki/Test_harness)

### Code coverage

Code coverage is a percent metric that defines how much of the code in an application is "covered" by a test. That is, that code gets tested. Typically, you strive for high code coverage as that indicates a high level of testing over an application, which can translate to

[What is code coverage? | Atlassian](https://www.atlassian.com/continuous-delivery/software-testing/code-coverage)

## Common types of tests

When implementing tests for an application, there are many different kinds of testing. Each has its own pros and cons. Usually, multiple forms of testing are used to ensure a good coverage.

### Unit Testing

Unit testing is among the most common forms of testing. It consists of writing tests than only target specific functions or methods within a class to verify correct output.

[What is unit testing? | Amazon AWS](https://aws.amazon.com/what-is/unit-testing/)

**Pros**

- Easy to implement
- Can be run in parallel, providing quick feedback to developers

**Cons**

- Does not test larger interactions within an application, either between services or between the service and its users

### Integration Testing

Integration testing is a more comprehensive testing method that tests how a services within an application integrate with eachother. This is commonly used within apps that are built using a microservice architecture, where different responsibilities are handled by independent mini-applications. An integration test would spin up 2 or more of these microservices and test their interaction with each other.

**Pros**

- Provides more comprehensive feedback on application functionality

**Cons**

- Longer runtime
- More complex to set up

### End-to-End (E2E) Tests

End-to-End tests are typically used to test user interactions with an application. This usually involves testing whether certain pages will load, following flows for login/payment/etc, and ensuring that the system performs all that it should in response to user actions.

### Functional Tests

**Pros**

- Much easier to test lots of flows automatically than manually
- Covers lots of different logic and thus smaller bugs might show up sooner

**Cons**

- Longer runtime
- More complex to set up

### Performance tests

_This section does not have a pro/con list as it tests a different aspect of the application as compared to the other methods above._

Performance test is fairly self explanatory. It is used to ensure that an application performs consistently; it can help detect if changes have made some portion of the logic run slower. In certain situations, performance can be critical to a good product experience and keeping users on board.
