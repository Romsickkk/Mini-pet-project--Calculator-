const nums = document.querySelectorAll(".buttons button");
const display = document.querySelector(".display");

nums.forEach((nums) => {
  nums.addEventListener("click", function () {
    if (nums.textContent === "AC") {
      display.textContent = 0;
    } else if (nums.textContent === "C") {
      display.textContent =
        display.textContent.length > 1
          ? display.textContent.slice(0, -1)
          : (display.textContent = 0);
    } else if (nums.textContent !== "=") {
      display.textContent =
        display.textContent === "0"
          ? (display.textContent = nums.textContent)
          : (display.textContent += nums.textContent);
    } else {
      display.textContent = eval(display.textContent);
    }
  });
});
