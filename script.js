import generateBTitle from './generator.js';

const instructions = document.getElementById('instructions');
const generateBtn = document.getElementById('generate-btn');
const movieTitleArea = document.getElementById('movie-title');

generateBtn.addEventListener('click', event => {
    if (instructions.textContent) instructions.textContent = '';
    let title = generateBTitle();
    movieTitleArea.innerText = title;
});
