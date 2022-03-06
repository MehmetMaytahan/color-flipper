const btn = document.querySelector("#btn");
const span = document.querySelector(".span");

const rgb = () => {
  return Math.floor(Math.random() * 255);
};

const handleChangeColor = () => {
  span.style.color = `rgb(${rgb()},${rgb()},${rgb()})`;
  span.style.background = `rgb(${rgb()},${rgb()},${rgb()})`;

  btn.style.color = `rgb(${rgb()},${rgb()},${rgb()})`;
  btn.style.background = `rgb(${rgb()},${rgb()},${rgb()})`;
};

btn.addEventListener("click", handleChangeColor);
