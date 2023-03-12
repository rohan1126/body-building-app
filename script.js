// script.js
const form = document.getElementById("user-info-form");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const ageInput = document.getElementById("age");
  const weightInput = document.getElementById("weight");
  const goalsInput = document.getElementById("goals");

  const age = ageInput.value;
  const weight = weightInput.value;
  const goals = goalsInput.value;

  if (goals.includes("bulk")) {
    const result = "Based on your input you want to bulk";
    resultDiv.textContent = result;
  } else if (goals.includes("cut")) {
    const result = "Based on your input you want to cut";
    resultDiv.textContent = result;
  } else {
    const result = `Age: ${age}, Weight: ${weight} kg, Goals: ${goals}`;
    resultDiv.textContent = result;
  }
});
