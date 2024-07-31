const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector("#direction");
const colorInputs = document.querySelectorAll(".colors input[type='color']");
const textarea = document.querySelector("#gradient-code");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");
const addColorButton = document.querySelector('.add-color');
const colorsContainer = document.querySelector('.color-inputs');

const getRandomColor = () => {
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
  return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
  const colors = document.querySelectorAll('.colors input[type="color"]');
  const gradientColors = Array.from(colors).map(color => color.value);
  
  if (isRandom) {
    gradientColors.forEach((color, index) => {
      colors[index].value = getRandomColor();
    });
  }
  
  const gradient = `linear-gradient(${selectMenu.value}, ${gradientColors.join(', ')})`;
  gradientBox.style.background = gradient;
  textarea.value = `background: ${gradient};`;
}

const copyCode = () => {
  navigator.clipboard.writeText(textarea.value);
  copyBtn.innerText = "Code Copied";
  setTimeout(() => copyBtn.innerText = "Copy Code", 1600);
}

colorInputs.forEach(input => {
  input.addEventListener("input", () => generateGradient(false));
});

addColorButton.addEventListener('click', () => {
  const newColorInput = document.createElement('input');
  newColorInput.type = 'color';
  newColorInput.value = '#ffffff';
  colorsContainer.insertBefore(newColorInput, addColorButton);
  newColorInput.addEventListener("input", () => generateGradient(false));
});

selectMenu.addEventListener("change", () => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);

generateGradient(false);