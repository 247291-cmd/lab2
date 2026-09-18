// Task 12: let and console.log
let label = "Read";
console.log(label);

// Task 13: querySelector (kept as a reference comment — live line removed per Task 14)
// document.querySelector("#status");

// Task 14: addEventListener click
// Clicking "Mark as read" sets the #status paragraph text to the value of label ("Read")
document.querySelector("#mark").addEventListener("click", function () {
  document.querySelector("#status").textContent = label;
});
