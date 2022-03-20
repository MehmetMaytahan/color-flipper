const btn = document.querySelector("#btn");
const spanRgb = document.querySelector(".rgb");

const handleChangeColor = () => {
  document.body.style.background = rgb();
  spanRgb.textContent = rgb();
};

const rgb = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

btn.addEventListener("click", handleChangeColor);
