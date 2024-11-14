# % Calculator

This calculator app is mostly complete, but will draw on your knowledge of modules and event handlers to finish.

## Tasks

Before starting, take a look at the provided file;

- [modules/percentage.js](./modules/percentage.js)

You will have to use this logic to complete the functionality for the UI.

The [HTML](./index.html) has already been written for you. You can use Live Server to view this page.

### Task 1

1. Export the function from the above file
2. Import it into [modules/main.js](./modules/main.js)
3. Import the JavaScript file [modules/main.js](./modules/main.js) into [index.html](./index.html)

### Task 2

We want to capture and process all the changes to the `<form>` with the id `percentage-change-form`.

In [main.js](./modules/main.js);

- Add a `change` event listener to the id `percentage-change-form`
- Every time the `change` handler is triggered;
  - capture the user input from the `<input>` elements with the id `change_1` and `change_2`
  - use the `difference` function you imported to calculate the result
  - set the result as the value of the element with the id `change_result`

### Task 3

Test the UI!

If correctly setup, the result should show automatically after the user enters both values.
