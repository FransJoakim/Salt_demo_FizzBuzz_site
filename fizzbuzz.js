const button = document.querySelector('#button-fizzBuzz');
const input = document.querySelector('#input-fizzBuzz');
const fizz = document.querySelector('.fizz');
const buzz = document.querySelector('.buzz');
const fizzbuzz = document.querySelector('.fizzbuzz');
const number = document.querySelector('#number');
const bomb = document.querySelector('.bomb');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const inputNumber = input.value;
  checkingInput(inputNumber);
});

function checkingInput(val) {
  bomb.classList.remove('visible');
  bomb.classList.remove('visible');
  fizzbuzz.classList.remove('visible');
  fizz.classList.remove('visible');
  buzz.classList.remove('visible');
  number.textContent = " "

  if (isNaN(val)) {
    bomb.classList.add('visible');
  } else if (val > 100 || val < 1) {
    bomb.classList.add('visible');
  } else if (val % 3 === 0 && val % 5 === 0) {
    fizzbuzz.classList.add('visible');
  } else if (val % 3 === 0) {
    fizz.classList.add('visible');
  } else if (val % 5 === 0) {
    buzz.classList.add('visible');
  } else {
    number.textContent = val;
  }
}
