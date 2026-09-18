// Task 12: let and console.log
let label = "Read";
console.log(label);

// Task 14: click listener — sets #status text to label
document.querySelector("#mark").addEventListener("click", function () {
  document.querySelector("#status").textContent = label;
});
