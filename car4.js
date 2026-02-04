const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let currentValue = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;

    if (value === "C") {
      currentValue = "";
      display.value = "";
    } 
    else if (value === "=") {
      try {
        currentValue = eval(currentValue);
        display.value = currentValue;
      } catch {
        display.value = "Error";
      }
    } 
    else {
      currentValue += value;
      display.value = currentValue;
    }
  });
});
