const body = document.getElementsByTagName("body")[0];

function changeColor(name) {
  body.style.backgroundColor = name;
}
function generateRandonColor() {
  const red = Math.round(Math.random() * 256);
  const green = Math.round(Math.random() * 256);
  const blue = Math.round(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = color;
}
