import './style.css';
// import addDetails from '../modules/class.js';
// addDetails();


const addBtn = document.querySelector('.submit-btn');
const mainDynamicBox = document.querySelector('.dynamic-box');

function fetchAndDisplay() {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
    fetch(url).then((response) => {return response.json()}).then((data) => {
       mainDynamicBox.innerHTML = data;
       console.log(data);
    });
};

addBtn.addEventListener('click', () => {
    fetchAndDisplay();
})

