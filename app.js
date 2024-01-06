const btns = document.querySelectorAll(".btn");
const body = document.body;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    color = btn.value;
    changeBackgroundColor(color);
  });
});

function changeBackgroundColor(color) {
  body.className = "";

  switch (color) {
    case "Purple":
      body.classList.add("purple");
      break;
    case "Blue":
      body.classList.add("blue");
      break;
    case "Red":
      body.classList.add("red");
      break;
    case "Green":
      body.classList.add("green");
      break;
    case "Orange":
      body.classList.add("orange");
      break;
    case "Teal":
      body.classList.add("teal");
      break;
    default:
      console.log("Invalid color input");
  }
}
