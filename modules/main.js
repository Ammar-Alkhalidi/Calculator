import { difference } from "./percentage.js";

//"percentage-change-form"
document
  .getElementById("percentage-change-form")
  .addEventListener("change", () => {
    //  input values
    const firstValue = parseFloat(document.getElementById("change_1").value);
    const secondValue = parseFloat(document.getElementById("change_2").value);

    // Calc percentage difference
    const result = difference(firstValue, secondValue);

    // Set the result in the "change_result" input field
    document.getElementById("change_result").value = result.toFixed(2);
  });
