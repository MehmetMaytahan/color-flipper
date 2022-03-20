const btn = document.querySelector("#btn");
const span = document.querySelector(".span");
const spanRgb = document.querySelector(".rgb");

const rgb = () => {
  return Math.floor(Math.random() * 255);
};

const handleChangeColor = () => {
  document.body.style.background = `rgb(${rgb()},${rgb()},${rgb()})`;
  span.style.color = `rgb(255,255,255)`;
  spanRgb.textContent = `rgb(${rgb()},${rgb()},${rgb()})`;
};

btn.addEventListener("click", handleChangeColor);
