# JavaScript Null Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to how functions handle null values. The `foo` function returns null if either input is null, but this makes it harder to determine whether null is a valid return value or if it indicates a problem with the inputs.

## Bug Description

The issue lies in the immediate return of `null` when either `a` or `b` is `null`.  This can mask actual errors in cases where the null value might be unintentional.

## Solution

The solution involves differentiating between intended null values and cases where null input leads to a premature return.  By handling the null cases more explicitly, we can avoid unintended null results. 

## How to Reproduce

Clone the repository, then run `bug.js`. Examine the output to see how null values lead to an early exit, potentially hiding issues.

Run `bugSolution.js` to see the improved version.