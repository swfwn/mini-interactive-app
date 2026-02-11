const form = document.getElementById("myForm");
const input = document.getElementById("nameInput");
const message = document.getElementById("message");
const resetBtn = document.getElementById("resetBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = input.value.trim();

  if (name === "") {
    message.innerText = "Please enter your name.";
    message.style.color = "red";
    return;
  }

  message.innerText = `Hello, ${name}!`;
  message.style.color = "green";
  input.value = "";
});

resetBtn.addEventListener("click", () => {
  message.innerText = "";
  input.value = "";
});
