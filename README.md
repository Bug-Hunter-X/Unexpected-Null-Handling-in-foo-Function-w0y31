# Unexpected Null Handling in foo Function

This repository demonstrates a common bug in JavaScript related to handling null values. The `foo` function unexpectedly returns or behaves incorrectly when null is passed as an argument.

## Bug Description

The `foo` function does not correctly handle null values passed as arguments `a` or `b`. This leads to unexpected behavior and may cause errors. The intended behavior is not specified, but we assume a more robust handling of null values is desirable. 

## Bug Reproduction

1. Clone this repository.
2. Run `node bug.js`.
3. Observe the unexpected output.

## Solution

The solution involves adding more explicit checks for null values and handling them appropriately.  This can be done by adding logic to check for null values and either assigning defaults or throwing an exception as appropriate for the specific requirements.

