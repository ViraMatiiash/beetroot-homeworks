// 1. mouseover
const squareRed = document.getElementById('js-square-red');
const colorChange = () => (squareRed.style.backgroundColor = 'black');
squareRed.addEventListener('mouseover', colorChange);

// 2. click
const squareGreen = document.getElementById('js-square-green');
const text = () => squareGreen.innerText = 'Green';
squareGreen.addEventListener('click', text);

// 3. mouseout
const squarePink = document.getElementById('js-square-pink');
const squareDisappear = () => squarePink.style.display = 'none';
squarePink.addEventListener('mouseout', squareDisappear);

// 4. resize
const squareYellow = document.getElementById('js-square-yellow');
const squareResize = () => squareYellow.style.transform = 'scale(2)';
window.addEventListener('resize', squareResize);

// 5. wheel
const squareBlue = document.getElementById('js-square-blue');
const squareTranslate = () => squareBlue.style.transform = 'translateY(-150%)';
squareBlue.addEventListener('wheel', squareTranslate);

