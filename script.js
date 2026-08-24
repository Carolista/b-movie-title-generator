import generateBTitle from './generator.js';

const generateBtn = document.getElementById('generate-btn');
const movieTitleArea = document.getElementById('movie-title');

generateBtn.addEventListener('click', event => {
    let title = generateBTitle();
    movieTitleArea.innerText = title;
});
