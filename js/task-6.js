function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const default_size_box = 30;
const min_quantity = 1;
const max_quantity = 100;

const controlsRef = document.querySelector('#controls');
const inputRef = controlsRef.querySelector('input');
const createBtnRef = controlsRef.querySelector('button[data-create]');
const destroyBtnRef = controlsRef.querySelector('button[data-destroy]');

const boxesContainerRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', () => {
  const quantity = Number(inputRef.value);
  inputRef.value = '';

  if (quantity < min_quantity || max_quantity < quantity) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  createBoxes(quantity);
});

destroyBtnRef.addEventListener('click', () => {
  boxesContainerRef.innerHTML = '';
});

function createBoxes(amount) {
  let markup = '';

  for (let i = 0; i < amount; i++) {
    markup += getBoxMarkup({
      size: `${default_size_box + 10 * i}px`,
      bgColor: getRandomHexColor(),
    });
  }

  console.log(markup);

  boxesContainerRef.innerHTML = markup;
}

function getBoxMarkup({ size, bgColor }) {
  return `
      <div class="box" style="width: ${size}; height: ${size}; background-color: ${bgColor}">
      </div>
    `;
}
