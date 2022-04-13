import './style.css';
// import addDetails from '../modules/class.js';
// addDetails();


const addBtn = document.querySelector('.submit-btn');
const mainDynamicBox = document.querySelector('.dynamic-box');
const nameValue = document.querySelector('.name-holder');
const scoreValue = document.querySelector('.score-holder');

function fetchAndDisplay() {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

    fetch(url + 'games', {method: 'POST', body: JSON.stringify({name: nameValue.value})})
    .then((response) => {return response.text()}).then((data) => {
       mainDynamicBox.innerHTML = data;
       console.log(data);
    });
};

addBtn.addEventListener('click', () => {
    fetchAndDisplay();
})

